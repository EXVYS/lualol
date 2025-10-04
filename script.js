// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize particles
    initParticles();

    // Navigation and page management
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    const navMenu = document.getElementById('nav-links');
    const burger = document.getElementById('burger-menu');

    // Burger Menu Toggle
    burger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    navLinks.forEach(link => {
        if (link.getAttribute('target') === '_blank') return;
        
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetPageId = link.getAttribute('data-page');
            showPage(targetPageId);
            
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
            
            if(navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                burger.classList.remove('toggle');
            }
        });
    });

    // Copy Script Button
    const copyBtn = document.getElementById('copyBtn');
    const scriptCode = document.getElementById('script').innerText;
    
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(scriptCode).then(() => {
            const originalText = copyBtn.innerText;
            copyBtn.innerText = 'Copied!';
            copyBtn.style.background = '#27ae60';
            
            setTimeout(() => {
                copyBtn.innerText = originalText;
                copyBtn.style.background = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    });

    // Floating Script Effect
    const scriptElement = document.getElementById('script');
    const floatingScript = document.getElementById('floatingScript');

    scriptElement.addEventListener('mouseenter', function() {
        floatingScript.textContent = this.textContent.trim();
        floatingScript.style.opacity = '1';
    });

    scriptElement.addEventListener('mouseleave', function() {
        floatingScript.style.opacity = '0';
    });

    document.addEventListener('mousemove', function(e) {
        floatingScript.style.left = (e.pageX + 15) + 'px';
        floatingScript.style.top = (e.pageY + 15) + 'px';
    });
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
        if (page.id === pageId) {
            page.classList.add('active');
        }
    });
}

function initParticles() {
    particlesJS("particles-js", {
        "particles": {
            "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
            "color": { "value": "#1c4b72" },
            "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" } },
            "opacity": { "value": 0.5, "random": false, "anim": { "enable": false } },
            "size": { "value": 3, "random": true, "anim": { "enable": false } },
            "line_linked": { "enable": true, "distance": 150, "color": "#1c4b72", "opacity": 0.4, "width": 1 },
            "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
            "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } }
        },
        "retina_detect": true
    });
}
