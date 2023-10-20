import { products } from "../script/products.js";

export let cart =  JSON.parse(localStorage.getItem('cart'));


if(!cart){
    cart = [{

        productId: '565842',
        quantity: 1
        
      },{
        productId: '456321',
        quantity: 1
      }];
}

export let removeCartQuantity = 0, RemoveProduct = [];



 export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('matchingProduct', JSON.stringify(matchingProduct));
  }





     export function addToCart(productId){
        
         let matcheingItem ;

         cart.forEach((item) =>{
             if(productId === item.productId){
                 matcheingItem = item;
             }
         });

         if(matcheingItem){
             matcheingItem.quantity += 1;
         } else{
             cart.push({
                 productId: productId,
                 quantity: 1,
                
              });
         }

         saveToStorage();
         
     }



    export function removeFromCart(productId){

        const newCart = [];

            cart.forEach((cartItem) =>{
              
                if(cartItem.productId === productId){
                   removeCartQuantity = cartItem.quantity;
                   RemoveProduct = cartItem;
                  
                }

              if(cartItem.productId !== productId){
                    newCart.push(cartItem);
                }
            });

            cart = newCart;
            saveToStorage(); 
    
     }







   export  let matchingProduct = JSON.parse(localStorage.getItem('matchingProduct'));

     if(!matchingProduct){
         matchingProduct = {
             id: '11448965',
             image:  'images/protuct image/pexels-mstudio-1240892.jpg',
             name: 'Sneakers for Men Casual Shoes for Men',
             price: '2090',
             delivery: '200',
             rating: 'images/rating-4.png'
         }
     }
     

     
       export function productPreview(productId){
         products.forEach((product) =>{
             if(productId === product.id ){
                  matchingProduct = product;
             }
            
         })
     
         saveToStorage();    
     }
   
     