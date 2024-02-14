const searchIcon = document.querySelector(".search-icon");
const searchForm = document.querySelector(".search-form");

searchIcon.addEventListener("click", () => {
    if(searchForm.style.right === '-120%' ||searchForm.style.right === '' ){
        searchForm.style.right="7%";
    }else{
        searchForm.style.right="-120%";
    }

    cartItemsContainer.style.right="-100%";
    navbar.style.right="-100%";
});

const cartIcon = document.querySelector(".cart-icon");
const cartItemsContainer = document.querySelector(".cart-items-container");

cartIcon.addEventListener("click", () => {
    if(cartItemsContainer.style.right === '-100%' ||cartItemsContainer.style.right === '' ){
        cartItemsContainer.style.right="0";
    }else{
        cartItemsContainer.style.right="-100%";
    }

    searchForm.style.right="-120%";
    navbar.style.right="-100%";
});

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    if(navbar.style.right === '-100%' ||navbar.style.right === '' ){
        navbar.style.right="0";
    }else{
        navbar.style.right="-100%";
    }
    searchForm.style.right="-120%";
    cartItemsContainer.style.right="-100%";
});

window.onscroll = () =>{
    searchForm.style.right="-120%";
    cartItemsContainer.style.right="-100%";
    navbar.classList.remove("active");
    navbar.style.right="-100%";
}
