// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

// overlay menu
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style");
}


/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// lightbox gallery
$(document).on("click", '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//header_section
let lastScrollTop = 0;
const header = document.querySelector(".header_section");

window.addEventListener("scroll", function () {
  let scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
   
    header.style.top = "-100px";
  } else {
   
    header.style.top = "0";
  }

  lastScrollTop = scrollTop;
});

document.querySelector('.nav-link[href="#About"]').addEventListener('click', function (event) {
  event.preventDefault(); 
  const aboutSection = document.getElementById('About');

  
  aboutSection.classList.remove('animated');


  void aboutSection.offsetWidth; 

  
  aboutSection.classList.add('animated');


  aboutSection.scrollIntoView({ behavior: 'smooth' });
});

document.querySelectorAll('.hom').forEach(link => {
  link.addEventListener('click', function (event) {
      event.preventDefault(); 
      const targetSection = document.querySelector(this.getAttribute('href')); 

     
      targetSection.querySelector('.inner_detail-box').style.animation = 'none'; 
      targetSection.querySelector('.inner_detail-box').offsetHeight; 
      targetSection.querySelector('.inner_detail-box').style.animation = ''; 
      
  
      targetSection.scrollIntoView({ behavior: 'smooth' }); 
  });
});

// Scroll Back To Top Button
let span=document.querySelector(".up");

window.onscroll = function (){
    if (this.scrollY >= 1000) {
        span.classList.add("show");
    }else {
        span.classList.remove("show");
    }
};

span.onclick =function () {
    window.scrollTo({
        top:0 ,
        behavior:"smooth",
    });
};