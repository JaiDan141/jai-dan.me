// script.js
document.getElementById('year').textContent = new Date().getFullYear();

// Simple mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  nav.style.display = expanded ? '' : 'flex';
});

// Lazy load placeholders and set background images
function lazyLoadPlaceholders() {
  document.querySelectorAll('.placeholder[data-src], img.lazy[data-src]').forEach(el => {
    const src = el.getAttribute('data-src');
    if (!src) return;
    if (el.tagName.toLowerCase() === 'img') {
      el.src = src;
      el.classList.remove('lazy');
    } else {
      el.style.backgroundImage = `url('${src}')`;
    }
    el.removeAttribute('data-src');
  });
}
window.addEventListener('load', lazyLoadPlaceholders);

// Carousel logic
class Carousel {
  constructor(root) {
    this.root = root;
    this.track = root.querySelector('.carousel-track');
    this.slides = Array.from(root.querySelectorAll('.slide'));
    this.prev = root.querySelector('.carousel-btn.prev');
    this.next = root.querySelector('.carousel-btn.next');
    this.dots = root.querySelector('.carousel-dots');
    this.index = 0;
    this.autoplay = root.dataset.autoplay === 'true';
    this.init();
  }
  init() {
    this.slides.forEach((s,i) => {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to slide ${i+1}`);
      dot.addEventListener('click', ()=> this.goTo(i));
      this.dots.appendChild(dot);
    });
    this.update();
    this.prev.addEventListener('click', ()=> this.prevSlide());
    this.next.addEventListener('click', ()=> this.nextSlide());
    if (this.autoplay) this.startAutoplay();
  }
  update() {
    this.track.style.transform = `translateX(-${this.index * 100}%)`;
    this.dots.querySelectorAll('.carousel-dot').forEach((d,i)=> d.classList.toggle('active', i===this.index));
  }
  prevSlide(){ this.index = (this.index - 1 + this.slides.length) % this.slides.length; this.update(); }
  nextSlide(){ this.index = (this.index + 1) % this.slides.length; this.update(); }
  goTo(i){ this.index = i; this.update(); }
  startAutoplay(){ this._timer = setInterval(()=> this.nextSlide(), 4500); this.root.addEventListener('mouseenter', ()=> clearInterval(this._timer)); this.root.addEventListener('mouseleave', ()=> this.startAutoplay()); }
}
document.querySelectorAll('.carousel').forEach(c => new Carousel(c));

// 3D parallax and tilt interactions
const stage = document.getElementById('parallax-stage');
if (stage) {
  const layers = stage.querySelectorAll('.layer');
  let mouseX = 0, mouseY = 0, rx = 0, ry = 0;
  function onMove(e) {
    const rect = stage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX = x;
    mouseY = y;
  }
  stage.addEventListener('mousemove', onMove);
  stage.addEventListener('touchmove', (e)=> onMove(e.touches[0]));
  function animate() {
    rx += (mouseY * 12 - rx) * 0.08;
    ry += (mouseX * 18 - ry) * 0.08;
    stage.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    layers.forEach(layer => {
      const depth = parseFloat(layer.dataset.depth || 0);
      const tx = -mouseX * depth * 40;
      const ty = -mouseY * depth * 40;
      layer.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
    });
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

// Tilt effect for merch items
document.querySelectorAll('[data-tilt]').forEach(el => {
  el.addEventListener('mousemove', e => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${(-y * 8).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg) translateY(-6px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
  });
});

// Contact form simple handler
document.getElementById('contactForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending...';
  setTimeout(()=> {
    btn.disabled = false;
    btn.textContent = 'Send Message';
    alert('Thanks! Your message was sent. Replace this with your email integration.');
    e.target.reset();
  }, 900);
});
