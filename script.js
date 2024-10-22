// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', () => {
            navLinks.classList.toggle('show-mobile-menu');
        });
    }

    // Smooth