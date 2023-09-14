// JavaScript for image slider with navigation and indicators

const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;

// Function to show the current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  // Highlight the active indicator
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

// Event listener for the "Next" button
nextBtn.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

// Event listener for the "Previous" button
prevBtn.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  showSlide(currentIndex);
});

// Event listeners for the indicators
indicators.forEach((indicator, i) => {
  indicator.addEventListener("click", function () {
    currentIndex = i;
    showSlide(currentIndex);
  });
});

// Show the initial slide
showSlide(currentIndex);
