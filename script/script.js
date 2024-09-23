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



