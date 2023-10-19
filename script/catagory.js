import { products } from "../script/products.js";

const catagoryHtml = `

<ul class="catagory-list">
<li>
    <a href=""><i class="fa-solid fa-person-dress"></i> Women's Fashion</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
<li>
    <a href=""> <i class="fa-solid fa-shirt"></i> Men's Fashion</a>
        <ul class="sub-catagory-list">
            <li><a href="">Skin Care</a></li>
            <li><a href="">Hair Care</a></li>
            <li><a href="">Makeup</a></li>
            <li><a href="">Fragrances</a></li>
            <li><a href="">Beauty Tools</a></li>
            <li><a href="">Bath & Body</a></li>
            <li><a href="">Personal Care</a></li>
            <li><a href="">Mens Care</a></li>
        </ul>  
</li>
<li>
    <a href=""><i class="fa-solid fa-mobile"></i> Phones & Telecommunications</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
<li>
    <a href=""><i class="fa-solid fa-computer"></i> Computer, Office & Security</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
<li>
    <a href=""><i class="fa-solid fa-plug-circle-xmark"></i> Electronics Devices</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
<li>
    <a href=""><i class="fa-solid fa-keyboard"></i> Electronic Accessories</a>
    <ul class="sub-catagory-list">
        <li><a href="">Traditional Wear</a></li>
        <li><a href="">Muslim Wear</a></li>
        <li><a href="">Western Wear</a></li>
        <li><a href="">Innerwear</a></li>
        <li><a href="">Shoes</a></li>
        <li><a href="">Bags</a></li>
        <li><a href="">Watches</a></li>
    </ul>  
</li>
<li>
    <a href=""> <i class="fa-solid fa-gem"></i> Jewelry & Watches</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
<li>
    <a href=""><i class="fa-solid fa-couch"></i> Home, Pet & Appliances</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
<li>
    <a href=""><i class="fa-solid fa-bag-shopping"></i> Bags & Shoes</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
<li>
    <a href=""><i class="fa-solid fa-baby"></i> Toys , Kids & Babies</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
<li>
    <a href=""><i class="fa-solid fa-baseball"></i> Outdoor Fun & Sports</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
<li>
    <a href=""><i class="fa-solid fa-notes-medical"></i> Beauty, Health & Hair</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
<li>
    <a href=""><i class="fa-solid fa-screwdriver-wrench"></i> Tools & Home Improvement</a>
        <ul class="sub-catagory-list">
            <li><a href="">Traditional Wear</a></li>
            <li><a href="">Muslim Wear</a></li>
            <li><a href="">Western Wear</a></li>
            <li><a href="">Innerwear</a></li>
            <li><a href="">Shoes</a></li>
            <li><a href="">Bags</a></li>
            <li><a href="">Watches</a></li>
        </ul>  
</li>
</ul> 


`;



document.querySelector('.catagory-bar').innerHTML = catagoryHtml;





    

document.querySelector('.search-btn').addEventListener('click', () =>{
    const userInput = document.querySelector('.user-input').value;
    let matcheingProduct ;
   
    products.forEach(product =>{

        if( userInput === product.catagory){
            matcheingProduct = product;

            const html = `
            <div class="product-item js-product-addBtn" data-product-item="${matcheingProduct.name}">
                <div class="product-photo">
                    <img src="${matcheingProduct.image}" alt="">
                </div>
                <div class="product-name">
                    ${matcheingProduct.name}
                </div>
                <div class="product-price">
                    $${(matcheingProduct.price / 100).toFixed(2)}
                </div>
                <div class="product-rating">
                    <img src="${matcheingProduct.rating}" alt="">
                </div>
                <div class="addToCart-btn">
                <div class="addCart-btn">
                <button class="add-btn" data-product-id ="${matcheingProduct.id}">Add Cart</button>
                </div>
                <div class="added-btn js-added-to-cart"><img src="images/checkmark.png">Added</div>   
                </div>
            </div> 
            
            `
            document.querySelector('.product-container').innerHTML = html;
            
        }
       
        
    });



})
