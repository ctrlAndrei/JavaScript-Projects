let categories = [];
const buttons = document.getElementById('buttons');
const images = Array.from(document.querySelectorAll('.images'));
const select = document.getElementById('select')
const img = document.getElementById('img');


fetch('https://api.thecatapi.com/v1/images/search',{headers:{"x-api-key":"8591a1f5-4714-4357-bff7-25f82e06dab8"}})
.then(res => res.json())
.then(data =>{
    img.src = data[0].url;
})

fetch('https://api.thecatapi.com/v1/breeds',{headers:{"x-api-key":"8591a1f5-4714-4357-bff7-25f82e06dab8"}})
.then(res => res.json())
.then(data =>{
    data.forEach(el=>{
        let breed = document.createElement('option');
        breed.value = el.name;
        breed.innerText = el.name;
        breed.id = el.id;
        select.appendChild(breed);
    })
})

img.addEventListener('click',()=>changeImage());
select.addEventListener('change',()=>changeImage());

function changeImage(){
    fetch('https://api.thecatapi.com/v1/images/search?breed_id='+select.options[select.selectedIndex].id,{headers:{"x-api-key":"8591a1f5-4714-4357-bff7-25f82e06dab8"}})
    .then(res=>res.json())
    .then(data=>{
        img.src=data[0].url;
    })
}

//category buttons

fetch('https://api.thecatapi.com/v1/categories')
.then(res=>res.json())
.then(data=>{
    data.forEach(el=>{
        let button = document.createElement('button');
        button.innerText = el.name;
        button.id = el.id;
        button.classList.add('mr-2');
        button.classList.add('btn');
        button.classList.add('btn-warning');
        buttons.appendChild(button);
        categories.push(button);
    })
   
    console.log(categories)
    categories.forEach(el=>{
        el.addEventListener('click',()=>{
            for(let i = 0; i < 3; i++){
            fetch('https://api.thecatapi.com/v1/images/search?category_ids='+el.id,{headers:{"x-api-key":"8591a1f5-4714-4357-bff7-25f82e06dab8"}})
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                images[i].src=data[0].url;
            })
         } })
    })
})

