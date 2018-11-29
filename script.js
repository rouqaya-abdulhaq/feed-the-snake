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
let inputValue;
let direction ="";


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
//displays the question
const startQuestion =()=>{
	let question = randomProplem();
	proplem.innerText = question;
}
const validate =(question)=>{
			return eval(question) == input.value;
		}


const pressLeft =()=>{
    startQuestion();
    direction = "left";
}
const pressRight=()=>{
	startQuestion();
	direction = "right";
}
const pressUp=()=>{
	startQuestion();
	direction = "up";
}
const pressDown=()=>{
	startQuestion();
	direction = "down";
}


const moveLeft =()=>{
	if(positionX>0){
	positionX-=1;
	snake.style.left = positionX + "em";}
}
//there is something wrong with the first condition 
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


const play = (event)=>{
	if(event.keyCode===13){
		if(input.value.length>0 &&!isNaN(input.value)){
			if(validate(proplem.innerText,event)===true){
        switch (direction){
        	case "up":
        	moveUp();
        	break;

        	case "left":
        	moveLeft();
        	break;

        	case "down":
        	moveDown();
        	break;

        	case "right":
        	moveRight();
        	break;
        }
	}
		}
	}
}

positionFood();
buttonUp.addEventListener("click",pressUp);
buttonLeft.addEventListener("click",pressLeft);
buttonDown.addEventListener("click",pressDown);
buttonRight.addEventListener("click",pressRight);
input.addEventListener("keypress",play);














