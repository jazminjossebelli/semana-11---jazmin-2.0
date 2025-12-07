document.addEventListener('DOMContentLoaded', () => {

    const menuLinks = document.querySelectorAll('.nav-links a');
    const allSections = document.querySelectorAll('.content-box');

    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 

            const targetId = link.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            allSections.forEach(section => {
                section.classList.remove('active-section');
                setTimeout(() => {
                   section.classList.add('hidden'); 
                }, 100); 
            });

            menuLinks.forEach(l => l.classList.remove('active'));

            setTimeout(() => {
                targetSection.classList.remove('hidden');
                void targetSection.offsetWidth; 
                targetSection.classList.add('active-section');
            }, 100);
            
            link.classList.add('active');
            if (navLinks.classList.contains('nav-active')) {
                toggleMobileMenu();
            }
        });
    });

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    function toggleMobileMenu() {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle'); 
    }

    hamburger.addEventListener('click', toggleMobileMenu);

});