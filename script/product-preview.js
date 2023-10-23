import { cart,matchingProduct, addToCart,productPreview } from "../script/cart.js";
import { products,shortedName } from "../script/products.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"

const CartQuantityEl = document.querySelector('.js-cart-quantity');

//delivery date generator  
const tooday = dayjs();
const afterThreeDay = tooday.add(3, "days");
const afterSevenDay = tooday.add(7, "days");
  

//changing document tiitle
document.querySelector('title').innerHTML = matchingProduct.name;



//render matching product on page
document.querySelector('.product-preview').innerHTML = 

`       
<div class="product-image-container">
<div class="product-image">
    <div class="multi-image">
        <img src="${matchingProduct.image}">
        <img src="image/watch/watch 1.jpg">
        <img src="image/watch/watch 2.jpg">
        <img src="image/watch/watch 3.jpg">
        <img src="image/watch/watch 4.jpg">
        <img src="image/watch/watch 5.jpg">
    </div>
      <div class="image">
         <img src="${matchingProduct.image}" id="preview-image">
     </div>

</div>

 <div class="product-btn">
    
     <button class="addCart-btn">ADD TO CART</button>
     <button class="BuyNow-btn">BUY NOW</button>
 </div>

</div>

<div class="product-details-container">

    <div class="product-details">

        <div class="product-name">
        ${matchingProduct.name}
        </div>

        <div class="product-Price">
            $${(matchingProduct.price / 100).toFixed(2)}
        </div>

        <div class="product-brand-size">
            <div class="product-color-size">
                <div class="size">Size:XL</div>
                <div class="color">Color:Red</div>
            </div>
            
            <div class="product-brand">
                Brand:Gucci
            </div>
        </div>

        <div class="product-rating">
            <div class="rating-image">
                <img src="${matchingProduct.rating}">
            </div>
            <p>14,077 Ratings & 990 Reviews</p>
        </div>

        <div class="delivery-details">
            <div class="delivery-time">
                <i class="fa-solid fa-truck"></i> <p><b>Standard Delivery</b> ${afterThreeDay.format("DD MMM YY")} - ${afterSevenDay.format("DD MMM YY")}</p>
            <p class="delivery-cost">$${(matchingProduct.delivery / 100).toFixed(2)}</p>
            </div>
            <div class="cash-on-delivery">
                <i class="fa-solid fa-money-check-dollar"></i>
                <p>Cash on Delivery Available</p>
            </div>

        </div>
        

     <div class="product-description">
         <p>Product details:</p>
         <ul class="product-des-table">
             <li>Country as Labeled</li>
             <li>100% brand new and high quality.</li>
             <li>Specially designed joint, quick release wrist strap, moderate softness, very comfortable to wear.</li>
             <li>The size can be adjusted according to individual wrist condition. One size fits all.</li>
             <li>Exquisite craftsmanship and stylish design are the perfect gift for friends and family.</li>
             <li>If you have any questions about the product, please contact our customer service, we will serve you wholeheartedly!</li>
         </ul>
     </div>
     
 </div>

`;


//Preview product AddToCart Button
document.querySelector('.addCart-btn').addEventListener('click', () =>{
        const productId = matchingProduct.id;
        addToCart(productId);
        cartQuantity ++
        CartQuantityEl.innerHTML = cartQuantity;
});



//Updating The CartQuantity  
let cartQuantity = 0;

cart.forEach((item) =>{
    cartQuantity += item.quantity;
});
CartQuantityEl.innerHTML = cartQuantity;



// Changing preview image 
  document.querySelectorAll('.multi-image img').forEach((button) =>{
            button.addEventListener('mouseover', () =>{
                const img = button.src;
                document.querySelector('#preview-image').src = img;
            });
  });




//Related Products render
products.forEach((product) =>{
    const catagory = matchingProduct.catagory
    let relatedProduct = [] ;
    
    if(catagory === product.catagory){
        relatedProduct = product;
      if(relatedProduct.id !== matchingProduct.id){

        document.querySelector('.related-products').innerHTML += `
        
        <div class="related-products-item">

                <a href="Product-preview.html" class="related-products-photo js-productPreview-addBtn" data-product-id ="${relatedProduct.id}">
                    <img src="${relatedProduct.image}" alt="">
                </a>
                <div class="related-products-name">
                ${shortedName(relatedProduct.name)}
                </div>
                <div class="related-products-price">
                $${(relatedProduct.price/100).toFixed(2)}
                </div>
                <div class="related-products-rating">
                    <img src="images/rating-4.png" alt="">
                </div>
                <div class="addToCart-btn">
                    <div class="addCart-btn">
                    <button class="add-btn js-add-TOCart" data-product-id ="${relatedProduct.id}">Add Cart</button>
                </div>
                <div class="added-btn" > </div>   
                </div>

            </div>  
        
        `
      };
    };
});



//Related Product AddToCart Button
document.querySelectorAll('.js-add-TOCart').forEach((button) =>{
    button.addEventListener('click', () =>{
        const productId = button.dataset.productId;
        addToCart(productId);
        cartQuantity ++
        CartQuantityEl.innerHTML = cartQuantity;
    });
});

// Preview product Add Button    
document.querySelectorAll('.js-productPreview-addBtn').forEach((button) =>{
    button.addEventListener('click', () =>{
        const productId = button.dataset.productId;
          productPreview(productId);
    });
});
