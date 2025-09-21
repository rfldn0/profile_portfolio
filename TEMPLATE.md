# Character Selection-Style Portfolio Template

## Overview
This template creates a video game character selection-inspired project showcase with interactive hover effects, auto-cycling animations, and responsive design. Perfect for portfolios, project galleries, and showcase websites.

## Features
- 🎮 Game-inspired character selection layout
- ✨ Interactive hover effects with scaling, glowing, and animations
- 🔄 Auto-cycling through projects every 3 seconds
- 📱 Fully responsive design
- 🎨 Modern card-based design with smooth transitions
- 🌙 Dark/Light theme support

---

## HTML Structure

### Main Container
```html
<div class="character-selection-grid" id="projects">
    <div class="selection-header">
        <h2>Choose Your Project</h2>
        <div class="selection-subtitle">Click to explore my featured work</div>
    </div>

    <div class="character-cards-container">
        <!-- Character Cards Go Here -->
    </div>
</div>
```

### Individual Character Card
```html
<div class="character-card" data-character="0">
    <div class="card-frame">
        <div class="card-avatar">
            <img src="path/to/project-image.jpg" alt="Project Name">
            <div class="avatar-overlay">
                <div class="icon">⚡</div>
            </div>
        </div>
        <div class="card-info">
            <h3 class="character-name">Project Name</h3>
            <div class="character-title">Project Category</div>
            <div class="character-stats">
                <span class="stat">Technology 1</span>
                <span class="stat">Technology 2</span>
            </div>
        </div>
        <div class="card-glow"></div>
        <div class="selection-indicator">
            <div class="indicator-dot"></div>
        </div>
    </div>
    <div class="card-details">
        <p>Detailed project description that appears on hover.</p>
        <a href="https://github.com/username/repo" class="view-project-btn" target="_blank">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387..."/>
            </svg>
            View Repository
        </a>
    </div>
</div>
```

---

## CSS Styles

### Grid Container
```css
.character-selection-grid {
    animation: fadeInRight 1s ease-out 0.3s both;
    padding: 40px 0;
}

.character-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
}
```

### Card Structure
```css
.character-card {
    position: relative;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform-style: preserve-3d;
}

.card-frame {
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    border-radius: 12px;
    padding: 25px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateZ(0);
}
```

### Hover Effects
```css
.character-card:hover {
    transform: translateY(-10px) scale(1.02);
}

.character-card:hover .card-frame {
    border-color: #4169E1;
    box-shadow: 0 20px 40px rgba(65, 105, 225, 0.3);
}

.character-card:hover .card-glow {
    opacity: 1;
}

.character-card:hover .card-avatar img {
    transform: scale(1.1);
}
```

### Glow Effect
```css
.card-glow {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #4169E1, #89CFF0, #4169E1, #89CFF0);
    border-radius: 12px;
    opacity: 0;
    z-index: -1;
    transition: all 0.4s ease;
    background-size: 300% 300%;
    animation: gradientShift 3s ease infinite;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
```

### Selection Indicator
```css
.selection-indicator {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 20px;
    height: 20px;
    border: 2px solid var(--border-color);
    border-radius: 50%;
    background: transparent;
    transition: all 0.3s ease;
}

.character-card.selected .selection-indicator {
    border-color: #4169E1;
    background: #4169E1;
}

.character-card.selected .indicator-dot {
    opacity: 1;
    transform: scale(1);
    background: white;
}
```

---

## JavaScript Functionality

### Auto-Cycling System
```javascript
let currentCharacterIndex = 0;
let isUserInteracting = false;
let autoRotateTimer;
const characterCards = document.querySelectorAll('.character-card');

function selectCharacter(index) {
    characterCards.forEach(card => card.classList.remove('selected'));
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
```

### Interactive Controls
```javascript
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
```

### Ripple Click Effect
```javascript
characterCards.forEach(card => {
    card.addEventListener('click', () => {
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

        card.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});
```

---

## Responsive Design

### Mobile (768px and below)
```css
@media (max-width: 768px) {
    .character-selection-grid {
        padding: 20px 0;
    }

    .character-cards-container {
        grid-template-columns: 1fr;
        gap: 20px;
        padding: 0 10px;
    }

    .card-frame {
        padding: 20px;
    }

    .card-avatar {
        height: 150px;
    }

    .character-card:hover {
        transform: translateY(-5px) scale(1.01);
    }
}
```

