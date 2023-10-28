import { searchProducts,shortedName } from "../script/products.js";


const searchInput = document.querySelector('.user-input'); 
const searchBtn = document.querySelector('.search-btn');

// Product Search button
searchBtn.addEventListener('click',  () => {
    const query = searchInput.value;
    window.location.href = `search-product.html?q=${query}`;
});



// recive user search input from url
const searchParams = new URLSearchParams(window.location.search);
const query = searchParams.get('q');
const filterProducts = searchProducts(query);

// run render product function
renderProductHtml(filterProducts,query)




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
            <a href="Product-preview.html" class="product-photo js-product-addBtn" data-product-id="${product.id}">
                <img src="${product.image}" alt="">
            </a>
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
}