import { cart,removeFromCart,removeCartQuantity } from "../script/cart.js";
import { products } from "../script/products.js";


let cartQuantity = 0, TotalPrice = 0, deliveryCost = 0, RemoveTotalCost = 0;

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
                <div class="delivery-cost">
                    Delivery Fee: $${(matcheingProduct.delivery /100).toFixed(2)}
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
            <button  class="js-delete-btn" data-product-id="${matcheingProduct.id}"><i class="fa-regular fa-trash-can"></i></button>   
    
            </div>

    
    `;

    TotalPrice += Number((matcheingProduct.price /100).toFixed(2) * cartItem.quantity );
    deliveryCost += Number(matcheingProduct.delivery /100);

   
});

document.querySelector('.js-order-summary').innerHTML = cartProductHTML;
document.querySelector('.total-price').innerHTML = `$${(TotalPrice).toFixed(2)}`;
document.querySelector('.shipping-cost').innerHTML = `$${(deliveryCost).toFixed(2)}`;
document.querySelector('.total-cost').innerHTML = `$${(TotalPrice + deliveryCost).toFixed(2)}`;




document.querySelectorAll(".js-delete-btn").forEach((link) => {

    link.addEventListener('click', () =>{
        const productId = link.dataset.productId
        removeFromCart(productId);
        const removeContainer =  document.querySelector(`.js-product-container-${productId}`);
        removeContainer.remove();
        removeQuantity(removeCartQuantity);
     
    });
});


function removeQuantity(quantity){

        cartQuantity -=  quantity
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        document.querySelector('.total-items').innerHTML = `Subtotal (${cartQuantity} items)`;
    }



cart.forEach((item) =>{
    cartQuantity += item.quantity;
    
    
});

document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
document.querySelector('.total-items').innerHTML = `  Subtotal (${cartQuantity} items)`;




if (cart.length == 0 ){
    document.querySelector('.js-order-summary').innerHTML =  `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <a href="cart.html">View Products</a>
            </div>

    `
}

