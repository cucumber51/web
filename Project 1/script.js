var slideIndex = 1;
showSlides(slideIndex);
const search_field = document.querySelector("#search");
const tabsBtn = document.querySelectorAll(".tab_choose");

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  console.log("dots:", dots)
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
}


tabsBtn.forEach((tab)=>{
    tab.addEventListener("click",function(){
    const currentTab = tab  
    const placeholder_info = currentTab.dataset.id;
    search_field.placeholder = placeholder_info;
    })   
})  

