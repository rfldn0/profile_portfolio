
// Mobile menu functionality
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');
    
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');
    
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
}

// Theme toggle functionality
function toggleTheme() {
    const body = document.body;
    const logoSvg = document.querySelector('.new-logo-svg');
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Add spinning animation
    logoSvg.classList.add('spinning');
    setTimeout(() => {
        logoSvg.classList.remove('spinning');
    }, 600);
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Load saved theme or default to dark
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
}

// Create floating particles
function createParticles() {
    const particleContainer = document.querySelector('.particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particleContainer.appendChild(particle);
    }
}

// Smooth scrolling for navigation
document.querySelectorAll('.nav-item, .mobile-nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(item.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Project card interactions
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't trigger card click if GitHub button was clicked
        if (e.target.closest('.github-btn')) return;
        
        // Add a subtle click animation
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});

// Initialize everything
loadTheme();
createParticles();

// Initialize character selection after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initCharacterSelection, 1000); // Wait for animations to complete
    setTimeout(initRPGTimeline, 1500); // Initialize RPG timeline
});

// Enhanced scroll effects for hero fade and parallax
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const heroSection = document.querySelector('.hero-section');
    const timelineSection = document.querySelector('.rpg-timeline-section');

    // Hero fade-out effect
    if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const fadeStartPoint = windowHeight * 0.3; // Start fading when 30% down
        const fadeEndPoint = windowHeight * 0.8; // Fully faded when 80% down

        let opacity = 1;
        if (scrolled > fadeStartPoint) {
            const fadeProgress = (scrolled - fadeStartPoint) / (fadeEndPoint - fadeStartPoint);
            opacity = Math.max(0, 1 - fadeProgress);
        }

        heroSection.style.opacity = opacity;
        heroSection.style.transform = `translateY(${scrolled * 0.2}px)`;
    }

    // Timeline entrance effect
    if (timelineSection) {
        const timelineRect = timelineSection.getBoundingClientRect();
        const timelineTop = timelineRect.top;

        // Ensure timeline doesn't overlap hero content
        if (timelineTop < windowHeight * 0.9) {
            timelineSection.style.zIndex = '10';
        } else {
            timelineSection.style.zIndex = '2';
        }
    }
});

// Intersection Observer for timeline animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0s';
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Character Selection Functionality
let currentCharacterIndex = 0;
let isUserInteracting = false;
let autoRotateTimer;
const characterCards = document.querySelectorAll('.character-card');

function selectCharacter(index) {
    // Remove selected class from all cards
    characterCards.forEach(card => card.classList.remove('selected'));

    // Add selected class to current card
    if (characterCards[index]) {
        characterCards[index].classList.add('selected');
        currentCharacterIndex = index;
    }
}

function nextCharacter() {
    if (!isUserInteracting) {
        currentCharacterIndex = (currentCharacterIndex + 1) % characterCards.length;
        selectCharacter(currentCharacterIndex);
    }
}

function startAutoRotate() {
    autoRotateTimer = setInterval(nextCharacter, 3000); // 3 seconds per card
}

function stopAutoRotate() {
    clearInterval(autoRotateTimer);
}

function resetAutoRotate() {
    stopAutoRotate();
    setTimeout(startAutoRotate, 2000); // Resume after 2 seconds of no interaction
}

// Add click handlers to character cards
characterCards.forEach((card, index) => {
    card.addEventListener('click', () => {
        isUserInteracting = true;
        selectCharacter(index);
        resetAutoRotate();
        setTimeout(() => { isUserInteracting = false; }, 500);
    });

    // Pause auto-rotation on hover
    card.addEventListener('mouseenter', () => {
        isUserInteracting = true;
        stopAutoRotate();
    });

    card.addEventListener('mouseleave', () => {
        isUserInteracting = false;
        resetAutoRotate();
    });
});

// Initialize character selection
function initCharacterSelection() {
    if (characterCards.length > 0) {
        selectCharacter(0); // Select first character
        startAutoRotate(); // Start auto-rotation
    }
}

// Add enhanced visual feedback
characterCards.forEach(card => {
    card.addEventListener('click', () => {
        // Create click ripple effect
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(65, 105, 225, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            z-index: 1000;
        `;

        const rect = card.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (rect.width / 2 - size / 2) + 'px';
        ripple.style.top = (rect.height / 2 - size / 2) + 'px';

        card.style.position = 'relative';
        card.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// RPG Timeline Functionality
let timelineAnimationActive = false;
let currentMilestoneIndex = 0;
let progressAnimationTimer;

function initRPGTimeline() {
    const milestones = document.querySelectorAll('.milestone');
    const progressFill = document.querySelector('.progress-fill');

    if (milestones.length === 0) return;

    // Add scroll-triggered animations (simplified)
    setupTimelineObserver();

    // Add interactive click handlers (simplified)
    milestones.forEach((milestone, index) => {
        milestone.addEventListener('click', () => {
            highlightMilestone(index);
            updateProgressBar(index);
        });
    });

    // Set initial progress bar to show all completed milestones
    const completedMilestones = document.querySelectorAll('.milestone:not(.future-milestone)').length;
    const totalMilestones = milestones.length;
    const initialProgress = (completedMilestones / totalMilestones) * 100;

    if (progressFill) {
        progressFill.style.width = `${initialProgress}%`;
    }
}

function setupTimelineObserver() {
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('milestone-visible');
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.milestone').forEach(milestone => {
        timelineObserver.observe(milestone);
    });
}

function highlightMilestone(index) {
    const milestones = document.querySelectorAll('.milestone');

    // Remove previous highlights
    milestones.forEach(m => m.classList.remove('milestone-active'));

    // Add highlight to selected milestone
    if (milestones[index]) {
        milestones[index].classList.add('milestone-active');
        currentMilestoneIndex = index;

        // Scroll milestone into view smoothly
        milestones[index].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

function updateProgressBar(milestoneIndex) {
    const progressFill = document.querySelector('.progress-fill');
    const totalMilestones = document.querySelectorAll('.milestone').length;
    const progressPercentage = ((milestoneIndex + 1) / totalMilestones) * 100;

    if (progressFill) {
        progressFill.style.transition = 'width 1s ease-out';
        progressFill.style.width = `${progressPercentage}%`;
    }
}

// Simplified visual feedback - removed complex particle effects and animations

// Simplified timeline interaction - no auto-progression
document.addEventListener('click', (e) => {
    if (e.target.closest('.milestone')) {
        // Just handle the click, no auto-progression to stop/resume
        const milestone = e.target.closest('.milestone');
        const milestones = Array.from(document.querySelectorAll('.milestone'));
        const index = milestones.indexOf(milestone);

        if (index !== -1) {
            highlightMilestone(index);
            updateProgressBar(index);
        }
    }
});

// Add simplified CSS animations
const timelineStyle = document.createElement('style');
timelineStyle.textContent = `
    .milestone-visible {
        animation: milestoneSlideIn 0.6s ease-out forwards;
    }

    .milestone-active .node-ring {
        border-color: #89CFF0 !important;
        box-shadow: 0 0 20px rgba(137, 207, 240, 0.8) !important;
        transition: all 0.3s ease;
    }

    .milestone-active .milestone-card {
        border-color: #4169E1 !important;
        box-shadow: 0 10px 25px rgba(65, 105, 225, 0.25) !important;
        transform: translateY(-5px) !important;
        transition: all 0.3s ease;
    }

    @keyframes milestoneSlideIn {
        0% {
            opacity: 0;
            transform: translateY(30px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(timelineStyle);
