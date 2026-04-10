document.getElementById("year").textContent = new Date().getFullYear();

// Carousel
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
let index = 0;

document.querySelector(".next").onclick = () => {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
};

document.querySelector(".prev").onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
};

// Tilt effect
document.querySelectorAll("[data-tilt]").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${y * -10}deg) rotateY(${x * 10}deg)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});
