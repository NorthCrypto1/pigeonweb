const burger = document.querySelector('.burger');
const main = document.querySelector('.main-page');
var sideBar = document.querySelector('.side-bar');

burger.addEventListener('click', function (){
  var w = window.innerWidth;
  sideBar.classList.toggle('bar-unactive');
  var per20 = w * .2;
  var x = sideBar.classList.contains('bar-unactive');
  if (x == false){
    main.style.paddingLeft = per20 + "px";
  } else {
    main.style.paddingLeft = 0 + "px";
  }
});
