document.addEventListener("DOMContentLoaded", () => {
        const hamburger = document.getElementById("hamburger");
        const navMenu = document.getElementById("navMenu");

        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navMenu.classList.toggle("active");
        });

        const carousel = document.querySelector(".carousel");
        const leftArrow = document.querySelector(".arrow.left");
        const rightArrow = document.querySelector(".arrow.right");

        if (leftArrow && rightArrow && carousel) {
          leftArrow.addEventListener("click", () => {
            carousel.scrollBy({ left: -300, behavior: "smooth" });
          });

          rightArrow.addEventListener("click", () => {
            carousel.scrollBy({ left: 300, behavior: "smooth" });
          });
        }

        const slides = document.querySelectorAll(".collab-slide");
        let currentSlide = 0;

        function changeSlide() {
          slides[currentSlide].classList.remove("active");
          currentSlide = (currentSlide + 1) % slides.length;
          slides[currentSlide].classList.add("active");
        }

        if (slides.length > 0) {
          setInterval(changeSlide, 5000);
        }
      });