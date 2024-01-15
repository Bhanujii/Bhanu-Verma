// Header Scroll
let nav = document.querySelector(".navbar");

window.onscroll = () => document.documentElement.scrollTop > 20 ? nav.classList.add("header-scrolled") : nav.classList.remove("header-scrolled");


// Navbar Hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");

navBar.forEach(a => a.addEventListener("click", () => navCollapse.classList.remove("show")));
