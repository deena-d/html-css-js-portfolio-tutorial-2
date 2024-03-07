// Ensure the JavaScript code executes after the DOM has fully loaded
document.addEventListener("DOMContentLoaded", function() {
  // Initialize the typing animation
  const typed = new Typed(".typing", {
    strings: ["HR Manager", "UI/UX Design", "Web Development","Machine Learning","Data Visualization"],
    typeSpeed: 80,
    backSpeed: 75,
    loop: true
  });
});

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function redirectToCertification() {
  // Replace 'certificate-url' with the actual URL of the certification
  window.location.href = 'certificate-url';
}

$(document).ready(function(){
  $('.certificate-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    prevArrow: $('.arrow.prev'), // Previous arrow selector
    nextArrow: $('.arrow.next'),
  });
});





