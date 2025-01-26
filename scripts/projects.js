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


const hoverVid = document.getElementById("hover-video");
const hoverVidFirst = document.getElementById("hover-video-first");

// Videonun başlangıç noktasını ayarla (3. saniye)
hoverVid.addEventListener("loadeddata", () => {
    hoverVid.currentTime = 13; // Videoyu 3. saniyeye ayarla
});

// Hoverlandığında videoyu oynat
hoverVid.addEventListener("mouseenter", () => {
    hoverVid.play();
    hoverVidFirst.play();
});


// Hoverdan çıkıldığında videoyu oynatmaya devam et (durdurma yok)
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


document.addEventListener('DOMContentLoaded', function () {
    // Create the intersection observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const hr = entry.target.querySelector('hr.animated-line');
        if (entry.isIntersecting) {
          // Add the 'animate' class to the <hr> when section is in view
          hr.classList.add('animate');
        } else {
          // Optionally, remove the 'animate' class if you want to reset the animation when not in view
          hr.classList.remove('animate');
        }
      });
    }, {
      threshold: 0.5 // Trigger when 50% of the section is visible
    });
  
    // Observe each section that contains an <hr> with the 'animated-line' class
    const sections = document.querySelectorAll('li');
    sections.forEach(section => {
      observer.observe(section);
    });
  });