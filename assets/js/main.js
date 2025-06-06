const carousel = document.querySelector("[data-carousel]");
const slides = carousel.querySelector("[data-slides]");

function moveToNextSlide() {
  const activeSlide = slides.querySelector("[data-active]");
  let newIndex = [...slides.children].indexOf(activeSlide) + 1;

  if (newIndex >= slides.children.length) newIndex = 0;

  slides.children[newIndex].dataset.active = true;
  delete activeSlide.dataset.active;
}

setInterval(moveToNextSlide, 5000);

function scrollHeader() {
    const header = document.getElementById('header')
    const logo = document.getElementById('logo-img'); 

    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
        logo.src = 'assets/img/marci-metzger-homes-logo.png'; 
    } else {
        header.classList.remove('scroll-header');
        logo.src = 'assets/img/marci-metzger-transparent-header-logo.png';
    }
}
window.addEventListener('scroll', scrollHeader)

const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("show");
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target !== lightboxImg) {
    lightbox.classList.remove("show");
    lightboxImg.src = "";
  }
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open');
    }
}

const accordionItems = document.querySelectorAll('.value__accordion-item')
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header');
    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)

        if (openItem && openItem !==item) {
            toggleItem(openItem);
        }
    });
});


window.addEventListener('scroll', scrollActive);

function scrollUP() {
    const scrollUp = document.getElementById('scroll-up');

    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUP);

const scrollUpButton = document.getElementById('scroll-up');
scrollUpButton.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

