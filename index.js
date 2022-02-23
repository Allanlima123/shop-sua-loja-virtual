const menuBar = document.querySelector("#menuBars");
const navBar = document.querySelector(".navbar ul");

menuBar.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});