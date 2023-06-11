const slides = document.querySelectorAll(".slide");

slides.forEach((slide, idx) => {
  slide.style.transform = `translateX(${idx * 100}%)`;
});

let currentSlide = 0;
let slidesLen = slides.length - 1;

const next = document.querySelector(".next");

next.addEventListener("click", function () {
  if (currentSlide === slidesLen) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`;
  });
});

const prevSlide = document.querySelector(".prev");

prevSlide.addEventListener("click", function () {
  if (currentSlide === 0) {
    currentSlide = slidesLen;
  } else {
    currentSlide--;
  }

  slides.forEach((slide, idx) => {
    slide.style.transform = `translateX(${100 * (idx - currentSlide)}%)`;
  });
});
