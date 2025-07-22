// --- Particle Effects ---
const particlesContainer = document.createElement('div');
particlesContainer.classList.add('scrollbar-particles');
document.body.appendChild(particlesContainer);

let particleCount = 20;
let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;

function createParticles(x, y) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  const randomX = (Math.random() - 0.5) * 2050;
  const randomY = (Math.random() - 0.5) * 5000;
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.setProperty('--x', `${randomX}px`);
  particle.style.setProperty('--y', `${randomY}px`);
  particlesContainer.appendChild(particle);
  setTimeout(() => particle.remove(), 1500);
}

document.body.addEventListener('click', function (e) {
  for (let i = 0; i < particleCount * 2; i++) {
    createParticles(e.clientX, e.clientY);
  }
});

document.addEventListener('mousemove', (e) => {
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
});

setInterval(() => {
  for (let i = 0; i < particleCount; i++) {
    createParticles(lastMouseX, lastMouseY);
  }
}, 3000);

// --- Smooth Scroll + Section Highlighting ---
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.section-nav li');

  // Scroll to section on click
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      const id = item.dataset.target;
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Track section visibility
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        for (const item of navItems) {
          item.classList.toggle('active', item.dataset.target === entry.target.id);
          if(entry.target.id != "header"){
            item.classList.toggle('deactive', item.dataset.target !== entry.target.id);
          }
        }
        
      }
    });
  }, {
    threshold: 0.4,
  });

  // Observe actual content sections (e.g., <section id="istanbul">...</section>)
  const observedSections = document.querySelectorAll('section[id]');
  observedSections.forEach(section => observer.observe(section));
});