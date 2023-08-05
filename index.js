const searchbar = document.querySelector(".search-bar-container ");
const searchicon = document.querySelector(".maginfer");

searchicon.addEventListener("click" , () => {
    searchbar.classList.toggle("active");
})