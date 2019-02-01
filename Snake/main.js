const h1 = document.getElementById('h1');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = 700;
let height = canvas.height = 400 ;
canvas.style = 'border: 1px solid black';
let score = 0;
let tail = [];
let direction = 'right';

let snake = {
    x:15,
    y:15,
    pastX:0,
    pastY:0,
    up:()=>{snake.y-=2},
    down:()=>{snake.y+=2},
    right:()=>{snake.x+=2},
    left:()=>{snake.x-=2},
    direction:(str)=>{snake[str]()}
}

function chunk (x,y){
    this.x=x;
    this.y=y;
    this.pastX = 0;
    this.pastY = 0;
}

let food = {
    x:60,
    y:60
}

function draw(){
    let x = snake.x;
    let y = snake.y;
    snake.pastX = x;
    snake.pastY = y;
    ctx.clearRect(x,y,15,15);
    ctx.fillStyle = 'black';
    if (tail.length != 0){
        ctx.clearRect(tail[0].pastX,tail[0].pastY,15,15);
        ctx.fillRect(tail[0].x,tail[0].y,15,15);
        tail[0].pastX = tail[0].x;
        tail[0].pastY = tail[0].y;
        tail[0].x=x;
        tail[0].y=y;
    }

    if (tail.length > 1){
        for (let i = 1; i<tail.length; i++){
            ctx.clearRect(tail[i].pastX,tail[i].pastY,15,15);
        ctx.fillRect(tail[i].x,tail[i].y,15,15);
        tail[i].pastX = tail[i].x;
        tail[i].pastY = tail[i].y;
        tail[i].x=tail[i-1].pastX;
        tail[i].y=tail[i-1].pastY;
        }
    }
    snake.direction(direction);
    ctx.fillRect(snake.x,snake.y,15,15);
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x,food.y,15,15);
    if (snake.x === canvas.width - 15 || snake.y === canvas.height-15 || snake.x < 0 || snake.y < 0)
    {alert('Game over'); return;}
    if (Math.abs(snake.x - food.x) <= 13 && Math.abs(snake.y - food.y) <= 13){
        score++;
        h1.innerText = `Score: ${score}`;
        ctx.clearRect(food.x,food.y,15,15);
        food.x = Math.floor(Math.random() * (canvas.width - 50));
        food.y = Math.floor(Math.random() * (canvas.height - 50));
        if(tail.length === 0){
        tail.push(new chunk(x,y));
        }
        else{
            tail.push(new chunk(tail[tail.length-1].pastX,tail[tail.length-1].pastY))
        }
    }
    
    
    requestAnimationFrame(draw);
}

window.addEventListener('keydown',(ev)=>{
   
      if(ev.keyCode=== 38){console.log('up');
    if (direction !== 'down')
    direction = 'up';
    }
      
      if(ev.keyCode=== 40){
          console.log('down'); 
          if (direction !== 'up')
        direction = 'down';
    }
      
      if(ev.keyCode=== 37){console.log('left'); 
      if (direction !== 'right')
    direction = 'left';
    }
     
      if(ev.keyCode=== 39){console.log('right'); 
      if (direction !== 'left')
    direction = 'right';
    }
})

requestAnimationFrame(draw);