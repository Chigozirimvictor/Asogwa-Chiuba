document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Handle scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
     // Mobile menu toggle
    mobileToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });
    
     // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.className = 'fas fa-bars';
        });
    });
     // Typing animation
    const typingText = document.getElementById('typing-text');
    const phrases = [
        'Full-Stack Developer',
        'Data Analytics Expert',
        'Network Engineer',
        'Problem Solver',
        'Java Developer',
        'Flutter Developer'
    ];
    
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const current = phrases[currentPhrase];
        
        if (isDeleting) {
            typingText.textContent = current.substring(0, currentChar - 1);
            currentChar--;
        } else {
            typingText.textContent = current.substring(0, currentChar + 1);
            currentChar++;
        }
        
        let typeSpeed = 100;
        
        if (isDeleting) {
            typeSpeed = 50;
        }
        
        if (!isDeleting && currentChar === current.length) {
            typeSpeed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typeSpeed = 500; // Pause before next phrase
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    // Start typing animation
    typeEffect();
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    


    window.onbeforeunload = () => {
  for(const form of document.getElementById('contact-form')) {
    form.reset();
  }
}

   
    // Form submission
    // const contactForm = document.getElementById('contact-form');
    // contactForm.addEventListener('submit', function(e) {
    //     e.preventDefault();
        
        // Get form data
    //     const formData = new FormData(contactForm);
    //     const name = formData.get('name');
    //     const email = formData.get('email');
    //     const subject = formData.get('subject');
    //     const message = formData.get('message');
        
    //     Simple validation
    //     if (!name || !email || !subject || !message) {
    //         alert('Please fill in all fields');
    //         return;
    //     }
        
    //     // Email validation
    //     const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    //     if (!emailRegex.test(email)) {
    //         alert('Please enter a valid email address');
    //         return;
    //     }
        
    //     Simulate form submission
    //    ;
    //     contactForm.reset();
    // });
    
    
    // // Animate skill bars on scroll (only once)
    // function animateSkillBars() {
    //     const skillBars = document.querySelectorAll('.skill-progress:not(.animated)');
        
    //     skillBars.forEach(bar => {
    //         const rect = bar.getBoundingClientRect();
    //         const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
            
    //         if (isVisible) {
               
    //             bar.style.width = '0%';
    //             bar.classList.add('animated');
    //             setTimeout(() => {
    //                 bar.style.width = width;
    //             }, 100);
    //         }
    //     });
    // }
    
    // Scroll animations
       window.addEventListener('scroll', function() {
        animateSkillBars();
    });
    
    // Intersection Observer for fade-in animations
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
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.project-card, .skill-category');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    // Add slower fade-in animation to hero stats and tech badges
    const heroStats = document.querySelectorAll('.hero-stat, .tech-badge');
    heroStats.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(-20px)';
        stat.style.transition = 'opacity 15s ease, transform 5s ease';
        observer.observe(stat);
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
    });
    
    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to buttons
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s ease-out;
                background: rgba(255, 255, 255, 0.3);
                left: ${x}px;
                top: ${y}px;
                width: ${size}px;
                height: ${size}px;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add CSS for ripple animation
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
});

// Global smooth scroll function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Preloader (optional)
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll-heavy functions
window.addEventListener('scroll', throttle(function() {
    // Existing scroll functions here
}, 16)); // ~60fps
