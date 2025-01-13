function toggleMenu() {
 const menu = document.querySelector(".menu-links")
 const icon = document.querySelector(".hamburger-icon")
 menu.classList.toggle("open")
 icon.classList.toggle("open")
}
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const menuLinks = document.querySelector(".menu-links");

    // Aggiunge un listener al clic sull'icona dell'hamburger
    hamburgerIcon.addEventListener("click", function () {
        // Alterna la classe "open" per mostrare/nascondere il menu
        menuLinks.classList.toggle("open");
        hamburgerIcon.classList.toggle("open");
    });
});

document.getElementById('downloadCV').onclick = function() {
    window.open('./assets/pdf/CV-Antonio.pdf', '_blank');
};

document.getElementById('contactInfo').onclick = function() {
    location.href = '#contact';
};

document.getElementById('linkedinProfile').onclick = function() {
    window.open('https://linkedin.com/in/antonio-d-addio-a09b61257/', '_blank');
};

document.getElementById('linkedinProfile').onclick = function() {
    window.open('https://linkedin.com/in/antonio-d-addio-a09b61257/', '_blank');
};

document.getElementById('githubProfile').onclick = function() {
    window.open('https://github.com/AntoUXUI', '_blank');
};