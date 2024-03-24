let header = document.querySelector("header");
let navBar = document.querySelector("header .nav-bar");
let nav = document.querySelector("header nav");
let productsSection = document.querySelector("section");
let productBtn = Array.from(document.querySelectorAll("section .products-box .info button"));
let scrollBtn = document.querySelector(".scroll-top");
let copyrightYear = document.querySelector(".copyright span:first-child");

navBar.addEventListener("click", () => {
    navBar.classList.toggle("close");
    nav.classList.toggle("nav-toggle");
});

nav.addEventListener("click", () => {
    navBar.classList.toggle("close");
    nav.classList.toggle("nav-toggle");
});

let mainContainer = document.createElement("main");
mainContainer.classList.add("products-main");

let productsLanding = document.createElement("div");
productsLanding.classList.add("products-landing");

let productsBorder = document.createElement("div");
productsBorder.classList.add("products-border");

for (let i = 0; i < 2; i++) {
    let borderSpans = document.createElement("span");
    productsBorder.appendChild(borderSpans);
};

let productsLandingText = document.createElement("div");
productsLandingText.classList.add("text");

let landingHeading = document.createElement("h2");
landingHeading.innerHTML = `Our Products`;

productsLandingText.appendChild(landingHeading);
productsLanding.prepend(productsLandingText);
productsLanding.prepend(productsBorder);

mainContainer.appendChild(productsLanding);
mainContainer.appendChild(productsSection);

header.after(mainContainer);

productBtn.forEach((b) => {
    b.onclick = () => {
        window.open("https://www.facebook.com/ElShamadan", "_blank");
    }
});

window.onscroll = function () {
    if (window.scrollY >= 1000) {
        scrollBtn.style.right = "50px"
    } else {
        scrollBtn.style.right = "-100px"
    }
};

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
    headerIcons.forEach((e) => {
        e.classList.remove("active");
    });
});

copyrightYear.appendChild(document.createTextNode(new Date().getFullYear()));