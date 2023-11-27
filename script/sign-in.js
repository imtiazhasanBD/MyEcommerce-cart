const userNumber = document.querySelector('.user-number');
const continueBtn = document.querySelector('.continue-btn');
const errorMsg = document.querySelector('.sign-in-form #number-error');
const signUpEl= document.querySelector('.sign-in-form');

continueBtn.addEventListener('click', ()=>{
        numberValidation(userNumber.value);
});


function numberValidation(number){
        if(number == ''){
            errorMsg.style = 'display: inline';
            errorMsg.innerHTML = '* Number is required';
        }
        else if(!number.match(/^[0-9]{10}$/)){
            errorMsg.style = 'display: inline;'
            userNumber.style = 'border: 1px solid red';
            errorMsg.innerHTML = '*Invalid Phone Number (Number Should be 10 digit)';
        }
        else{

          // Check duplicate number
        const dublicateNumber = UserData.some(number => number.phoneNumber=== userNumber.value);
        // if duplicate number stop else render page    
        if(dublicateNumber){
            errorMsg.style = 'display: inline';
            userNumber.style = 'border: 1px solid red';
            errorMsg.innerHTML = '*This Phone Number is already used.!';
            } 
            else{
                errorMsg.style = 'display: none';
                signUpEl.innerHTML = 
                `
                <h1>Create your EcartMart Account</h1>
                <h3>Start by entering your First Name</h3>
                <form class="sign-Up-from" action="/index.html" onsubmit="return FormValidation()">
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
                
                `;
            };
        };


 
};



//For clear Error Message 
function ClearMessage(){
    const erorrs = document.querySelectorAll('.errorMessage');
    erorrs.forEach((item) =>{
        item.innerHTML = '';
    });
};


// For Display Error Message

function errorMessage(id,message){
    let errorMessageEl = document.querySelector(id);
    errorMessageEl.querySelector('.errorMessage').innerHTML = message;
};

// user Data store
let UserData = JSON.parse(localStorage.getItem('UserData'));
if(!UserData){
    UserData =
    [{  name: "userName",
        email: "userEmail",
        password: "userPassword",
        phoneNumber: "userNumber"
    }]
};


 function saveToStorage() {
    localStorage.setItem('UserData', JSON.stringify(UserData));
  };

  saveToStorage();


//Validation function
function FormValidation(){

    ClearMessage();

    //For Name Validation
    const userName = document.querySelector('#fullName input').value;
    if(userName == ''){
        errorMessage('#fullName', '*Name is required')
        return false;
    }
    else if(!userName.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        errorMessage('#fullName', '*Enter Your FullName');
        return false;
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
        return false;
    }
    else if(userPassword.length < 8){
        ///^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/
        errorMessage('#password', '* At least 8 characters long');
        return false;
    };


    //For Confirm Password Validation
    const userCPassword = document.querySelector('#Cpassword input').value;
    if(userCPassword == ''){
        errorMessage('#Cpassword', '*Confirm Password is required');
        return false;
    }
    else if(userCPassword != userPassword){
        errorMessage('#Cpassword', '*Password Not Match');
        return false;
    };




    //For OTP Validation
    const userOTP = document.querySelector('#User-OTP input').value;
    if(userOTP == ''){
        errorMessage('#User-OTP', '*OTP is required');
        return false;
    };

  
    //Filter duplicate email
        const duplicateData = UserData.some(data => data.email === userEmail);
    // if duplicate email stop else push the data
        if(duplicateData){
            errorMessage('#email', '*This email is already registered');
            return false;
        }else{
            UserData.push({
                name: userName,
                email: userEmail,
                password: userPassword,
                phoneNumber:userNumber.value
            });

        };

        saveToStorage();
            
        return !duplicateData;
};



// Existing user login 


const LoginUserBtn = document.querySelector('.login-user-btn');

LoginUserBtn.addEventListener('click', () =>{
    document.querySelector('.sign-in-form' ).innerHTML = `
    
    <h1>Welcome to EcartMart! Please login</h1>
    <span id="new-member">New member? <a href="/sign-in-page.html"> Register</a> here</span>

    <form id="user-login-form" action="/index.html" onsubmit="return loginDataValidation()">
        <div class="Input-filed" id="user-email-filed" >
            <input type="text" class="user-email" placeholder="Email/Mobile Number">
            <span class="errorMessage email-error "></span>
        </div>

        <div class="Input-filed" id="user-password-filed" >
            <input type="password" class="user-password" placeholder="Enter Password">
            <span class="errorMessage password-error"></span>
        </div>
        <span class="wrong-password"></span>

        <button type="submit" class="login-button">LOGIN</button>
    </form>
    <div class="forgot-password">
        <label for="Remember">
            <input type="checkbox" name="Remember">
            <span>Remember Me</span>
        </label>
        <a href="">Forgot Password?</a>
    </div>
    <p class="sign-social">Or, login with</p>
   <div class="sign-social-button">
        <button  href="" class="google-login"><i class="fa-brands fa-google-plus-g"></i>Google</button>
        <button  href="" class="facebook-login"><i class="fa-brands fa-facebook-f"></i>Facebook</button>

    </div>
   
    
    `
});






// Login Form validation
function loginDataValidation(){
 
const userEmail = document.querySelector('#user-login-form .user-email');
const userPassword = document.querySelector('#user-login-form .user-password');
const loginErrorMsg = document.querySelector('#user-login-form');
   
ClearMessage();

    if(userEmail.value === ''){
         loginErrorMsg.querySelector('.email-error').innerHTML = `* You can't leave this empty`;
         return false;
       
    }else if(userPassword.value === ''){
        loginErrorMsg.querySelector('.password-error').innerHTML = `* You can't leave this empty`;
        return false;
    };

/// filtering the user input data 
  const checkEmail =   UserData.some(data => data.email === userEmail.value);
  const checkPhone =   UserData.some(data => data.phoneNumber === userEmail.value);
  const checkPassword =   UserData.some(data => data.password === userPassword.value);


    if((checkEmail || checkPhone)  && checkPassword){
        return true;
    }
    else if((checkEmail || checkPhone) && !checkPassword){
            document.querySelector('#user-login-form .wrong-password').innerHTML = '*Wrong password. Try again or click Forgot password to reset it.';
            document.querySelector('#user-login-form .user-email').style = 'none'
            document.querySelector('#user-login-form .user-password').style = 'border: 1px solid red';
            return false;
    }
    else if(!checkEmail || !checkPhone){
            document.querySelectorAll('#user-login-form input').forEach(input => input.style = 'border: 1px solid red');
            document.querySelector('#user-login-form .wrong-password').innerHTML ='*Incorrect username or password.';
            return false;
    };
   
};

