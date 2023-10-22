const form = document.querySelector('form');
  emailField =form.querySelector('.email-field');
  emailInput = emailField.querySelector('.email');
  passField = form.querySelector('.create-password');
  passInput = passField.querySelector('.password');
  cPassField = form.querySelector('.confirm-password');
  cPassInput = cPassField.querySelector('.cPassword');

// Email Validation

function checkEmail() {
    const emaipattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emaipattern)) {
        return emailField.classList.add("invalid"); //adding invalid class if email value does not match email pattern
    }
    emailField.classList.remove("invalid"); //removing invalid class if email value does not match email pattern
}

// Hide and show password
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");
const showPasswordIcon = document.getElementById("showPassword");
const showConfirmPasswordIcon = document.getElementById("showConfirmPassword");

showPasswordIcon.addEventListener("click", () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showPasswordIcon.classList.remove("bxs-hide");
    showPasswordIcon.classList.add("bxs-show");
  } else {
    passwordInput.type = "password";
    showPasswordIcon.classList.remove("bxs-show");
    showPasswordIcon.classList.add("bxs-hide");
  }
});

showConfirmPasswordIcon.addEventListener("click", () => {
  if (confirmPasswordInput.type === "password") {
    confirmPasswordInput.type = "text";
    showConfirmPasswordIcon.classList.remove("bxs-hide");
    showConfirmPasswordIcon.classList.add("bxs-show");
  } else {
    confirmPasswordInput.type = "password";
    showConfirmPasswordIcon.classList.remove("bxs-show");
    showConfirmPasswordIcon.classList.add("bxs-hide");
  }
});



// Password Validation
function createPass(){
    const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(passInput.value.match(passPattern)){
       return passField.classList.add('invalid'); //adding invalid class if password input does not match passPattern
    }
    passField.classList.remove('invalid'); //removing invalid class if password input does not match passPattern
}

//confirm Password Validation
function confirmPass(){
   if(passInput.value !== cPassInput.value || cPassInput.value === ''){
     return cPassField.classList.add('invalid'); //adding invalid class if confirmPasswordInput does not match passwordInput
   }
   cPassField.classList.remove('invalid'); //removing invalid class if confirmPasswordInput does not match passwordInput
}

//Calling Function on Form Submit

form.addEventListener('submit', (e) => {
    e.preventDefault(); //preventing form submitting
    checkEmail();
    createPass();
    confirmPass();

    //calling function on key up
    emailInput.addEventListener('keyup', checkEmail);
    passInput.addEventListener('keyup', createPass);
    cpassInput.addEventListener('keyup', confirmPass);

    if (!emailField.classList.contains('invalid') && 
    !passFieldField.classList.contains('invalid') && 
    !cPassFieldField.classList.contains('invalid')
    ){
        window.location.assign("index.html");
        alert("Registration Succesful");
    }
});

