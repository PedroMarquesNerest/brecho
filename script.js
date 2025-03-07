const sliderContainer = document.getElementById("slider");
const slides = document.querySelectorAll("#slider img");

let currentIndex = 0;

function carousel(){
    currentIndex++;

    if(currentIndex > slides.length - 1){
        currentIndex = 0;
    }

    sliderContainer.style.transform = `translateX(${-currentIndex * 500}px)`;
}

setInterval(carousel, 1800);