// MENU JAVASCRIPT
const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn
        .classList
        .toggle('open');
    nav
        .classList
        .toggle('flex');
    nav
        .classList
        .toggle('hidden');
})


// NAVBAR BACKGROUND CHANGE
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) { // Change 100 to the desired scroll position
            navbar
                .classList
                .add("bg-on-scroll");
        } else {
            navbar
                .classList
                .remove("bg-on-scroll");
        }
    });
});

// EMAIL JAVASCRIPT

function sendMail() {
    var params = {
        firstName: document.getElementById("first_name").value,
        email: document.getElementById("email_address").value,
        phoneNumber: document.getElementById("phone_number").value,
        contact: document.getElementById("contact").value,
        message: document.getElementById("message").value,
    };


const serviceID = "service_5p5kaj9";
const templateID = "template_gbsb0gk";

emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("first_name").value = "";
        document.getElementById("email_address").value = "";
        document.getElementById("phone_number").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Message sent successfully");
    }
 )
 .catch((err) => console.log(err));

}