let navBar = document.querySelector("header .nav-bar");
let nav = document.querySelector("header nav");
let headerIcons = Array.from(document.querySelectorAll("header nav ul > li"));
let landingBtn = document.querySelector(".landing .text button");
let productsSectorBtns = Array.from(document.querySelectorAll(".products-sector .product-box .info button"));
let imgSlider = document.querySelector(".image-slider");
let productInCarousel = Array.from(document.querySelectorAll(".image-slider .product"));
let productsCarousel = Array.from(document.querySelectorAll(".products-carousel .image-slider .product img"));
let leftBtn = document.querySelector(".slider-controls .prev");
let rightBtn = document.querySelector(".slider-controls .next");
let aboutBtn = document.querySelector(".about-sector .text button");
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

headerIcons.forEach((i) => {
    i.addEventListener("click", function(ele) {
        headerIcons.forEach((e) => {
            e.classList.remove("active");
        })
        this.classList.add("active")
    });
});

landingBtn.onclick = openProductsPage;
productsSectorBtns.forEach((btn) => btn.addEventListener("click", openProductsPage));
productsCarousel.forEach((btn) => btn.addEventListener("click", openProductsPage));
aboutBtn.onclick = openAboutPage;

function openProductsPage() {
    window.open("products.html", "_self");
};
function openAboutPage() {
    window.open("about.html", "_self");
};

leftBtn.addEventListener("click", () => {
    imgSlider.scrollLeft -= 300;
});
rightBtn.addEventListener("click", () => {
    imgSlider.scrollLeft += 300;
});

const maxScroll = imgSlider.scrollWidth - imgSlider.clientWidth;

function autoplayScroll() {
    if (imgSlider.scrollLeft > (maxScroll - 1)) {
        imgSlider.scrollLeft -= maxScroll;
    } else {
        imgSlider.scrollLeft += 2;
    };
};

let turnOnScroll = setInterval(autoplayScroll, 50);

productInCarousel.forEach((product) => {
    product.addEventListener("mouseover", () => {
        clearInterval(turnOnScroll);
    })
    product.addEventListener("mouseout", () => {
        return turnOnScroll = setInterval(autoplayScroll, 50);
    })
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