const slidelar = document.querySelector(".slides");
const news = document.querySelectorAll(".new1");
const leftarrow = document.getElementById("previcon");
const rightarrow = document.getElementById("nexticon");







let sectionIndex = 0;

rightarrow.addEventListener("click",function(){
    sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 3;
    slidelar.style.transition = "all 0.4s ease-in-out";
    slidelar.style.marginLeft = `${(sectionIndex) * -100}%`;
});
leftarrow.addEventListener("click",function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0; /*Soru işareti, JavaScript'te bir if ifadeye alternatif olarak kullanılır*/ /* İki nokta üst üste işaretinden önceki şey özellik adıdır ve iki nokta üst üste işaretinden sonraki şey değeridir. */
    slidelar.style.transition = "all 0.4s ease-in-out";
    slidelar.style.marginLeft = `${(sectionIndex) * -100}%`;
});















/*let slides = document.querySelectorAll(".new1");
let index = 1;
const interval = 3000;

const firstclone = slides[0].cloneNode(true);
const lastclone = slides[slides.length - 1].cloneNode(true);

firstclone.id = "first-clone";
lastclone.id = "last-clone";

slide.append(firstclone);
slide.prepend(lastclone);

const slidewidth = slides[index].clientWidth;

slides.style.transform = `translateX(${-slidewidth * index}px)`;

const startslide = ()=>{
    setInterval(() =>{
        index++;
        slide.style.transform = `translateX(${-slidewidth * index}px)`;
    }, interval);
}

startslide();
*/