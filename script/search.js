import {products, searchProducts,shortedName } from "../script/products.js";
import { cart,addToCart } from "../script/cart.js";


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


// recive user search input from url
const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get('q');
let filterProducts = searchProducts(query);

// run render product function
renderProductHtml(filterProducts,query);




// render search product html
function renderProductHtml(newProduct,value){
    document.querySelector('.search-matching-product').innerHTML = "";

    if(query === "" ){
        document.querySelector('.search-matching-product').innerHTML = "No products found"
    }else{
        newProduct.forEach(product => {
            document.querySelector('.search-matching-product').innerHTML += 
        `
        <div class="product-item" data-product-item="${product.id}">
            <div href="Product-preview.html" class="product-photo js-product-addBtn" data-product-id="${product.id}">
                <img src="${product.image}" alt="">
            </div>
            <div class="product-name">
                ${shortedName(product.name)}
    
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
        
        `;
        });
       
    }
     document.querySelector('.number-of-itens').innerHTML = `${newProduct.length} items found for "${value}"`;
};


// Preview product Add Button    
function previewProduct(){
    document.querySelectorAll('.js-product-addBtn').forEach((button) =>{
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

previewProduct();

const CartQuantityEl = document.querySelector('.js-cart-quantity');
//Updating The CartQuantity  
let cartQuantity = 0;

cart.forEach((item) =>{
    cartQuantity += item.quantity;
});
CartQuantityEl.innerHTML = cartQuantity;

//search product AddToCart Button
function productAddToCart(){
    document.querySelectorAll('.add-btn').forEach((button) => {
        button.addEventListener('click', () =>{
         const productId =   button.dataset.productId;
         addToCart(productId);
         cartQuantity ++
         CartQuantityEl.innerHTML = cartQuantity;
    
        });
    });    
};
productAddToCart();



//product sort by price low/high
function ProductSortFilter(){
    const seleteElement = document.querySelector('#sort-list');

seleteElement.addEventListener('change', () =>{
    const seleteValue = seleteElement.value;

// sort products Low To hight
if(seleteValue === 'Low To high'){
    filterProducts = filterProducts.sort((a,b) => a.price - b.price);
   renderProductHtml(filterProducts,query);
};
// sort products high To low
if(seleteValue === 'High To Low'){
   filterProducts  = filterProducts.sort((a,b) => b.price - a.price);
   renderProductHtml(filterProducts,query);

};
previewProduct();
productAddToCart();
});
};

ProductSortFilter();

//product filter
const filterInput = document.querySelectorAll('.product-price .product-catagory input');

filterInput.forEach((button) =>{
    button.addEventListener('change', ()=>{
        if(button.checked){
           const value = Number(button.value);
           filterProductByPrice(value);
        }else{
             filterProducts = searchProducts(query);
            renderProductHtml(filterProducts,query);
        };
        previewProduct();
        productAddToCart();
    });
});


// products filter by price range
function filterProductByPrice(price){

    if(price=== 50){
        filterProducts = filterProducts.filter(product => product.price < price*100);
  
    }else if(price=== 100){
        filterProducts = filterProducts.filter(product => product.price >= 50*100 && product.price <= price*100);

    }else if(price=== 200){
        filterProducts = filterProducts.filter(product => product.price > 100*100 && product.price <= price*100);
    }
    else if(price=== 201){
        filterProducts = filterProducts.filter(product => product.price >= price*100);
    };

   renderProductHtml(filterProducts,query);
};


