"use strict"

//constants
const slider=document.querySelector('.slider');
const greaterThan=document.querySelector('.gt-sign');
const lessThan=document.querySelector('.lt-sign');


//declaring functions
function mouseover(){
    document.querySelector(".control").setAttribute('style','display:flex;');
}
function mouseout(){
    document.querySelector(".control").setAttribute('style','display:none;');
  
}
function next(){
   for (let i=1;i<=6;i++) {
    slider.style.backgroundImage=`url(img${i}.jpg)`;
   }
    }

    
//addEvent Listeners
slider.addEventListener('mouseover',mouseover);
slider.addEventListener('mouseout',mouseout);
greaterThan.addEventListener('click',next)