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

        <div class="cart-product-title">

            <div class="order-product-image">
                <img src="${matcheingProduct.image}">
            </div>

            
            <div class="order-product-detalis">

                <div class="product-name">${matcheingProduct.name}                       
                </div>

                <div class="product-color-size">
                    <div class="size">Size:XL</div>
                    <div class="color">Color:Red</div>
                </div>
                
                <div class="product-brand">
                    Brand:Gucci
                </div>
            </div>


        </div>
            
            
        <div class="product-delails">
            <div class="product-price">$${(matcheingProduct.price /100).toFixed(2)}</div>
            <div class="product-quntity">
                <button class="minus-btn"><i class="fa-solid fa-minus"></i></button>
                ${cartItem.quantity}
                <button class="plus-btn"><i class="fa-solid fa-plus"></i></button>
            
            </div>
                </div>
            <button class="js-delete-btn" data-product-id="${matcheingProduct.id}"><i class="fa-regular fa-trash-can"></i></button>   
    
            </div>

  
    
    `;
  
});

document.querySelector('.js-order-summary').innerHTML = cartProductHTML;


document.querySelectorAll(".js-delete-btn").forEach((link) => {

            link.addEventListener('click', () =>{
                const productId = link.dataset.productId
                removeFromCart(productId)
               const removeContainer =  document.querySelector(`.js-product-container-${productId}`);
               removeContainer.remove()
               
            })
})
