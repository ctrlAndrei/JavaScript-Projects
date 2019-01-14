const pater = document.getElementById('pater');

for (let i = 0; i < 6; i++){
    fetch('https://randomuser.me/api/')
    .then( res => res.json())
    .then (res => {
        let img = document.createElement('img');
        let label = document.createElement('label');
        label.innerHTML = res.results[0].name.first + ' ' + res.results[0].name.last;
        img.src = res.results[0].picture.large;
        pater.appendChild(label);
        pater.appendChild(img);
        console.log(res.results[0].picture.large);
    })
}
