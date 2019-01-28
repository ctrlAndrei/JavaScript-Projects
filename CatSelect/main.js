let breeds = [];
let input = document.createElement('input');
const buttons = document.getElementById('buttons');
const images = Array.from(document.querySelectorAll('.images'));
const select = document.getElementById('select')
const img = document.getElementById('img');
const solo = document.getElementById('soloImg');

const configFetch = { headers: { "x-api-key": "8591a1f5-4714-4357-bff7-25f82e06dab8" }};

/**
 * Afiseaza o poza random
 */

fetch('https://api.thecatapi.com/v1/images/search', configFetch)
    .then(res => res.json())
    .then(data => {
        img.src = data[0].url;
    });

/**
 * Populeaza selectul de rase
 */

fetch('https://api.thecatapi.com/v1/breeds', configFetch)
    .then(res => res.json())
    .then(data => {
        data.forEach(el => {select.innerHTML += `<option value="${el.id}">${el.name}</option>`; breeds.push(el)})
    });

solo.addEventListener('click', ()=> {changeImage(select.value)});
select.addEventListener('change', ()=> {changeImage(select.value)});

function changeImage(breed = '') {
    console.log('https://api.thecatapi.com/v1/images/search?breed_id=' + breed);
    let url = 'https://api.thecatapi.com/v1/images/search?breed_id=' + breed;
    fetch(url, configFetch)
        .then(res => res.json())
        .then(data => {
            console.dir(data);
            img.src = data[0].url;
        })
}

//Populeaza category buttons

fetch('https://api.thecatapi.com/v1/categories')
    .then(res => res.json())
    .then(data => {
        data.forEach(el => {
            let button = document.createElement('button');
            button.innerText = el.name;
            button.id = el.id;
            button.classList.add('mr-2');
            button.classList.add('btn');
            button.classList.add('btn-warning');
            buttons.appendChild(button);
            button.addEventListener('click', (ev)=>{buttonEvent(ev.target.id)});
        })})
    .then(()=>{
        input.placeholder = 'breed search';
        buttons.appendChild(input);
    })

        gif.addEventListener('click',()=>{
            for(let i = 0; i < 6; i++){
                fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif', configFetch)
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    images[i].src=data[0].url;
                })
             }
        })



function buttonEvent(categ){
    for(let i = 0; i < 6; i++){
        fetch('https://api.thecatapi.com/v1/images/search?category_ids=' + categ, configFetch)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            images[i].src=data[0].url;
        })
     }
}

/**
 * Cod cat search
 */

// fetch('https://api.thecatapi.com/v1/breeds')
// .then(res => res.json())
// .then(data =>{
//     data.forEach(el=>{
//         breeds.push(el);
//     })
    
// })

function showImage(index,id,title){
    fetch('https://api.thecatapi.com/v1/images/search?breed_id=' + id, configFetch)
    .then(res=>res.json())
    .then(data=>{
        images[index].src = data[0].url;
        images[index].title = title;
        images[index].style = "border-radius: 50px; max-block-size: 190px";
    })
}

function findBreeds(str){
    let arr = breeds.filter(el=>{
        return el.name.toLowerCase().includes(str);
    })
    return arr;
}

input.addEventListener('keyup',()=>{
    if (input.value.length >= 2){
        let search = findBreeds(input.value);
        console.log(search)
        let length = search.length;
        if (length > 6){length = 6}
        for (let i=0,  m = 0; i < length; i++){
            for(let j = 0; j < 6/length; j++, m++){
            showImage(m,search[i].id,search[i].name);
        }}
    }
})