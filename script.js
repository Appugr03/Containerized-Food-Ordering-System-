// JavaScript for Mobile Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar ul");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Optional: Close the menu if a link is clicked (for mobile view)
const menuLinks = document.querySelectorAll(".navbar ul li a");
menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});
