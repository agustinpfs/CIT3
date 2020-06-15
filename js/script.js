let slideNum = 1; 
showSlides(slideNum);

function passSlides(n) {
    showSlides(slideNum += n);
}

function showSlides(n) { 
    let slides = document.getElementsByClassName("Slide__js");
    if (n > slides.length) {slideNum = 1}    
    if (n < 1) {slideNum = slides.length}
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }        
    slides[slideNum - 1].style.display = "block"; 
}