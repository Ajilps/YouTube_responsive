let leftSlide = document.getElementById("left-slide");
let rightSlide = document.getElementById("right-slide");
let suggestionBar = document.querySelector(".suggestionBar");


suggestionBar.addEventListener("wheel",(evt) => {
    evt.preventDefault();
    suggestionBar.scrollBehavior = "auto";
    suggestionBar.scrollLeft += evt.deltaY;
})

leftSlide.addEventListener("click",(evt) =>{
    suggestionBar.scrollLeft -= 200;
    suggestionBar.scrollBehavior = "smooth";

});
rightSlide.addEventListener("click",(evt) =>{
    
    suggestionBar.scrollLeft += 200;
    suggestionBar.scrollBehavior = "smooth";

});



let menuIcon = document.getElementById("phone-menu-icon");

let sidemMenu = document.querySelector("#fullSideBar");
let Menu = document.querySelector(".side-bar");
let body = document.querySelector("main","nav");

menuIcon.addEventListener("click",(event)=>{
sidemMenu.style.display = "block"
Menu.style.display = "block"
});
body.addEventListener("click",(eve)=>{
    sidemMenu.style.display = "none";
Menu.style.display = "none";
})