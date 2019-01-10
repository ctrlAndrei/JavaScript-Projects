const add=document.getElementById('add');
const input = document.getElementById('input');
const pater = document.getElementById('pater');
const fin = document.getElementById('final');

add.addEventListener('click',addElement);
input.addEventListener('keypress',function(ev){
        if (ev.key === "Enter"){
        addElement();
        }
})

function addElement(){
    var li = document.createElement('li');
    var del = document.createElement('button');
    var edit = document.createElement('button');
    var submit = document.createElement('button');
    var span = document.createElement('span');

    li.classList.add("mb-3");
    if (input.value === ""){
        return;
    }
    span.innerText = input.value;
    span.classList.add("mr-3");
    del.classList.add("mr-1");
    del.innerText = 'delete';
    del.addEventListener('click',function(){
        delElement(li);
    })
    edit.innerText = "edit";
    edit.classList.add("mr-1");
    submit.innerText = "submit";
    submit.classList.add("mr-1");
    edit.addEventListener('click',function(){
        submit.hidden = true;
        span.innerHTML = '<input value="'+span.innerText+'">';
        span.addEventListener('keypress',function(ev){
            if (ev.key === "Enter"){
                span.innerHTML=span.children[0].value;
                submit.hidden=false;
            }
        })
    })
    submit.addEventListener('click',function(){
        li.innerHTML = li.firstChild.innerText;
        li.className = "fin";
        fin.appendChild(li);
        let list = Array.from(document.getElementsByClassName('fin'));
        list.sort((a,b)=>{
            if (a.innerText > b.innerText){return 1};
            if (a.innerText < b.innerText){return -1};
            if (a.innerText === b.innerText){return 0};
        });
       
        list.forEach((el)=>{
            fin.appendChild(el);
        })
    })
    li.appendChild(span);
    li.appendChild(del);
    li.appendChild(edit);
    li.appendChild(submit);
    pater.appendChild(li);

    input.value = '';
}

function delElement(d){
    d.parentNode.removeChild(d);
}