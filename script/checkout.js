import { cart,removeFromCart } from "../script/cart.js";
import { products } from "../script/products.js";



//all elements
const orderSummaryEl = document.querySelector('.js-order-summary');
const TotalPriceEl = document.querySelector('.total-price');
const ShippingCostEl = document.querySelector('.shipping-cost');
const TotalCostEl = document.querySelector('.total-cost');
const CartQuantityEl = document.querySelector('.js-cart-quantity');
const TotalItemEl = document.querySelector('.total-items');


let cartQuantity = 0,deliveryCost = 0, TotalPrice = 0;
let cartProductHTML = '';


//creating cart product html templete
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

            <div class="order-product-image" data-product-id="${matcheingProduct.id}">
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

  // calculate totalprice and Total delivery Cost  
    TotalPrice += Number((matcheingProduct.price /100).toFixed(2) * cartItem.quantity );
    deliveryCost += Number(matcheingProduct.delivery /100);
  
   
});

//remder cart product and total cost on checkout page
orderSummaryEl.innerHTML = cartProductHTML;
TotalPriceEl.innerHTML = `$${(TotalPrice).toFixed(2)}`;
ShippingCostEl.innerHTML = `$${(deliveryCost).toFixed(2)}`;
TotalCostEl.innerHTML = `$${(TotalPrice + deliveryCost).toFixed(2)}`;



// calculate the removing item cost
function RemoveCostQuantity(){
    let TotalPrice = 0, cartQuantity = 0, deliveryCost = 0;
   
    cart.forEach((item) => {
        const id = item.productId
        let matchingItem;
        cartQuantity += item.quantity;

        products.forEach((product) =>{
            if(product.id === id){
                matchingItem = product;
            };
        });

        TotalPrice += Number(matchingItem.price/100 * item.quantity);
        deliveryCost += Number(matchingItem.delivery /100);
    });


//remder update cost
    TotalPriceEl.innerHTML = `$${(TotalPrice).toFixed(2)}`;
    CartQuantityEl.innerHTML = cartQuantity; 
    TotalItemEl.innerHTML = `Subtotal (${cartQuantity} items)`;
    ShippingCostEl.innerHTML = `$${(deliveryCost).toFixed(2)}`;
    TotalCostEl.innerHTML = `$${(TotalPrice + deliveryCost).toFixed(2)}`;
};


// cart product delete button
document.querySelectorAll(".js-delete-btn").forEach((link) => {

    link.addEventListener('click', () =>{
        const productId = link.dataset.productId
        removeFromCart(productId);
        const removeContainer =  document.querySelector(`.js-product-container-${productId}`);
        removeContainer.remove();
        RemoveCostQuantity();
        
     
    });
});



// cart product preview button
document.querySelectorAll('.order-product-image').forEach((button) =>{
    
    button.addEventListener('click', () =>{
        const productId = button.dataset.productId;
        let productName;
          products.forEach((product) => {
            if(productId === product.id){
                productName = product.name
            };
          });
          window.location.href = `Product-preview.html?q=${productName}`;
    });
});



//updating the cart quantity
cart.forEach((item) =>{
    cartQuantity += item.quantity;
});

// render cart quantity
CartQuantityEl.innerHTML = cartQuantity;
TotalItemEl.innerHTML = `  Subtotal (${cartQuantity} items)`;



// cart is empty message 
if (cart.length === 0 ){
    document.querySelector('.js-order-summary').innerHTML =  `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <a href="index.html">View Products</a>
            </div>

    `;
};



// Product Search button
const searchInput = document.querySelector('.user-input'); 
const searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click',  () => {
    const query = searchInput.value;
    window.location.href = `search-product.html?q=${query}`;
});
