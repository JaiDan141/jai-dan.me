/* ============================
   3D Tilt Effect
============================ */
(function () {
  const tiltElements = document.querySelectorAll(".js-tilt");

  function handleMove(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const rotateX = ((y - midY) / midY) * -8;
    const rotateY = ((x - midX) / midX) * 8;

    this.style.transform =
      "rotateX(" +
      rotateX.toFixed(2) +
      "deg) rotateY(" +
      rotateY.toFixed(2) +
      "deg) translateZ(8px)";
  }

  function resetTilt() {
    this.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  }

  tiltElements.forEach((el) => {
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", resetTilt);
  });
})();

/* ============================
   Carousel Logic (for all galleries)
============================ */
(function () {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
    const prevBtn = carousel.querySelector("[data-prev]");
    const nextBtn = carousel.querySelector("[data-next]");
    const dotsContainer = carousel.querySelector(".carousel-dots");

    let index = 0;

    // Create dots
    slides.forEach((_, i) => {
      const dot = document.createElement("div");
      dot.className = "carousel-dot" + (i === 0 ? " active" : "");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    function update() {
      const offset = -index * 100;
      track.style.transform = "translateX(" + offset + "%)";
      dots.forEach((d, i) => d.classList.toggle("active", i === index));
    }

    function goToSlide(i) {
      index = (i + slides.length) % slides.length;
      update();
    }

    prevBtn.addEventListener("click", () => goToSlide(index - 1));
    nextBtn.addEventListener("click", () => goToSlide(index + 1));

    // Auto-advance every 6 seconds
    setInterval(() => {
      goToSlide(index + 1);
    }, 6000);
  });
})();

/* ============================
   Scroll Reveal Animations
============================ */
(function () {
  const revealEls = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealEls.forEach((el) => observer.observe(el));
})();

/* ============================
   Smooth Scroll Helper
============================ */
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* ============================
   Footer Year
============================ */
document.getElementById("year").textContent = new Date().getFullYear();
