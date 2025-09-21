
# Portfolio docs

A modern, interactive portfolio website featuring game-inspired design elements and smooth animations. Built to showcase development projects and professional journey through an engaging user experience.

## Features

### Character Selection Project Showcase
- Interactive project cards inspired by video game character selection screens
- Hover effects with scaling, glowing, and smooth animations
- Auto-cycling functionality with user interaction controls
- Responsive grid layout that adapts to any screen size

### RPG-Style Timeline
- Game-inspired achievement system displaying career milestones
- Interactive nodes with level badges and XP rewards
- Smooth scroll-triggered animations and hover effects
- Progress bar showing journey completion
- Static display unless user interacts

### Responsive Design
- Mobile-first approach with hamburger navigation
- Smooth hero section fade-out on scroll
- Adaptive layouts for desktop, tablet, and mobile
- Clean, minimal aesthetic with playful game elements

### Interactive Elements
- Theme toggle with spinning logo animation
- Floating particle background effects
- Smooth scrolling navigation
- Dynamic visual feedback on all interactions

## Tech Stack

<div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center;">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
<img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="VS Code">

</div>

## Project Structure

```
portfolio/
├── index.html              # Main HTML structure
├── style.css               # All styling and animations
├── script.js               # Interactive functionality
├── animate.css             # Additional animation library
├── TEMPLATE.md             # Character selection template documentation
├── assets/
│   └── imgs/
│       ├── project01_placeholder.gif
│       ├── project-pacman.gif
│       ├── cipher_animation.gif
│       └── upscaled_profile pict.jpg
└── README.md               # This file
```

## Implementation Highlights

### Character Selection Grid
- CSS Grid with `auto-fit` and `minmax()` for responsive columns
- JavaScript-powered auto-cycling with user interaction detection
- Hover effects using CSS transforms and box-shadows
- Ripple click animations with dynamic DOM manipulation

### Timeline System
- SVG curved path connecting milestones
- Intersection Observer API for scroll-triggered animations
- CSS custom properties for theme consistency
- Progress bar with dynamic width updates

### Performance Optimizations
- GPU-accelerated animations using `transform3d`
- Efficient event delegation for click handling
- Optimized CSS selectors and minimal repaints
- Responsive images with proper sizing

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Assets Credits
```
GIF Sources:
1. https://giphy.com/gifs/splat-nicksplat-rocket-power-3o6nUMU2VDwHbPoyQg
2. https://giphy.com/gifs/RawFury-3s6inaVnOnO6L3vbwR
3. https://giphy.com/gifs/pixel-pixels-art-gif-CjgNRG8CufDwA83jB6
4. https://giphy.com/gifs/RawFury-raccoon-backbone-howard-lotar-j3OL6mSc2FeV0UHMDg
5. https://giphy.com/gifs/pixel-art-jeff-ZCZ7FHlu3sPek3h0zP
6. https://giphy.com/gifs/80s-synthwave-aesthetic-5e25aUTZPcI94uMZgv
7. https://giphy.com/gifs/80s-synthwave-aesthetic-k81NasbqkKA5HSyJxN
```

## Development Notes

### Character Selection Template
The character selection component has been documented in `TEMPLATE.md` for reuse in future projects. It includes complete HTML structure, CSS styling, and JavaScript functionality that can be easily adapted.

### Theme System
Uses CSS custom properties for consistent theming across light and dark modes. Theme persistence is handled through localStorage.

### Animation Philosophy
All animations follow a 60fps target using hardware-accelerated properties. Complex animations are optimized for mobile performance.
