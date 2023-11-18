
//Nav  
let nav = `<nav>
<a href="index.html">Home</a>
<a href="shop.html">Products</a>
<a href="#"><h1 class="logo">the 1%</h1></a>
<a href="contact.html">Contact Us</a>
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>

    </nav>`;

const navCont = document.getElementById("nav");
navCont.innerHTML = nav;


//SideBar
const sb = document.getElementById('sidebar');

let aside = `<aside>
<div>
<img src="imgs/logo.png" alt="logo"><br><br>
<li><a href="index.html">Home</a></li><br>
<li><a href="shop.html">catalog</a></li>
</a></li><br>
<li><a href="#">Contact Us</a></li>
</div>
</aside>`;
sb.innerHTML = aside;

//Header
let header = `<header>
<div id="show" onclick="show()">
<div class="line"></div>
<div class="line2"></div>
</div>

<h2 class="logo">the 1%</h2>

    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
</header>`;

const headerCont = document.getElementById("header");
headerCont.innerHTML = header;




//Show The Side Bar
const line = document.querySelector('.line');
const line2 = document.querySelector('.line2');
const menuBox = document.querySelector('aside');

menuBox.style.left = "-200%";

function show() {
  if (menuBox.style.left === "-200%") {
    line2.style.position = "absolute";
    line2.style.transform = "rotate(130deg)";
    line.style.transform = "rotate(50deg)";
    line.style.marginTop = "1px";
    menuBox.style.left = "10px";
  }
  
  else if (menuBox.style.left === "10px") {
    line2.style.marginBottom = "0px";
    line2.style.position = "relative";
    line2.style.transform = "rotate(360deg)";
    line.style.transform = "rotate(360deg)";
    line.style.marginTop = "0px";
    
    menuBox.style.left = "-200%";
  }
}

//Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
