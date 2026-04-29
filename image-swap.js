const images = [
    "assets/removed_bg/border_line_1.png", 
    "assets/removed_bg/border_line_2.png", 
    "assets/removed_bg/border_line_3.png"
];

let index = 0;
const img = document.getElementById("border");

function changeBorder(){
    
    img.style.borderImage = "url("+ images[index] +")";
    img.style.borderImageSlice = 147;

    index = (index + 1) % images.length;

}

changeBorder();

img.classList.add("ready");

setInterval(changeBorder, 300);