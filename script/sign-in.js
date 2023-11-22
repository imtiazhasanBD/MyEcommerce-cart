const userNumber = document.querySelector('.user-number');
const continueBtn = document.querySelector('.continue-btn');
const errorMsg = document.querySelector('.sign-in-form span')
const signUpEl= document.querySelector('.sign-in-form')

continueBtn.addEventListener('click', ()=>{
        numberValidation(userNumber.value)
});


function numberValidation(number){
        if(number == ''){
            errorMsg.style = 'display: inline';
            errorMsg.innerHTML = '* Number is required';
        }
        else if(!number.match(/^[0-9]{10}$/)){
            errorMsg.style = 'display: inline;'
            userNumber.style = 'border: 1px solid red';
            errorMsg.innerHTML = '*Invalid Phone Number';
        }

        else{
            errorMsg.style = 'display: none';
            signUpEl.innerHTML = `
            <h1>Create your EcartMart Account</h1>
            <h3>Start by entering your First Name</h3>
            <form class="sign-Up-from" action="/index.html"  onsubmit="return FormValidation()">

                <div class="Input-filed" id="fullName">
                    <input   type="text" placeholder="Enter Your First And Last Name" >
                    <span class="errorMessage"></span>
                </div>

                <div class="Input-filed" id="email">
                   <input type="text" placeholder="Enter Your Email">
                   <span class="errorMessage"></span>
                </div>   

                <div class="Input-filed" id="password">
                  <input type="password" placeholder="Enter Your Password">
                  <span class="errorMessage"></span>
                </div>

                <div class="Input-filed" id="Cpassword">
                  <input type="password" placeholder="Confirm Password">
                  <span class="errorMessage"></span>
                </div>
                
                <div class="Input-filed"  id="User-OTP"style="display: flex; flex-direction: column; gap: 10px;">
                    <label class="otp-message" >Provide OTP sent on your mobile number +${userNumber.value.trim()} </label>
                    <input type="number" placeholder="Enter Your OTP" >
                  <span class="errorMessage"></span>
                </div>

              
                <button type="submit" class="sign-up-btn" >Sign Up</button>
            </form>

            
            `
        };
     
};



//For clear Error Message 
function ClearMessage(){
    const erorrs = document.querySelectorAll('.errorMessage');
    erorrs.forEach((item) =>{
        item.innerHTML = '';
    })
}


// For Display Error Message

function errorMessage(id,message){
    let errorMessageEl = document.querySelector(id);
    errorMessageEl.querySelector('.errorMessage').innerHTML = message;
};

// user Data store
let UserData = JSON.parse(localStorage.getItem('UserData'));
if(!UserData){
    UserData =[
      {  name: "userName",
         email: "userEmail",
         password: "userPassword"
    }
    ]
};


 function saveToStorage() {
    localStorage.setItem('UserData', JSON.stringify(UserData));
  };

  saveToStorage();


//Validation function
function FormValidation(){

    ClearMessage()

    //For Name Validation
    const userName = document.querySelector('#fullName input').value;
    if(userName == ''){
        errorMessage('#fullName', '*Name is required')
        return false
    }
    else if(!userName.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        errorMessage('#fullName', '*Enter Your FullName');
        console.log(userName)
        return false
    };


    //For Email Validation
    const userEmail = document.querySelector('#email input').value;
    if(userEmail == ''){
        errorMessage('#email', '* Email is required')
        return false;
    }


    else if(!userEmail.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        errorMessage('#email', '* Please enter a valid email');
        return false;
    };
 
    //For Password Validation
    const userPassword = document.querySelector('#password input').value;
    if(userPassword == ''){
        errorMessage('#password', '* Password is required');
        return false
    }
    else if(userPassword.length < 8){
        ///^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
        errorMessage('#password', '* At least 8 characters long');
        return false
    };


    //For Confirm Password Validation
    const userCPassword = document.querySelector('#Cpassword input').value;
    if(userCPassword == ''){
        errorMessage('#Cpassword', '*Confirm Password is required');
        return false
    }
    else if(userCPassword != userPassword){
        errorMessage('#Cpassword', '*Password Not Match');
        return false
    };




    //For OTP Validation
    const userOTP = document.querySelector('#User-OTP input').value;
    if(userOTP == ''){
        errorMessage('#User-OTP', '*OTP is required')
        return false
    };

  



        UserData.push({
            name: userName,
            email: userEmail,
            password: userPassword
          });
    

  saveToStorage()
    

}

console.log(UserData)


