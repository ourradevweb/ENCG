// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let JsArrow = document.querySelector(".js-arrow");
JsArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let EtArrow = document.querySelector(".et-arrow");
EtArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}
let ReArrow = document.querySelector(".re-arrow");
ReArrow.onclick = function() {
 navLinks.classList.toggle("show4");
}
let CopArrow = document.querySelector(".cop-arrow");
CopArrow.onclick = function() {
 navLinks.classList.toggle("show5");
}


