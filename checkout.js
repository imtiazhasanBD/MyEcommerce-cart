import { cart,removeFromCart } from "./cart.js";
import { products } from "./products.js";


let cartProductHTML = '';


cart.forEach((cartItem) =>{

    const productId = cartItem.productId;

    let matcheingProduct;

    products.forEach((product) => {

            if(product.id === productId){
                matcheingProduct = product;
            }
           
    });

    cartProductHTML += 

    `
    <div class="order-container js-product-container-${matcheingProduct.id}">
            <div class="order-product-image">
                <img src="${matcheingProduct.image}" alt="">
            </div>
            <div class="product-delails">
                <div class="product-name">${matcheingProduct.name}</div>
                <div class="product-price">${matcheingProduct.price}</div>
                <div class="product-quntity">${cartItem.quantity}</div>
                <button class="js-delete-btn" data-product-id="${matcheingProduct.id}">Delete</button>
            </div>

        </div>
    
    `;
    

});

document.querySelector('.js-order-summary').innerHTML = cartProductHTML


document.querySelectorAll(".js-delete-btn").forEach((link) => {

            link.addEventListener('click', () =>{
                const productId = link.dataset.productId
                removeFromCart(productId)
               const removeContainer =  document.querySelector(`.js-product-container-${productId}`);
               removeContainer.remove()
               
            })
})
