# Victor Tabuni - Portfolio Website

A modern, interactive portfolio website featuring game-inspired design elements and smooth animations. Built to showcase development projects and professional journey through an engaging user experience.
<img width="1910" height="912" alt="image" src="https://github.com/user-attachments/assets/63c3dc3a-55f2-4960-8525-793aae8ee9b4" />

## Features

### Character Selection Project Showcase
- Interactive project cards inspired by video game character selection screens
- Enhanced hover effects with scaling, glowing, and smooth animations
- Auto-cycling functionality with user interaction controls
- Responsive grid layout that adapts to any screen size
- Ripple click animations for enhanced feedback

### RPG-Style Career Timeline
- Game-inspired achievement system displaying career milestones
- Interactive nodes with level badges and XP rewards
- Smooth scroll-triggered animations and hover effects
- Progress bar showing journey completion percentage
- Future milestone preview with locked states

### Advanced Theme System
- Seamless dark/light theme toggle with visual feedback
- Logo spinning animation during theme transitions
- Persistent theme preferences via localStorage
- Smooth color transitions across all elements

### Enhanced Responsiveness
- Mobile-first approach with intuitive hamburger navigation
- Smooth hero section parallax effects on scroll
- Adaptive layouts for desktop, tablet, and mobile devices
- Social media integration with platform-specific hover effects

### Visual Effects & Interactions
- Floating particle background animation system
- Smooth scrolling navigation with section targeting
- Dynamic visual feedback on all user interactions
- Hardware-accelerated animations for optimal performance

## Tech Stack

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)

</div>

## 📁 Project Structure

```
profile_portfolio/
├── index.html                  # Main HTML structure with semantic markup
├── image.png                   # Portfolio preview image
│
├── 📁 css/
│   ├── style.css              # Main stylesheet with organized sections
│   └── animate.css            # Additional animation library
│
├── 📁 js/
│   └── script.js              # Interactive functionality and animations
│
├── 📁 assets/
│   ├── fonts/                 # Custom font files
│   └── imgs/                  # Project images and GIFs
│       ├── project01_placeholder.gif
│       ├── project-pacman.gif
│       ├── cipher_animation.gif
│       └── upscaled_profile pict.jpg
│
├── 📁 docs/
│   ├── README.md              # Original documentation
│   └── TEMPLATE.md            # Reusable component templates
│
└── 📁 .github/
    └── workflows/             # GitHub Actions (if applicable)
```

##  Getting Started

### Quick Start
1. **Clone the repository**
   ```bash
   git clone https://github.com/rfldn0/profile_portfolio.git
   cd profile_portfolio
   ```

2. **Open in browser**
   ```bash
   # Using Python
   python -m http.server 8000

   # Using Node.js
   npx serve .

   # Or simply open index.html in your browser
   ```

3. **View the portfolio**
   Navigate to `http://localhost:8000` or open `index.html` directly

### Development Setup
- **Code Editor**: VS Code recommended with Live Server extension
- **Browser**: Chrome/Firefox for best development experience
- **Git**: Version control for tracking changes

## Performance Optimizations

### Animation Performance
- **GPU Acceleration**: All animations use `transform3d` for hardware acceleration
- **Mobile Optimization**: Animations completely disabled on mobile devices for instant content display
- **Smart Loading**: JavaScript delays removed on mobile - immediate initialization
- **Optimized Timing**: Transition speeds carefully tuned for smooth desktop experience
- **Efficient Selectors**: CSS selectors optimized to minimize repaints
- **Intersection Observer**: Scroll animations only trigger when elements are visible
- **Zero Visibility Issues**: Mobile devices bypass all fade effects and delays

### Code Organization
- **Modular CSS**: Organized into logical sections with clear documentation
- **Clean JavaScript**: Well-documented functions with single responsibilities
- **Semantic HTML**: Accessible markup with proper ARIA labels
- **Optimized Assets**: Compressed images and efficient file structure

## Customization Guide

### Colors & Theming
The portfolio uses CSS custom properties for easy theme customization:

```css
:root {
    --bg-primary: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
    --text-primary: #ffffff;
    --border-color: rgba(255, 255, 255, 0.15);
    /* Add your custom colors here */
}
```

### Project Cards
Add new projects by duplicating the project card structure in `index.html`:

```html
<div class="character-card" data-character="4">
    <!-- Your project content -->
</div>
```

### Timeline Milestones
Extend the timeline by adding new milestone sections in the RPG timeline area.

## 🌐 Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 60+     | ✅ Full Support |
| Firefox | 55+     | ✅ Full Support |
| Safari  | 12+     | ✅ Full Support |
| Edge    | 79+     | ✅ Full Support |

## Mobile Experience

- **Touch-Optimized**: All interactions work seamlessly on touch devices
- **Instant Loading**: No fade animations on mobile - all content appears immediately
- **Zero Visibility Issues**: All projects and sections visible without delays
- **Responsive Grid**: Automatic layout adjustments for all screen sizes
- **Mobile Navigation**: Intuitive hamburger menu with smooth animations
- **Performance**: Optimized for mobile performance and battery life
- **Immediate Visibility**: Disabled JavaScript animation delays for instant content display

## Development Notes

### Code Quality
- **ESLint Ready**: Code follows modern JavaScript standards
- **CSS Organization**: Structured with clear section headers and comments
- **Documentation**: Comprehensive comments explaining complex functionality
- **Maintainability**: Modular structure for easy updates and extensions

### Future Enhancements
- [ ] Progressive Web App (PWA) features
- [ ] Advanced accessibility improvements
- [ ] Additional animation presets
- [ ] CMS integration for dynamic content

## Documentation

- **[TEMPLATE.md](docs/TEMPLATE.md)**: Reusable component documentation
- **[Development Guide](docs/README.md)**: Detailed technical documentation

## Key Achievements

- ⚡ **Performance**: 90+ Lighthouse score across all metrics
- 🎨 **Design**: Game-inspired interface with professional polish
- 📱 **Responsive**: Flawless experience across all device types
- ♿ **Accessible**: Semantic HTML with proper navigation support
- 🔧 **Maintainable**: Clean, documented code for easy modifications

## 👨‍💻 About Victor Tabuni

Senior in Computer Information Systems at Western Michigan University, graduating Spring 2026. Passionate about software development, game design, and creating meaningful user experiences.

**Skills**: Python, JavaScript, Java, HTML, CSS, SQL, Unity, React

**Studio**: Founder of [Cipher Studio](https://rfldn0.github.io/Cipher_Studio/) - Indie game development focused on wellness-centered adventures

## Contact

- **Email**: [tabunivictorr@gmail.com](mailto:tabunivictorr@gmail.com)
- **LinkedIn**: [Victor Rifaldino Tabuni](https://linkedin.com/in/victor-rifaldino-tabuni-14856628b/)
- **GitHub**: [rfldn0](https://github.com/rfldn0)
- **Studio**: [Cipher Studio](https://rfldn0.github.io/Cipher_Studio/)

---

<div align="center">

**Built with passion by Victor Tabuni**

*"Creating digital experiences that blend technology, creativity, and meaningful interaction"*

</div>
