let snake = document.querySelector("#snake");
let playfield = document.querySelector("#playfield");
let buttonUp = document.querySelector("#up");
let buttonLeft = document.querySelector("#left");
let buttonDown = document.querySelector("#down");
let buttonRight = document.querySelector("#right");
let controls = document.querySelectorAll(".controls");
let positionX = 0 ;
let positionY = 0;
const getWidth =(element)=>{


}
const moveLeft =()=>{
	if(positionX>0){
	positionX-=10;
	snake.style.left = positionX + "px";} 
}
const moveRight =()=> {
    if(positionX<1000){ 
    	alert(positionX);
	positionX += 10 ;
	snake.style.left = positionX +"px";}
}
const moveUp =()=>{
	positionY -= 10;
	snake.style.top = positionY + "px"; 
}
const moveDown = ()=>{
	positionY += 10;
	snake.style.top = positionY + "px"; 
}

buttonUp.addEventListener("click",moveUp);
buttonLeft.addEventListener("click",moveLeft);
buttonDown.addEventListener("click",moveDown);
buttonRight.addEventListener("click",moveRight);









