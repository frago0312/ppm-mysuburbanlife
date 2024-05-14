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


// Seleziona l'immagine
const image = document.getElementById('responsive-logo');

// Funzione per cambiare l'immagine
function changeImage() {
    if (window.innerWidth < 600) {
        // Se la larghezza della finestra è inferiore a 600px, cambia l'immagine
        image.src = 'https://placehold.co/175x30/162B75/D99814?text=SHAW+LOCAL';
        image.alt = 'News Network 2';
    } else {
        // Altrimenti, reimposta l'immagine originale
        image.src = 'https://placehold.co/390x32/162B75/D99814?text=SHAW+LOCAL+News+Network';
        image.alt = 'News Network 1';
    }
}

// Chiama la funzione per cambiare l'immagine quando la finestra viene ridimensionata
window.addEventListener('resize', changeImage);

// Chiama la funzione all'avvio per controllare la dimensione iniziale della finestra
changeImage();



