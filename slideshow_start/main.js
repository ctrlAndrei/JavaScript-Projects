// sursa de date pe care o primim impreuna cu imaginile din directorul img
const images = [
    { "src": "img1.jpg", "alt": "1 Nature" },
    { "src": "img2.jpg", "alt": "2 Fjords" }, 
    { "src": "img3.jpg", "alt": "3 Mountains" },
    { "src": "img4.jpg", "alt": "4 Lights" }
];

//referinta elemente

const img = document.getElementById('slide');
const inainte = document.getElementById('inainte');
const inapoi = document.getElementById('inapoi');
const meniu = document.getElementById('meniu');
var index = 1;

for (var i=0; i<images.length; i++){
    console.log(images[i].src+' '+images[i].alt);
}

window.onload=showImage(1);

function showImage(i){
    img.src="img/" + images[i].src;
    img.alt="img/" + images[i].alt;
    img.title=images[i].alt;
}

inainte.addEventListener('click',()=>{
    (index<3) ? index++ : index=0;
    showImage(index);
    activ(document.querySelector("#biluta"+(index+1)));
})

inapoi.addEventListener('click',()=>{
    (index>0) ? index-- : index=3;
    showImage(index);
    activ(document.querySelector("#biluta"+(index+1)));
})

meniuBilute(images.length);

function meniuBilute(l){
    for(let i = 0; i < l; i++){
        let biluta = document.createElement('span');
        biluta.className="biluta"
        biluta.id="biluta"+(i+1);

        biluta.addEventListener('click',()=>{
            (index < 3) ? index++ : index=0;

            (index > 0) ? index-- : index=3;
            index = i;
            showImage(index);
            activ(document.querySelector("#biluta"+(index+1)));
        })
        meniu.appendChild(biluta);
    }

    document.querySelector('#biluta2').className+=" activ";
}

function activ(bil){
    let list = document.getElementsByTagName('span');
    for (var i =0 ; i<list.length;i++){
        (list[i].id!==bil.id) ? list[i].className="biluta" : list[i].className="biluta activ";
    }
}
