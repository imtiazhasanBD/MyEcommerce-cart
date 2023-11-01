import { cart,addToCart } from "../script/cart.js";
import { products, shortedName, dealShortedName } from "../script/products.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"


// Render Products on homePage
const productContainer = document.querySelector('.product-container')
const productPerPage = 12;
let currentPage = 1;

function displayProduct(page){
     const start = (page -1) * productPerPage;
     const end = start + productPerPage;
     const productToDisplay = products.slice(start,end);
     currentPage++;
     productToDisplay.forEach((product) =>{
        const ProductHtml = productHtmlTemplate(product);
        productContainer.innerHTML += ProductHtml;
     }); 
     if(end > products.length){
        loadMoreBtn.style.display = "none"}; 
};
// display product to page
displayProduct(currentPage);




/// products html template
function productHtmlTemplate(product){
    const html = `
    <div class="product-item" data-product-item="${product.id}">
        <div class="product-photo js-product-addBtn" data-product-id="${product.id}">
            <img src="${product.image}" alt="">
        </div>
        <div class="product-name">
            ${shortedName(product.name)}

        </div>
        <div class="product-price">
            $${(product.price / 100).toFixed(2)}
        </div>
        <div class="product-rating">
            <img src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count">(${product.rating.count})</div>
        </div>
        <div class="addToCart-btn">
        <div class="addCart-btn">
        <button class="add-btn" data-product-id ="${product.id}">Add Cart</button>
        </div>
        <div class="added-btn js-added-to-cart"><img src="images/checkmark.png">Added</div>   
        </div>
    </div> 
    
    `
   return html
};

 /* render FlashSell Products */
 products.forEach((protuct) =>{

    const html = `
    <div class="product-item">
                
    <div class="product-photo js-sell-product-addBtn" data-product-id="${protuct.id}">
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
    document.querySelector('.sell-items').innerHTML += html;
});




// updating the cartQuantity
 updateCartQuantity();

    function updateCartQuantity(){
        let cartQuantity = 0;

        cart.forEach((item) =>{
            cartQuantity += item.quantity; 
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    };




// Products Add to cart Button 
function productAddToCartBtn(){
    document.querySelectorAll('.add-btn').forEach((button) => {

        button.addEventListener('click', () =>{
         const productId =   button.dataset.productId;
         addToCart(productId);
         updateCartQuantity();
 
        });
    });
};
productAddToCartBtn();

    

// Preview product Add Button    
function ProductPreviewBtn(){
document.querySelectorAll('.js-product-addBtn, .js-sell-product-addBtn').forEach((button) =>{
    button.addEventListener('click', () =>{
        const productId = button.dataset.productId;
        let productName;
        products.forEach((product) => {
        if(productId === product.id){
            productName = product.name
        };
        })
        window.location.href = `Product-preview.html?q=${productName}`;
    });
});
};

ProductPreviewBtn();




// product added to cart message
    const addedMessage = document.querySelector(`.added-btn`)
      addedMessage.classList.add('added-to-cart-visible');

      setTimeout(() => {
        addedMessage.classList.remove('added-to-cart-visible');
      }, 2000);





// image slider
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
 }, 5000);




 

// flashsell timer
 setInterval(()=>{
    const tooday = dayjs()
    const deliverydate = tooday.add(0, "days");

    const setDay = deliverydate.format("DD MMMM YYYY")
    const tomorrow = new Date(`${setDay} 23:59:59`);
    const today = new Date();
    const totalTime =   tomorrow - today;



let totalSceond = Math.floor(totalTime / 1000);
let totalMinutes = Math.floor(totalSceond / 60);
let totalHour = Math.floor(totalMinutes  / 60);
let remainSceond = totalSceond % 60
let remainMinute = totalMinutes % 60
let remainHour = totalHour % 60

document.querySelector('.second').innerHTML = String(remainSceond).padStart(2, '0');;
document.querySelector('.minute').innerHTML = String(remainMinute).padStart(2, '0');;
document.querySelector('.hour').innerHTML =  String(remainHour).padStart(2, '0');;

 },1000);





 /* Product FlashSell start form here  */ 
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



// Product Search element
const searchInput = document.querySelector('.user-input'); 
const searchBtn = document.querySelector('.search-btn');
// Product Search button
searchBtn.addEventListener('click',  () => {
    const query = searchInput.value;
    window.location.href = `search-product.html?q=${query}`;
});


//enter key button
searchInput.addEventListener('keyup', (even) =>{
    if(even.key === 'Enter'){
        const query = searchInput.value;
        window.location.href = `search-product.html?q=${query}`;
    }
})

/// product load more button
const loadMoreBtn = document.querySelector('.seeMore-btn');

loadMoreBtn.addEventListener('click', () =>{
    displayProduct(currentPage);
    ProductPreviewBtn();
    productAddToCartBtn();
});


//Fashion Top Deals product
const fashionProductContainer = document.querySelector('.fashion-deals-product')
products.forEach((product) =>{
    if(product.catagory === 'fashion'){
        const productHtml = `
    <div class="product-item">             
        <div class="product-photo js-sell-product-addBtn" data-product-id="${product.id}">
        <img src="${product.image}" alt="">
        </div>
        <div class="product-name">
        ${dealShortedName(product.name)}
        </div>
        <div id="dis-pertenage">Up To 50% Off
        </div>  
    </div>  

        `

        fashionProductContainer.innerHTML += productHtml;
    };
});