### Tablet (1024px and below)
```css
@media (max-width: 1024px) {
    .character-cards-container {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
    }
}
```

---

## Theme Variables

### CSS Custom Properties
```css
:root {
    /* Dark theme (default) */
    --bg-primary: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    --bg-secondary: rgba(255, 255, 255, 0.05);
    --bg-card: rgba(255, 255, 255, 0.08);
    --bg-card-hover: rgba(255, 255, 255, 0.12);
    --text-primary: #ffffff;
    --text-secondary: #cccccc;
    --text-muted: #888888;
    --border-color: rgba(255, 255, 255, 0.15);
    --border-color-hover: rgba(255, 255, 255, 0.25);
}

[data-theme="light"] {
    --bg-primary: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    --bg-secondary: rgba(0, 0, 0, 0.05);
    --bg-card: rgba(0, 0, 0, 0.08);
    --bg-card-hover: rgba(0, 0, 0, 0.12);
    --text-primary: #1a202c;
    --text-secondary: #2d3748;
    --text-muted: #718096;
    --border-color: rgba(0, 0, 0, 0.15);
    --border-color-hover: rgba(0, 0, 0, 0.25);
}
```

---

## Implementation Guide

### Step 1: HTML Structure
1. Create the main container with `character-selection-grid` class
2. Add the header section with title and subtitle
3. Create the cards container with `character-cards-container` class
4. Add individual character cards with all required elements

### Step 2: CSS Styling
1. Include all CSS variables for theming
2. Add the character selection grid styles
3. Implement hover effects and animations
4. Add responsive breakpoints

### Step 3: JavaScript Integration
1. Initialize the character selection system
2. Set up auto-cycling functionality
3. Add interactive event handlers
4. Implement ripple click effects

### Step 4: Customization
1. Replace project images and information
2. Adjust colors and animations to match your brand
3. Modify timing intervals for auto-cycling
4. Customize icons and tech stack badges

---

## Key Features Breakdown

### 🎮 Game-Inspired Elements
- **Selection Indicators**: Radio button-style selectors in top-left
- **Character Stats**: Tech stack displayed as skill badges
- **Avatar System**: Project thumbnails with overlay icons
- **Selection States**: Visual feedback for active/selected cards

### ✨ Interactive Effects
- **Hover Scaling**: Cards lift and scale on mouse over
- **Glow Animation**: Animated gradient border effect
- **Image Zoom**: Thumbnails scale within their containers
- **Shimmer Effect**: Light sweep animation across cards
- **Ripple Clicks**: Expanding circle effect on click

### 🔄 Auto-Cycling
- **Smart Timing**: 3-second intervals between selections
- **User Interaction**: Pauses on hover or click
- **Smooth Transitions**: All state changes are animated
- **Loop Behavior**: Cycles infinitely through all projects

### 📱 Responsive Design
- **Grid Layout**: Auto-fit columns based on screen size
- **Mobile Optimization**: Single column layout on small screens
- **Touch Friendly**: Larger touch targets on mobile
- **Performance**: Optimized animations for mobile devices

---

## Usage Examples

### Basic Implementation
```html
<!-- Include this structure in your HTML -->
<div class="character-selection-grid" id="projects">
    <!-- Add your character cards here -->
</div>
```

### Customizing Colors
```css
/* Override theme colors */
:root {
    --primary-accent: #your-brand-color;
    --card-glow-color: rgba(your-rgb, 0.3);
}
```

### Adjusting Timing
```javascript
// Change auto-cycle timing
function startAutoRotate() {
    autoRotateTimer = setInterval(nextCharacter, 5000); // 5 seconds
}
```

---

## Browser Support
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ iOS Safari 12+
- ✅ Chrome Android 60+

---

## Performance Notes
- Uses `transform` for animations (GPU accelerated)
- Minimal repaints with `transform3d` and `translateZ`
- Efficient event handling with delegation
- Optimized for 60fps animations
- Lazy loading compatible for images

---

## File Structure
```
portfolio/
├── index.html          # Main HTML structure
├── style.css           # Character selection styles
├── script.js           # Interactive functionality
├── TEMPLATE.md         # This documentation
└── assets/
    └── imgs/
        ├── project01.gif
        ├── project02.gif
        └── ...
```

---

## Credits
- Inspired by video game character selection screens
- Uses CSS Grid for responsive layout
- Cubic-bezier transitions for smooth animations
- SVG icons for scalable graphics

---

*Last Updated: September 2025*
*Version: 1.0.0*