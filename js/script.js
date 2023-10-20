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

