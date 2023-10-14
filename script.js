import { cart,addToCart } from "./cart.js";
import { products } from "./products.js";


products.forEach(product =>{

    const html = `
    <div class="product-item js-product-addBtn" data-product-item="${product.name}">
        <div class="product-photo">
            <img src="${product.image}" alt="">
        </div>
        <div class="product-name">
            ${product.name}
        </div>
        <div class="product-price">
            $${(product.price / 100).toFixed(2)}
        </div>
        <div class="product-rating">
            <img src="${product.rating}" alt="">
        </div>
        <div class="addToCart-btn">
        <div class="addCart-btn">
        <button class="add-btn" data-product-id ="${product.id}">Add Cart</button>
        </div>
        <div class="added-btn js-added-to-cart"><img src="images/checkmark.png">Added</div>   
        </div>
    </div> 
    
    `
    document.querySelector('.product-container').innerHTML += html;
});


 updateCartQuantity();

    function updateCartQuantity(){
        let cartQuantity = 0;

        cart.forEach((item) =>{
            cartQuantity += item.quantity;
            
        })

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
      
    }


    document.querySelectorAll('.add-btn').forEach((button) => {

        button.addEventListener('click', () =>{
         const productId =   button.dataset.productId;
         addToCart(productId);
         updateCartQuantity();
 
        });

        
    });
    



 const addedMessage = document.querySelector(`.added-btn`)


      addedMessage.classList.add('added-to-cart-visible');

 

      setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible');
      }, 2000);




      



  
    
    
    
      
    
    






 const imgTag = document.querySelector('.slide-bar img')
 const imgSlider = ['images/slider 0.png','images/slider 1.jpg','images/slider 2.jpg' ]
 let count = 0;
 
 setInterval(()=>{
    count++
    if(count >= imgSlider.length){
        count = 0;
        imgTag.src = imgSlider[count]
    }else{
        imgTag.src = imgSlider[count]
    }
 }, 5000)




 
 /* Product FlashSell start form here  */ 

 setInterval(()=>{
    const tomorrow = new Date('28 june 2023 23:59:59');
const today = new Date();
const totalTime =   tomorrow - today;



let totalSceond = Math.floor(totalTime / 1000);
let totalMinutes = Math.floor(totalSceond / 60);
let totalHour = Math.floor(totalMinutes  / 60);


let remainSceond = totalSceond % 60
let remainMinute = totalMinutes % 60
let remainHour = totalHour % 60

document.querySelector('.second').innerHTML = remainSceond;
document.querySelector('.minute').innerHTML = remainMinute;
document.querySelector('.hour').innerHTML =  remainHour;

 },1000)



 /* FlashSell Product */

 products.forEach((protuct) =>{

    const html = `
    <div class="product-item">
                
    <div class="product-photo">
    <img src="${protuct.image}" alt="">
    </div>
    <div class="product-name">
    ${protuct.name}
    </div>
    <div class="discount-price">
        10.50
    </div>
    <div class="product-price">
   <p> $${(protuct.price / 100).toFixed(2)} </p>
        <div id="dis-pertenage">-50%</div> 
    </div>
  
    <div class="addToCart-btn">
        <div class="addCart-btn">
        <button class="add-btn js-add-TOCart" data-product-id ="${protuct.id}">Add Cart</button>
    </div>
    <div class="added-btn" > </div>   
    </div>

</div>  
    
    `
    document.querySelector('.sell-items').innerHTML += html
})


document.querySelectorAll('.js-add-TOCart').forEach((button) => {

    button.addEventListener('click', () =>{
     const productId =   button.dataset.productId;
     addToCart(productId)
     updateCartQuantity()   

    });
    
});




let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product-item')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 203;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 504;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}