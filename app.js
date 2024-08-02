const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const body = document.querySelector('body')

const mobileMenu = () => {
    menu.classList.toggle('.is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)




let slideIndex = 0;
  showSlides();

  function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000); // Change slide every 2 seconds (adjust as needed)
  }


document.querySelectorAll('.img__container img').forEach(image =>{
image.onclick = () =>{
    document.querySelector('.popup__image').style.display = 'block';
    document.querySelector('.popup__image img').src = image.getAttribute('src');
}
});

document.querySelector('.popup__image span').onclick = () =>{
document.querySelector('.popup__image').style.display = 'none';
}





