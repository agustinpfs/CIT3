// SLIDER

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

// TABS

document.getElementById("activo").click();

function changeContent(evento, contenidoDeUnTab) {
  
  let i, todosLosContenidos, tab_button;
  
  todosLosContenidos = document.getElementsByClassName("Tabs__content");
  for (i = 0; i < todosLosContenidos.length; i++) {
    todosLosContenidos[i].style.display = "none";
  }    
  
  tab_button = document.getElementsByClassName("Tabs__tab");
  for (i = 0; i < tab_button.length; i++) {
    tab_button[i].className = tab_button[i].className.replace(" active", "");
  }    
  
  document.getElementById(contenidoDeUnTab).style.display = "block";
  evento.target.className += " active";

}


// ACCORDION

let acordeonButtons = document.getElementsByClassName("Acordeon__button");
let i;

for (i = 0; i < acordeonButtons.length; i++) {
  acordeonButtons[i].onclick = function() {
    this.classList.toggle("activo");
    let contenido = this.nextElementSibling;
    console.log(this.nextElementSibling, "nextSibl");
    
    if (contenido.style.maxHeight){
      contenido.style.maxHeight = null;
    } else {
      contenido.style.maxHeight = contenido.scrollHeight + "px";
    } 
  }
}
document.getElementById("activado").click();




// MODAL

let Modal = document.getElementsByClassName("Modal")[0];

let contactoHeader = document.getElementsByClassName("opencontact")[0];
let contactoFooter = document.getElementsByClassName("opencontact2")[0];
let cerrar = document.getElementsByClassName("Modal__close")[0];

contactoHeader.onclick = () => Modal.style.display = "block";
contactoFooter.onclick = () => Modal.style.display = "block";
cerrar.onclick = () => Modal.style.display = "none";