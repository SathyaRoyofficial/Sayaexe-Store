/* Main JS for sayaexe-store */

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
});

function createParticles() {
    const particleCount = 20;
    const body = document.body;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random size
        const size = Math.random() * 15 + 5; // 5px to 20px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Random position
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`; // Start scattered
        
        // Random animation duration and delay
        const duration = Math.random() * 20 + 10; // 10s to 30s
        const delay = Math.random() * 5;
        
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${delay}s`; // Negative delay to start mid-animation
        
        // Random opacity
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        
        body.appendChild(particle);
    }
}
