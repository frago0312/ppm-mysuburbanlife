/*Gestione eventi navbar*/

document.getElementById('search-btn').addEventListener('click', function(event) {
    var searchBar = document.getElementById('search-bar');
    if (searchBar.style.display === 'none') {
        searchBar.style.display = 'block';
    } else {
        window.location.href = 'index.html';
    }
    event.stopPropagation();
});

document.addEventListener('click', function(event) {
    var searchBar = document.getElementById('search-bar');
    if (event.target !== searchBar) {
        searchBar.style.display = 'none';
    }
});

/* Gestione eventi per il pulsante del menu */
document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('overlay');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
    } else {
        menu.classList.add('show');
        overlay.classList.add('show');
    }
});

/* Gestione eventi per l'overlay */
document.getElementById('overlay').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('overlay');
    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        overlay.classList.remove('show');
    }
});

// Seleziona l'icona di ricerca
var searchIcon = document.querySelector('.search-btn .bi');

// Aggiungi un gestore di eventi click
searchIcon.addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.querySelector('#bottom-element .close-btn').addEventListener('click', function() {
    document.getElementById('bottom-element').style.display = 'none';
});

function formatDate() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const currentDate = new Date();
    const month = months[currentDate.getMonth()];
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    return `${month} ${day}, ${year}`;
}
const currentDateElement = document.getElementById("currentDate");
currentDateElement.textContent = formatDate();






