

// Create the particles container and append it to the body
const particlesContainer = document.createElement('div');
particlesContainer.classList.add('scrollbar-particles');
document.body.appendChild(particlesContainer);

let particleCount = 20;  // Number of particles per mouse move

let lastMouseX = window.innerWidth / 2;
let lastMouseY = window.innerHeight / 2;


// Function to create particles
function createParticles(x,y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');

    // Randomize particle movement in X and Y directions
    const randomX = (Math.random() - 0.5) * 2050;
    const randomY = (Math.random() - 0.5) * 5000;


    // Position the particle where the mouse is
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Set the random movement using custom properties
    particle.style.setProperty('--x', `${randomX}px`);
    particle.style.setProperty('--y', `${randomY}px`);

    // Add the particle to the container
    particlesContainer.appendChild(particle);

    // Remove the particle after animation ends
    setTimeout(() => {
        particle.remove();
    }, 1500);  // Increase the time for the particle visibility duration
}

// Event listener for mouse movement on the entire document
document.body.addEventListener('click', function(e) {
    for (let i = 0; i < particleCount *2 ; i++) {
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