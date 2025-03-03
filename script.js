// Change navbar on scroll
window.addEventListener('scroll', () => {
    document.querySelector('.navbar').classList.toggle('navbar-scrolled', window.scrollY > 50);
});

// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
