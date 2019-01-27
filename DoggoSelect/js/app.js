/**
 * Endpoint-uri Dog API:
 * imagine random: https://dog.ceo/api/breeds/image/random
 * toate rasele: https://dog.ceo/api/breeds/list
 * imagine random dintr-o rasa anume: https://dog.ceo/api/breed/{hound}/images/random
 */

// ------------------------------------------
//  Referinte la Elementele HTML pe care le vom folosi in cod
// ------------------------------------------
const name = document.getElementById('name');
const comment = document.getElementById('comment');

const select = document.getElementById('breeds');
const card = document.querySelector('.card'); 
const form = document.querySelector('form');
const img = document.createElement('img');

// ------------------------------------------
//  FETCH FUNCTIONS
// ------------------------------------------

// generateImage('https://dog.ceo/api/breeds/image/random');
// generateOptions();

function generateImage(str){
    // fetch(str)
    // .then(response => response.json())
    fetchData(str)
    .then(data => {
        img.src = data.message;
        img.alt = select.value;
        img.title = select.value;
        card.appendChild(img);
    })
}

function generateOptions(){
// fetch('https://dog.ceo/api/breeds/list')
// .then(response => response.json())
fetchData('https://dog.ceo/api/breeds/list')
.then(data => {
    var arr = data.message;
    arr.forEach(el => {
        let op = document.createElement('option');
        op.innerText = el;
        op.value = el;
        select.appendChild(op);
    });
})}

// PAS 2: obtine o imagine random (https://dog.ceo/api/breeds/image/random) 
// Apeleaza functia generateImage(), care afiseaza raspunsul in <div>  
function fetchData(url){
    return fetch(url)
           .then(response => response.json())
 }


// PAS 3: obtine o lista de rase de caini (https://dog.ceo/api/breeds/list)
// Apeleaza functia generateOptions(), care afiseaza raspunsul in <select> 
Promise.all([fetchData('https://dog.ceo/api/breeds/image/random'),
fetchData('https://dog.ceo/api/breeds/list')])
.then (() =>{
        generateImage('https://dog.ceo/api/breeds/image/random');
        generateOptions();
})

// ------------------------------------------
//  EVENT LISTENERS
// ------------------------------------------

select.addEventListener('change',()=>{
    generateImage('https://dog.ceo/api/breed/' + select.value + '/images/random')
})

card.addEventListener('click',()=>{
    generateImage('https://dog.ceo/api/breed/' + select.value + '/images/random')
})
// PAS 4: la schimbarea optiunii din <select> afiseaza o imagine din rasa selectata

// PAS 5: la click in interiorul <div>-ului afiseaza alta imagine din rasa selectata

// PAS 6: Creati o functie fetchData(url) care sa automatizeze primii doi pasi dintr-un request 
// (trimiterea request-ului si parsarea raspunsului JSON)


// PAS 7 - atasati cu metoda .catch() un handler care sa afiseze in consola un mesaj custom de eroare 
// si eroarea primita de la server. Ca sa va asigurati ca functioneaza, schimbati url-ul catre care
// trimiteti request-ul cu unul gresit.


// PAS 8 - integrati primele doua comenzi .fetch() intr-o singura comanda Promise.all()



// ------------------------------------------
//  POST DATA
// ------------------------------------------



// PAS 9 - Transmiteti datele completate in formular printr-un request POST, catre https://jsonplaceholder.typicode.com/posts 
// Printati in consola raspunsul primit de la server, impreuna cu un mesaj custom.  

submit.addEventListener('click',(ev)=>{
    ev.preventDefault();
    let form = document.querySelector('form');
    let formData = new FormData(form);
    fetch('https://jsonplaceholder.typicode.com/posts',{method: 'POST',
    headers:{"Content-Type": "multipart/form-data "},
    body: formData
})
    .then(res=>res.json())
    .then(data => console.log(data))
})
// ------------------------------------------
//  HELPER FUNCTIONS
// ------------------------------------------

// generateImage(src, alt)
// Functie custom, care afiseaza o imagine in interiorul <div>-ului  


// generateOptions(data)
// Functie custom, care completeaza optiunile din <select>


