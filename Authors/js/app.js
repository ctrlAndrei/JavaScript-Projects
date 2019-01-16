const first = document.querySelector('#first');
const second = document.querySelector('#second');

for (let i = 0; i < 11; i++){
    (i < 6)? generateImage(first) : generateImage(second);
}

function generateImage(parent){
    fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then (res => {
        let div = document.createElement('div');
        let img = document.createElement('img');
        let label = document.createElement('label');
        label.innerHTML = res.results[0].name.first + ' ' + res.results[0].name.last;
        img.src = res.results[0].picture.large;
        img.style.borderRadius = '15px'
        div.classList.add('col-sm-2');
        div.appendChild(img);
        div.appendChild(label);
        parent.appendChild(div);
        console.log(res.results[0].picture.large);
    })
}
