:root {
  --bg: #050816;
  --bg-alt: #0b1020;
  --accent: #7c3aed;
  --accent-soft: rgba(124, 58, 237, 0.2);
  --text: #f9fafb;
  --muted: #9ca3af;
  --card: #111827;
  --border: #1f2937;
  --radius-lg: 18px;
  --radius-md: 12px;
  --shadow-soft: 0 18px 45px rgba(0, 0, 0, 0.6);
  --transition-fast: 0.25s ease-out;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text",
    "Segoe UI", sans-serif;
  background: radial-gradient(circle at top, #111827 0, #020617 55%, #000 100%);
  color: var(--text);
  min-height: 100vh;
  overflow-x: hidden;
}

/* Orbs */
.orb {
  position: fixed;
  border-radius: 999px;
  filter: blur(40px);
  opacity: 0.35;
  z-index: -1;
  pointer-events: none;
  mix-blend-mode: screen;
}
.orb--purple {
  width: 260px;
  height: 260px;
  background: #7c3aed;
  top: -40px;
  right: -40px;
}
.orb--blue {
  width: 220px;
  height: 220px;
  background: #22d3ee;
  bottom: -60px;
  left: -40px;
}

.page {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 16px 80px;
}

/* Header */
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 12px;
}

.logo {
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.9rem;
  color: var(--muted);
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 0.85rem;
  justify-content: flex-end;
}

nav a {
  padding: 6px 10px;
  border-radius: 999px;
  color: var(--muted);
  border: 1px solid transparent;
  transition: border-color var(--transition-fast), color var(--transition-fast),
    background var(--transition-fast), transform 0.15s ease-out;
}

nav a:hover {
  border-color: var(--accent-soft);
  background: rgba(15, 23, 42, 0.9);
  color: var(--text);
  transform: translateY(-1px);
}

/* Hero */
.hero {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2.5fr);
  gap: 32px;
  align-items: center;
  margin-bottom: 56px;
}

@media (max-width: 840px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
  }
}

.hero-text h1 {
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  line-height: 1.1;
  margin-bottom: 12px;
}

.hero-text h1 span {
  background: linear-gradient(120deg, #a855f7, #22d3ee);
  -webkit-background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: 1rem;
  color: var(--muted);
  max-width: 520px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.tag {
  font-size: 0.75rem;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  color: var(--muted);
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
}

.hero-cta {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.btn {
  border-radius: 999px;
  padding: 10px 18px;
  font-size: 0.9rem;
  border: 1px solid transparent;
  cursor: pointer;
  background: transparent;
  color: var(--text);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background var(--transition-fast), border-color var(--transition-fast),
    transform 0.15s ease-out, box-shadow var(--transition-fast);
}

.btn-primary {
  background: linear-gradient(135deg, #7c3aed, #22d3ee);
  box-shadow: 0 12px 30px rgba(37, 99, 235, 0.35);
}

.btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 18px 40px rgba(37, 99, 235, 0.45);
}

.btn-ghost {
  border-color: rgba(148, 163, 184, 0.4);
  background: rgba(15, 23, 42, 0.9);
}

.btn-ghost:hover {
  border-color: var(--accent-soft);
  transform: translateY(-1px);
}

/* Hero visual */
.hero-visual {
  perspective: 1200px;
}

.hero-card {
  background: radial-gradient(circle at top left, #1f2937 0, #020617 55%);
  border-radius: 24px;
  padding: 20px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  box-shadow: var(--shadow-soft);
  transform-style: preserve-3d;
  position: relative;
  overflow: hidden;
}

.hero-card::before {
  content: "";
  position: absolute;
  inset: -40%;
  background: radial-gradient(circle at top, rgba(56, 189, 248, 0.12), transparent 60%);
  opacity: 0.9;
  pointer-events: none;
}

.hero-card-inner {
  position: relative;
  z-index: 1;
}

.hero-chip {
  font-size: 0.7rem;
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.4);
  color: var(--muted);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
}

.hero-chip-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 12px rgba(34, 197, 94, 0.9);
}

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 10px;
}

.stat {
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid rgba(31, 41, 55, 0.9);
  font-size: 0.75rem;
  color: var(--muted);
}

.stat strong {
  display: block;
  font-size: 1rem;
  color: var(--text);
}

.hero-media {
  margin-top: 18px;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(55, 65, 81, 0.9);
  background: #020617;
  position: relative;
}

.hero-media video,
.hero-media img {
  width: 100%;
  display: block;
  object-fit: cover;
  max-height: 220px;
}

.hero-media-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent 55%);
}

.hero-media-caption {
  position: absolute;
  left: 14px;
  bottom: 12px;
  font-size: 0.75rem;
  color: var(--muted);
}

