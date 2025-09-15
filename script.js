// Navigation functionality with default home page
        document.addEventListener('DOMContentLoaded', function() {
            const navItems = document.querySelectorAll('.nav-item');
            const sections = document.querySelectorAll('.section');

            // Set home as default active section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById('home').classList.add('active');
            
            navItems.forEach(nav => nav.classList.remove('active'));
            document.querySelector('[data-section="home"]').classList.add('active');

            navItems.forEach(item => {
                item.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Remove active class from all nav items
                    navItems.forEach(nav => nav.classList.remove('active'));
                    
                    // Add active class to clicked item
                    this.classList.add('active');
                    
                    // Hide all sections
                    sections.forEach(section => section.classList.remove('active'));
                    
                    // Show target section
                    const targetSection = this.getAttribute('data-section');
                    document.getElementById(targetSection).classList.add('active');
                });
            });
        });

        // Theme toggle functionality
        function toggleTheme() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            const themeIcon = document.querySelector('.theme-toggle i');
            
            html.setAttribute('data-theme', newTheme);
            
            // Update icon
            if (newTheme === 'light') {
                themeIcon.className = 'fas fa-sun';
            } else {
                themeIcon.className = 'fas fa-moon';
            }
        }

        // Smooth animations on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all cards
        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.6s ease';
            observer.observe(card);
        });