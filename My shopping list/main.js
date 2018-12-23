const add=document.getElementById('add');
const input = document.getElementById('input');
const pater = document.getElementById('pater');
const fin = document.getElementById('final');

add.addEventListener('click',addElement);
input.addEventListener('keypress',function(ev){
        if (ev.key==="Enter"){
        addElement();
        }
})

function addElement(){
    var li = document.createElement('li');
    var del = document.createElement('button');
    var edit = document.createElement('button');
    var submit = document.createElement('button');

    if (input.value===""){
        return;
    }
    li.innerText = input.value;
    del.innerText = 'delete';
    del.addEventListener('click',function(){
        delElement(del);
    })
    pater.appendChild(li);
    pater.appendChild(del);
    pater.appendChild(edit);
    edit.innerText = "edit";
    submit.innerText="submit";
    edit.addEventListener('click',function(){
        submit.hidden=true;
        li.innerHTML='<input value="'+li.innerText+'">';
        li.addEventListener('keypress',function(ev){
            if (ev.key==="Enter"){
                li.innerHTML=li.children[0].value;
                submit.hidden=false;
            }
        })
    })
    submit.addEventListener('click',function(){
        var add = document.createElement('li');
        add.innerText=li.innerText;
        final.appendChild(add);
        delElement(del);
    })
    pater.appendChild(submit);
}

function delElement(d){
    d.parentNode.removeChild(d.previousElementSibling);
    d.parentNode.removeChild(d.nextElementSibling);
    d.parentNode.removeChild(d.nextElementSibling);
    d.parentNode.removeChild(d);
}