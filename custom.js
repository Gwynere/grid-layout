let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

// STICKY NAVIGATION BAR
var nav = document.getElementById('nav');
var topNav = nav.offsetTop;

function fixedNav(){
  if(window.scrollY > topNav){
    document.body.classList.add('fixed-nav');
  } else{
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixedNav);