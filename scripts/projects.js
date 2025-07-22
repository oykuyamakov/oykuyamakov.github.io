// --- Alternating Media Playback (TouchDesigner & Algorave Stuff) ---
const videoElement = document.getElementById("algo-video");
const gifElement = document.getElementById("algo-gif");
const alter1 = document.getElementById("alter1");
const alter2 = document.getElementById("alter2");

const videoDuration = 40000;
const gifDuration = 8000;

function toggleMedia() {
  if (videoElement.style.display === "none") {
    videoElement.style.display = "block";
    gifElement.style.display = "none";
    videoElement.play();
    setTimeout(toggleMedia, videoDuration);
  } else {
    videoElement.style.display = "none";
    videoElement.pause();
    gifElement.style.display = "block";
    setTimeout(toggleMedia, gifDuration);
  }
}

function toggleAlterMedia() {
  if (alter1.style.display === "none") {
    alter1.style.display = "block";
    alter2.style.display = "none";
    setTimeout(toggleAlterMedia, 10000);
  } else {
    alter1.style.display = "none";
    alter2.style.display = "block";
    setTimeout(toggleAlterMedia, 10000);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(toggleMedia, videoDuration);
  setTimeout(toggleAlterMedia, gifDuration);
});

// --- Hover Videos ---
const hoverVid = document.getElementById("hover-video");
const hoverVidFirst = document.getElementById("hover-video-first");

if (hoverVid && hoverVidFirst) {
  hoverVid.addEventListener("loadeddata", () => {
    hoverVid.currentTime = 13;
  });

  hoverVid.addEventListener("mouseenter", () => {
    hoverVid.play();
    hoverVidFirst.play();
  });

  hoverVid.addEventListener("mouseleave", () => {
    hoverVid.pause();
    hoverVidFirst.pause();
  });

  hoverVidFirst.addEventListener("mouseenter", () => {
    hoverVidFirst.play();
    hoverVid.play();
  });

  hoverVidFirst.addEventListener("mouseleave", () => {
    hoverVidFirst.pause();
    hoverVid.pause();
  });
}

// --- Animated Lines ---
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const hr = entry.target.querySelector("hr.animated-line");
      if (hr) {
        if (entry.isIntersecting) {
          hr.classList.add("animate");
        } else {
          hr.classList.remove("animate");
        }
      }
    });
  }, { threshold: 0.5 });

  const sections = document.querySelectorAll("li");
  sections.forEach(section => observer.observe(section));
});

// --- Smooth Scroll + Section Highlighting (Same as main.js) ---
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.section-nav li');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      scrollToSection(item.dataset.target);
    });
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => {
          item.classList.toggle('active', item.dataset.target === id);
        });
      }
    });
  }, {
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0.1,
  });

  document.querySelectorAll('li[id]').forEach(section => {
    observer.observe(section);
  });
});
