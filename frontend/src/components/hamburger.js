const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector("header__nav-list");

hamburger.addEventListener("click", hamburgerMenu);

export const hamburgerMenu=()=> {
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
}