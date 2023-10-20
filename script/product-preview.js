import { matchingProduct } from "../script/cart.js";


  

document.querySelector('.product-preview').innerHTML = `       

<div class="product-image-container">
<div class="product-image">
      <div class="image">
         <img src="${matchingProduct.image}">
     </div>

       <div class="multi-image">
             <img src="image/watch/watch 1.jpg">
             <img src="image/watch/watch 2.jpg">
             <img src="image/watch/watch 3.jpg">
             <img src="image/watch/watch 4.jpg">
             <img src="image/watch/watch 5.jpg">
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
             <i class="fa-solid fa-truck"></i> <p>Standard Delivery 23 Oct - 27 Oct</p>
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

`



