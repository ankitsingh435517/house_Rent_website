let hamburger = document.querySelector('.hamburger');
let nav_links = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    nav_links.classList.toggle('show');
})