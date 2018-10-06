let snake = document.querySelector("#snake");
let playfield = document.querySelector("#playfield");

const moveLeft =()=>{
	snake.style.right += 10 + "px"; 
}

const moveRight =()=> {
	snake.style.left += 10 + "px";
}


