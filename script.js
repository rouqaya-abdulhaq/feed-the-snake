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
let gamePlay = document.querySelector("#game-play");
let proplem = document.querySelector("#question");
let input = document.querySelector("#answer");

const positionFood =()=>{
    foodPosX = Math.random()*playfield.offsetWidth;
    foodPosY = Math.random()*playfield.offsetHeight;
    food.style.left = foodPosX + "px";
    food.style.top = foodPosY + "px";
}
//creates a random mathmatical proplem _[+,-,*] only_. 
const randomProplem =()=>{
	let num1 = Math.floor(Math.random()*256);
    let num2 = Math.floor(Math.random()*256);
    let operator = operators[Math.floor(Math.random()*operators.length)];
    let proplem = num1+operator+num2;
    return proplem; 
}
const validate =(proplem)=>{
	if(event.keyCode===13){
		if(input.value.length>0 &&!isNaN(input.value)){
			return(eval(proplem)==input.value);
		}}
}
const startQuestion =()=>{
	let question = randomProplem();
	proplem.innerText = question;
}
const getAnswer =()=>{
	input.addEventListener("keypress",()=>{validate(proplem.innerText);});
}
const moveLeft =()=>{
	startQuestion();
	if(positionX>0){
	positionX-=1;
	snake.style.left = positionX + "em";}
}
const moveRight =()=> {
	startQuestion();
	    if(positionX<playfield.offsetWidth){ 
		positionX += 1 ;
		snake.style.left = positionX +"em";}
}
const moveUp =()=>{
	startQuestion();
	if(positionY>0){
	positionY -= 1;
	snake.style.top = positionY + "em";} 
}
const moveDown = ()=>{
	startQuestion();
	if(positionY<playfield.offsetHeight){
	positionY += 1;
	snake.style.top = positionY + "em";}
}


positionFood();
buttonUp.addEventListener("click",moveUp);
buttonLeft.addEventListener("click",moveLeft);
buttonDown.addEventListener("click",moveDown);
buttonRight.addEventListener("click",moveRight);













