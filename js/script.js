let slideNum = 1; 
showSlides();

function passSlides(n) {
    slideNum += n
    showSlides();
}

function showSlides() { 
    let slides = document.getElementsByClassName("Slide__js");    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }        
    slides[slideNum - 1].style.display = "block"; 
}