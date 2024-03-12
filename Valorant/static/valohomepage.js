const news = document.querySelector(".gotonews");
const icon = document.querySelector(".fa-arrow-right");
const rotate = document.querySelector(".thecard")
const rotateagain = document.querySelector(".backcard")
const button = document.querySelector(".rotateclick")
news.addEventListener("mouseenter",run);

function run(a){
    icon.style.transform = "translateX(20px)"
    
}
news.addEventListener("mouseleave",runs);

function runs(a){
    icon.style.transform = "translateX(0)";
    
}
button.addEventListener("click",rotatethecard);
function rotatethecard(a){
    rotate.style.transform = "rotateY(180deg)"
}
rotateagain.addEventListener("mouseout",showinfo);
function showinfo(a){
    rotate.style.transform = "rotateY(-0deg)"
}

