

const charactersbackground = document.querySelectorAll(".herobackground");
const containscharactersbackground = document.querySelector(".pagemenus");
const heroimages = document.querySelector(".tinyboxes");
const agentpage = document.querySelector("#agents");
const videos = document.querySelectorAll(".background");
const navbar = document.querySelector(".wrapper");
const footerblock = document.querySelector(".footer");
const buttontoreturnmenu = document.querySelectorAll(".buttonback");

for(let i = 0; i<buttontoreturnmenu.length;i++){
  heroimages.children[i].addEventListener("click",run1);
  function run1(a){
    containscharactersbackground.style.display = "block";
    navbar.style.display = "none";
    agentpage.style.display = "none";
    footerblock.style.display = "none";
    charactersbackground[i].style.display = "flex";
    videos[i].currentTime = 0;
  }
  buttontoreturnmenu[i].addEventListener("click",run2);
  function run2(a){
    containscharactersbackground.style.display = "none";
    navbar.style.display = "block";
    agentpage.style.display = "block";
    charactersbackground[i].style.display = "none";
    footerblock.style.display = "flex";
  }
}

var w = window.innerWidth;
var m = 1200;

const selectskill = document.querySelectorAll(".firstskill");
const headerh3 = document.querySelectorAll(".firstskill h3");
const paragraphp = document.querySelectorAll(".firstskill p");

if(w<=m){
  for(let index = 0; index < selectskill.length;index++){
    selectskill[index].addEventListener("mouseover",runoverhere);
    function runoverhere(a){
      selectskill[index].style.width = "100%";
      selectskill[index].style.backgroundColor = "black";
      headerh3[index].style.display = "block";
      headerh3[index].style.visibility = "visible";
      headerh3[index].style.opacity = "1";
      paragraphp[index].style.opacity = "1";
      paragraphp[index].style.visibility = "visible";
      paragraphp[index].style.display = "block";

    }
    selectskill[index].addEventListener("mouseout",getaway);
    function getaway(a){
      selectskill[index].style.width = "22%";
      selectskill[index].style.backgroundColor = "rgba(0, 0, 0,0.25)";
      headerh3[index].style.display = "none";
      headerh3[index].style.visibility = "hidden";
      headerh3[index].style.opacity = "0";
      paragraphp[index].style.opacity = "0";
      paragraphp[index].style.visibility = "hidden";
      paragraphp[index].style.display = "none";

    }
  }
}