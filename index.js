"use strict"


//constants
const slider=document.querySelector('.slider');
const greaterThan=document.querySelector('.gt-sign');
const lessThan=document.querySelector('.lt-sign');
const imgTag=document.querySelector('img');
let count=0;



//defining an array
const sliderImages=[
    'images/img1.jpeg','images/img2.jpg','images/img3.jpg','images/img4.jpg','images/img5.jpg','images/img6.jpg',
]



//declaring functions

function mouseover(){
    document.querySelector(".control").setAttribute('style','display:flex;');
}

function mouseout(){
    document.querySelector(".control").setAttribute('style','display:none;');
  
}

function next(){
    count++;
    if (count>=sliderImages.length){
        count=0;
imgTag.src=sliderImages[count];
    }
    else{
        imgTag.src=sliderImages[count];
    }

    }

    function prev(){
        count--;
        if (count<0){
            count=sliderImages.length-1;
            imgTag.src=sliderImages[count];
        }
        else{
            imgTag.src=sliderImages[count];

        }
    }
    


//addEvent Listeners
slider.addEventListener('mouseover',mouseover);
slider.addEventListener('mouseout',mouseout);
greaterThan.addEventListener('click',next);
lessThan.addEventListener('click',prev)