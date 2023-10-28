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





 export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
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
              
              if(cartItem.productId !== productId){
                    newCart.push(cartItem);
                }
            });

            cart = newCart;
            saveToStorage(); 
    
     }





     
       

