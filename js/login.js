const form = document.querySelector('form');
emailField = form.querySelector('.email-field');
emailInput = emailField.querySelector('.email');
cPassField = form.querySelector('.confirm-password');
cPassInput = cPassField.querySelector('.cPassword');


const confirmPasswordInput = document.getElementById("confirm_password");
const showPasswordIcon = document.getElementById("showPassword");
const showConfirmPasswordIcon = document.getElementById("showConfirmPassword");

showConfirmPasswordIcon.addEventListener("click", () => {
    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
        showConfirmPasswordIcon
            .classList
            .remove("bxs-hide");
        showConfirmPasswordIcon
            .classList
            .add("bxs-show");
    } else {
        confirmPasswordInput.type = "password";
        showConfirmPasswordIcon
            .classList
            .remove("bxs-show");
        showConfirmPasswordIcon
            .classList
            .add("bxs-hide");
    }
});

// DISABLED BUTTON
const termsCheckbox = document.getElementById("remember");
const loginBtn = document.getElementById("loginButton");
termsCheckbox.addEventListener("change", function () {
    loginBtn.disabled = !termsCheckbox.checked;
});
