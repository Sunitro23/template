let currentIndex = 0;
let slides = document.querySelectorAll(".slide");
let totalSlides = slides.length;

function showSlide(index) {
  if (index < 0) {
    currentIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  for (var i = 0; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }

  slides[currentIndex].style.display = "block";
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 5000);

document
  .getElementById("slide-arrow-prev")
  .addEventListener("click", prevSlide);
document
  .getElementById("slide-arrow-next")
  .addEventListener("click", nextSlide);
