let snake = document.querySelector("#snake");
let food = document.querySelector("#food");
let playfield = document.querySelector("#play-field");
let buttonUp = document.querySelector("#up");
let buttonLeft = document.querySelector("#left");
let buttonDown = document.querySelector("#down");
let buttonRight = document.querySelector("#right");
let controls = document.querySelectorAll(".controls");
let positionX = 0 ;
let positionY = 0;
let operators = ["+","-","*"];


const positionFood =()=>{
    foodPosX = Math.random()*playfield.offsetWidth;
    foodPosY = Math.random()*playfield.offsetHeight;
    food.style.left = foodPosX + "px";
    food.style.top = foodPosY + "px";
}
const moveLeft =()=>{
	if(positionX>0){
	positionX-=1;
	snake.style.left = positionX + "em";} 
}
const moveRight =()=> {
    if(positionX<playfield.offsetWidth){ 
	positionX += 1 ;
	snake.style.left = positionX +"em";}
}
const moveUp =()=>{
	if(positionY>0){
	positionY -= 1;
	snake.style.top = positionY + "em";} 
}
const moveDown = ()=>{
	if(positionY<playfield.offsetHeight){
	positionY += 1;
	snake.style.top = positionY + "em";}
}
const randomProplem =()=>{
	let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let operator = operators[Math.floor(Math.random()*operators.length)];
    let proplem = num1+operator+num2;
    return proplem; 
}

positionFood();
buttonUp.addEventListener("click",moveUp);
buttonLeft.addEventListener("click",moveLeft);
buttonDown.addEventListener("click",moveDown);
buttonRight.addEventListener("click",moveRight);