/* Sections */
section {
  margin-bottom: 48px;
}

.section-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--muted);
  margin-bottom: 6px;
}

.section-title {
  font-size: 1.4rem;
  margin-bottom: 16px;
}

.section-grid {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2.5fr);
  gap: 24px;
}

@media (max-width: 840px) {
  .section-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* Cards */
.card {
  background: radial-gradient(circle at top left, #111827 0, #020617 60%);
  border-radius: var(--radius-lg);
  padding: 18px 18px 16px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
  position: relative;
  overflow: hidden;
}

.card-title {
  font-size: 1.05rem;
  margin-bottom: 8px;
}

.card-body {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 12px;
}

.pill-row {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
}

.pill {
  font-size: 0.7rem;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid rgba(75, 85, 99, 0.9);
  color: #e5e7eb;
  background: rgba(15, 23, 42, 0.9);
}

/* Media / Carousel */
.carousel {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-md);
  border: 1px solid rgba(55, 65, 81, 0.9);
  background: #020617;
}

.carousel-track {
  display: flex;
  transition: transform 0.4s ease-out;
}

.carousel-slide {
  min-width: 100%;
}

.carousel-slide img {
  width: 100%;
  display: block;
  object-fit: cover;
  max-height: 260px;
}

.carousel-controls {
  position: absolute;
  inset: auto 10px 10px 10px;
  display: flex;
  justify-content: space-between;
}

.carousel-btn {
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.7);
  background: rgba(15, 23, 42, 0.96);
  color: var(--text);
  font-size: 0.75rem;
  padding: 6px 10px;
  cursor: pointer;
  transition: background 0.15s ease-out, transform 0.1s ease-out;
}

.carousel-btn:hover {
  background: rgba(30, 64, 175, 0.96);
  transform: translateY(-1px);
}

.carousel-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 6px;
}

.carousel-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.7);
  cursor: pointer;
  transition: background 0.15s ease-out, transform 0.15s ease-out;
}

.carousel-dot.active {
  background: #22d3ee;
  transform: scale(1.2);
}

/* Timeline */
.timeline {
  border-left: 1px solid rgba(55, 65, 81, 0.9);
  padding-left: 14px;
  margin-top: 6px;
}

.timeline-item {
  margin-bottom: 10px;
  font-size: 0.9rem;
  color: var(--muted);
  position: relative;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -14px;
  top: 4px;
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #22d3ee;
  box-shadow: 0 0 10px rgba(34, 211, 238, 0.9);
}

/* Resume */
.resume-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.resume-block {
  background: radial-gradient(circle at top left, #111827 0, #020617 60%);
  border-radius: 16px;
  padding: 18px;
  border: 1px solid rgba(55, 65, 81, 0.9);
  box-shadow: var(--shadow-soft);
}

.resume-title {
  font-size: 1.1rem;
  margin-bottom: 10px;
}

.resume-text {
  color: var(--muted);
  line-height: 1.6;
}

.resume-list {
  list-style: none;
  padding-left: 0;
  color: var(--muted);
  line-height: 1.6;
}

.resume-list li {
  margin-bottom: 10px;
}

/* Gallery page */
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
  margin-top: 16px;
}

.gallery-item {
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid rgba(55, 65, 81, 0.9);
  background: #020617;
  position: relative;
}

.gallery-item img {
  width: 100%;
  display: block;
  object-fit: cover;
  max-height: 220px;
}

.gallery-caption {
  font-size: 0.8rem;
  color: var(--muted);
  padding: 8px 10px;
  background: rgba(15, 23, 42, 0.96);
  border-top: 1px solid rgba(31, 41, 55, 0.9);
}

/* Contact */
.contact-card {
  background: radial-gradient(circle at top left, #111827 0, #020617 60%);
  border-radius: var(--radius-lg);
  padding: 18px;
  border: 1px solid var(--border);
  box-shadow: var(--shadow-soft);
}

.form-group {
  margin-bottom: 12px;
}

.form-group label {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 4px;
  color: var(--muted);
}

.form-group input,
.form-group textarea {
  width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(55, 65, 81, 0.9);
  background: rgba(15, 23, 42, 0.9);
  color: var(--text);
  padding: 8px 10px;
  font-size: 0.85rem;
  outline: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #22d3ee;
}

/* Scroll reveal */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.reveal.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Footer */
footer {
  margin-top: 40px;
  padding-top: 18px;
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  font-size: 0.8rem;
  color: var(--muted);
}

/* Mobile tweaks */
@media (max-width: 640px) {
  header {
    flex-direction: column;
    align-items: flex-start;
  }

  nav {
    justify-content: flex-start;
  }

  .hero-subtitle {
    max-width: 100%;
  }
}
