// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Initialize particles
    initParticles();
    
    // Initialize navigation
    initNavigation();
    
    // Initialize page system
    initPageSystem();
    
    // Initialize copy functionality
    initCopyFunctionality();
    
    // Initialize staff data
    initStaffData();
    
    // Initialize animations
    initAnimations();
});

function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#3b82f6' },
                shape: { type: 'circle' },
                opacity: { value: 0.3, random: true },
                size: { value: 3, random: true },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#3b82f6',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'grab' },
                    onclick: { enable: true, mode: 'push' },
                    resize: true
                }
            },
            retina_detect: true
        });
    }
}

function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });
    });
}

function initPageSystem() {
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
            
            const targetPage = this.getAttribute('data-page');
            
            // Update active states
            navLinks.forEach(nl => nl.classList.remove('active'));
            this.classList.add('active');
            
            // Show target page
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetPage) {
                    page.classList.add('active');
                }
            });
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function initCopyFunctionality() {
    const copyBtn = document.getElementById('copyBtn');
    const scriptCode = document.getElementById('scriptCode');
    
    if (copyBtn && scriptCode) {
        copyBtn.addEventListener('click', function() {
            const textToCopy = scriptCode.textContent;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                // Visual feedback
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.background = '#10b981';
                this.style.borderColor = '#10b981';
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.background = '';
                    this.style.borderColor = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                this.innerHTML = '<i class="fas fa-times"></i>';
                this.style.background = '#ef4444';
                this.style.borderColor = '#ef4444';
                
                setTimeout(() => {
                    this.innerHTML = '<i class="fas fa-copy"></i>';
                    this.style.background = '';
                    this.style.borderColor = '';
                }, 2000);
            });
        });
    }
    
    // Get Started button
    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', function() {
            const scriptSection = document.querySelector('.script-section');
            if (scriptSection) {
                scriptSection.scrollIntoView({ behavior: 'smooth' });
                
                // Highlight the script section
                scriptSection.style.animation = 'highlight 2s ease-in-out';
                setTimeout(() => {
                    scriptSection.style.animation = '';
                }, 2000);
            }
        });
    }
}

function initStaffData() {
    const staffData = [
        {
            name: 'N1ght',
            role: 'mod',
            avatar: 'https://images-ext-1.discordapp.net/external/7kG8GvaAyFTW94FQsZCs8yiC3GDDqorEamYmQhePvI4/https/cdn.discordapp.com/embed/avatars/3.png?format=webp&quality=lossless&width=205&height=205',
            bio: 'Ŷóû ćâɲť ľòćƙ ûp...ťĥè ðàŕķn̈è§ś - N1ght, Bio',
            status: 'Active'
        },
        {
            name: 'Q',
            role: 'admin',
            avatar: 'https://images-ext-1.discordapp.net/external/NyyMVmlKwgabJ4U-3hp1HjmrgnH2HUkn1qjo5_aGUqw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/973990455329034331/f0329916ff79e8aa3847afd0d8478a05.webp?format=webp&width=205&height=205',
            bio: 'Administrator for print, Serverside creator.',
            status: 'Active'
        },
        {
            name: 'SlappyHue',
            role: 'admin',
            avatar: 'https://images-ext-1.discordapp.net/external/MzTEJAlqlBrgm9-ilvolo0nP-CsnNFhGl543mJucX-Q/%3Fsize%3D512/https/cdn.discordapp.com/avatars/528813176163139610/ade801a50883567a4a1527ffd2773053.webp?format=webp&width=205&height=205',
            bio: 'Community support, doesn\'t exploit.',
            status: 'Active'
        },
        {
            name: 'Ray',
            role: 'mod',
            avatar: 'https://images-ext-1.discordapp.net/external/H11wYBJKD46KQzhmLRtBcy8e-cABlAbqdqJL7IJBt20/%3Fsize%3D512/https/cdn.discordapp.com/avatars/1250316754920673333/f75850bd0552bae32e0639c93c7e1669.webp?format=webp&width=410&height=410',
            bio: 'Cool guy, very cool lol',
            status: 'Active'
        },
        {
            name: 'Positive Rabbit',
            role: 'manager',
            avatar: 'https://images-ext-1.discordapp.net/external/EILerTMCFrWueH0SI8NTDbE_8ACnULfWFGnKUAWMFMw/%3Fsize%3D512/https/cdn.discordapp.com/avatars/1052194772644794399/82aa56dd0e80ee1639181bbaceb43f3e.webp?format=webp&width=205&height=205',
            bio: 'He gets the partnerships :)',
            status: 'Active'
        },
        {
            name: 'RXAVOLKED',
            role: 'staff',
            avatar: 'https://images-ext-1.discordapp.net/external/DJ-0bCO9LcfChPQ4UYL24F8y-kq-C7HIk854MFsE760/%3Fsize%3D512/https/cdn.discordapp.com/avatars/1258477179281604668/5989d207f202b9f724891ef73f9291e7.webp?format=webp&width=205&height=205',
            bio: 'Human maybe?',
            status: 'Active'
        }
    ];

    const staffGrid = document.querySelector('.staff-grid');
    
    if (staffGrid) {
        staffGrid.innerHTML = staffData.map(member => `
            <div class="staff-card">
                <div class="staff-header">
                    <div class="staff-avatar">
                        <img src="${member.avatar}" alt="${member.name}">
                    </div>
                    <div class="staff-info">
                        <h3>${member.name}</h3>
                        <span class="staff-role ${member.role}">${getRoleTitle(member.role)}</span>
                    </div>
                </div>
                <div class="staff-details">
                    <p>${member.bio}</p>
                    <div class="staff-stats">
                        <div class="staff-stat">
                            <div class="stat-number">${member.status}</div>
                            <div class="stat-label">Status</div>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

function getRoleTitle(role) {
    const roleTitles = {
        'admin': 'Administrator',
        'mod': 'Moderator',
        'manager': 'Community Manager',
        'staff': 'Staff'
    };
    return roleTitles[role] || role;
}

function initAnimations() {
    // Add CSS for highlight animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes highlight {
            0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.7); }
            70% { box-shadow: 0 0 0 10px rgba(37, 99, 235, 0); }
            100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
        }
    `;
    document.head.appendChild(style);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.feature-card, .staff-card, .stat-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Add some utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
window.addEventListener('resize', debounce(() => {
    // Any resize-specific logic can go here
}, 250));
