/* Hamburger Button */
function toggleMenu () {
    document.getElementById("primary-nav").classList.toggle("open");
    document.getElementById("hamburger-btn").classList.toggle("open");
    
}

const x = document.getElementById("hamburger-btn");
x.onclick = toggleMenu;