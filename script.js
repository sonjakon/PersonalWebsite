document.addEventListener('DOMContentLoaded', function () {
    var menuIcon = document.getElementById('menuIcon');
    var navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.style.display = (navLinks.style.display === 'block') ? 'none' : 'block';
    });
});