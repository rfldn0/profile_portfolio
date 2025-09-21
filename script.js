/* ===== PORTFOLIO INTERACTIVE FUNCTIONALITY ===== */
/* Victor Tabuni's Portfolio - Enhanced with smooth animations and interactions */

/* ===== MOBILE NAVIGATION SYSTEM ===== */
/**
 * Toggles the mobile hamburger menu visibility
 * Manages overlay and menu animation states
 */
function toggleMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    overlay.classList.toggle('active');
}

/**
 * Closes the mobile menu and resets all related elements
 * Used when clicking outside menu or on menu items
 */
function closeMobileMenu() {
    const hamburger = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');

    hamburger.classList.remove('active');
    mobileMenu.classList.remove('active');
    overlay.classList.remove('active');
}

/* ===== THEME MANAGEMENT SYSTEM ===== */
/**
 * Toggles between light and dark themes with smooth visual feedback
 * Includes logo spinning animation and persistent storage
 */
function toggleTheme() {
    const body = document.body;
    const logoSvg = document.querySelector('.new-logo-svg');
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Enhanced spinning animation with longer duration for better visual feedback
    logoSvg.classList.add('spinning');
    setTimeout(() => {
        logoSvg.classList.remove('spinning');
    }, 1200); // Increased from 600ms for smoother animation

    // Apply theme and save preference
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

/**
 * Loads user's saved theme preference or defaults to dark theme
 * Called on page initialization
 */
function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
}

/* ===== VISUAL EFFECTS SYSTEM ===== */
/**
 * Creates animated floating particles for background ambiance
 * Generates 50 particles with randomized timing for organic movement
 */
function createParticles() {
    const particleContainer = document.querySelector('.particles');
    const particleCount = 50;

    // Generate particles with staggered animations for natural effect
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (20 + Math.random() * 15) + 's'; // Slowed down from 15-25s to 20-35s
        particleContainer.appendChild(particle);
    }
}

/* ===== NAVIGATION INTERACTIONS ===== */
/**
 * Implements smooth scrolling for all navigation links
 * Works for both desktop nav items and mobile menu items
 */
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

/**
 * Adds interactive click feedback to project cards
 * Prevents interference with GitHub button clicks
 */
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent card animation if GitHub button was clicked
        if (e.target.closest('.github-btn')) return;

        // Enhanced click feedback with slower animation
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 300); // Increased from 150ms for more noticeable feedback
    });
});

/* ===== INITIALIZATION SEQUENCE ===== */
/**
 * Initialize all portfolio features and effects
 * Load theme and create visual elements immediately
 */
loadTheme();
createParticles();

/**
 * Initialize interactive features after DOM content is fully loaded
 * Staggered timing ensures smooth animation sequences
 */
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initCharacterSelection, 1500); // Increased delay for smoother entrance
    setTimeout(initRPGTimeline, 2000); // Enhanced timing for timeline initialization
});

/* ===== SCROLL-BASED VISUAL EFFECTS ===== */
/**
 * Creates immersive scroll animations for hero section and timeline
 * Implements parallax effects and smooth transitions between sections
 */
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const heroSection = document.querySelector('.hero-section');
    const timelineSection = document.querySelector('.rpg-timeline-section');

    // Hero section parallax and fade effect
    if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const fadeStartPoint = windowHeight * 0.3; // Begin fade at 30% scroll
        const fadeEndPoint = windowHeight * 0.8; // Complete fade at 80% scroll

        let opacity = 1;
        if (scrolled > fadeStartPoint) {
            const fadeProgress = (scrolled - fadeStartPoint) / (fadeEndPoint - fadeStartPoint);
            opacity = Math.max(0, 1 - fadeProgress);
        }

        // Apply smooth opacity and parallax movement
        heroSection.style.opacity = opacity;
        heroSection.style.transform = `translateY(${scrolled * 0.2}px)`;
    }

    // Timeline section layering for smooth transitions
    if (timelineSection) {
        const timelineRect = timelineSection.getBoundingClientRect();
        const timelineTop = timelineRect.top;

        // Manage z-index for proper section layering
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

/* ===== PROJECT CARD SELECTION SYSTEM ===== */
/**
 * Interactive project showcase with automatic rotation and user controls
 * Manages card selection states and smooth transitions
 */
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

/**
 * Starts automatic card rotation for passive browsing
 * Slower timing for better user experience
 */
function startAutoRotate() {
    autoRotateTimer = setInterval(nextCharacter, 5000); // Increased from 3s to 5s for better viewing
}

function stopAutoRotate() {
    clearInterval(autoRotateTimer);
}

/**
 * Resets automatic rotation after user interaction
 * Provides breathing room before resuming auto-rotation
 */
function resetAutoRotate() {
    stopAutoRotate();
    setTimeout(startAutoRotate, 3000); // Increased from 2s to 3s for less aggressive auto-rotation
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

/**
 * Enhanced visual feedback system for project cards
 * Creates ripple effect on click for better user interaction
 */
characterCards.forEach(card => {
    card.addEventListener('click', () => {
        // Create smooth ripple effect with enhanced styling
        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(65, 105, 225, 0.6);
            transform: scale(0);
            animation: ripple 1.2s ease-out; /* Slowed down from 0.6s */
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

        // Remove ripple after enhanced duration
        setTimeout(() => {
            ripple.remove();
        }, 1200); // Increased from 600ms to match animation duration
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

/* ===== RPG TIMELINE INTERACTION SYSTEM ===== */
/**
 * Manages the interactive career timeline with game-like progression
 * Handles milestone highlighting, progress tracking, and visual feedback
 */
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

/**
 * Updates the progress bar to reflect current milestone position
 * Smooth animation provides visual feedback for timeline progression
 */
function updateProgressBar(milestoneIndex) {
    const progressFill = document.querySelector('.progress-fill');
    const totalMilestones = document.querySelectorAll('.milestone').length;
    const progressPercentage = ((milestoneIndex + 1) / totalMilestones) * 100;

    if (progressFill) {
        progressFill.style.transition = 'width 1.5s ease-out'; // Slowed down from 1s
        progressFill.style.width = `${progressPercentage}%`;
    }
}

/**
 * Global click handler for timeline milestone interactions
 * Provides immediate feedback without complex auto-progression
 */
document.addEventListener('click', (e) => {
    if (e.target.closest('.milestone')) {
        // Handle milestone click with enhanced visual feedback
        const milestone = e.target.closest('.milestone');
        const milestones = Array.from(document.querySelectorAll('.milestone'));
        const index = milestones.indexOf(milestone);

        if (index !== -1) {
            highlightMilestone(index);
            updateProgressBar(index);
        }
    }
});

/**
 * Dynamic CSS animations for enhanced timeline interactions
 * Provides smooth entrance and highlighting effects
 */
const timelineStyle = document.createElement('style');
timelineStyle.textContent = `
    .milestone-visible {
        animation: milestoneSlideIn 1.2s ease-out forwards; /* Slowed down from 0.6s */
    }

    .milestone-active .node-ring {
        border-color: #89CFF0 !important;
        box-shadow: 0 0 20px rgba(137, 207, 240, 0.8) !important;
        transition: all 0.6s ease; /* Slowed down from 0.3s */
    }

    .milestone-active .milestone-card {
        border-color: #4169E1 !important;
        box-shadow: 0 10px 25px rgba(65, 105, 225, 0.25) !important;
        transform: translateY(-5px) !important;
        transition: all 0.6s ease; /* Slowed down from 0.3s */
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
