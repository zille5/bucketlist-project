
// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const closeMenu = document.getElementById('closeMenu');
const overlay = document.getElementById('overlay');

mobileMenuBtn.addEventListener('click', () => {
mobileNav.classList.add('active');
overlay.classList.add('active');
document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
mobileNav.classList.remove('active');
overlay.classList.remove('active');
document.body.style.overflow = 'auto';
});

overlay.addEventListener('click', () => {
mobileNav.classList.remove('active');
overlay.classList.remove('active');
document.body.style.overflow = 'auto';
});

// Auto Scroll Testimonials
const testimonialSlider = document.querySelector('.testimonial-slider');
let scrollAmount = 0;
const testimonialWidth = 330; // width + gap

function autoScroll() {
scrollAmount += 1;
if (scrollAmount >= testimonialSlider.scrollWidth - testimonialSlider.clientWidth) {
scrollAmount = 0;
}
testimonialSlider.scrollTo(scrollAmount, 0);
setTimeout(autoScroll, 20);
}

// Start auto scroll after a delay
setTimeout(() => {
autoScroll();
}, 2000);

// Feature animation on scroll
const featureCards = document.querySelectorAll('.feature-card');

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0)';
}
});
}, { threshold: 0.1 });

featureCards.forEach(card => {
card.style.opacity = 0;
card.style.transform = 'translateY(20px)';
card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
observer.observe(card);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;

const targetElement = document.querySelector(targetId);
if (targetElement) {
    window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
    });
}

// Close mobile menu if open
if (mobileNav.classList.contains('active')) {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}
});
});

