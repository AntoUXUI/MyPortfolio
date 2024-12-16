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
