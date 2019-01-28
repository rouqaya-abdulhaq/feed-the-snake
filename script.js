let snake = document.querySelector("#snake");
let food = document.querySelector("#food");
let playfield = document.querySelector("#play-field");
let startButton = document.querySelector("#start");
let positionX = 0 ;
let positionY = 0;
let operators = ["+","-","*"];
let gamePlay = document.querySelector("#game-play");
let proplem = document.querySelector("#question");




const positionFood =()=>{
    foodPosX = Math.floor(Math.random()*playfield.offsetWidth);
    foodPosY = Math.floor(Math.random()*playfield.offsetHeight);
    food.style.left = foodPosX + "px";
    food.style.top = foodPosY + "px";
}
//creates a random mathmatical proplem _[+,-,*] only_. 
const randomProplem =()=>{
	let num1 = Math.floor(Math.random()*10);
    let num2 = Math.floor(Math.random()*10);
    let operator = operators[Math.floor(Math.random()*operators.length)];
    let proplem = num1+operator+num2;
    return proplem; 
}
//you need to update this variable once the correct food is reached 
let question = randomProplem();

//displays the question
const startQuestion =(question)=>{
	proplem.innerText = question;
}
//takes a question as a pramater in string format and returns the correct answer
//designed to go into the food
const validate =(question)=>{
			return eval(question);
		}


//movment functions are working properly
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

//should respond to the event of the controls keydown
const play = (event)=>{
        let keyCode = event.which;
        switch (keyCode){
        	case 39:
        	moveRight();
        	break;

        	case 37:
        	moveLeft();
        	break;

        	case 38:
        	moveUp();
        	break;

        	case 40:
        	moveDown();
        	break;
        }
	}
const evehand =(event)=>{
    alert(event.which);
}
positionFood();
startButton.addEventListener("click",()=>{startQuestion(question);});
//the event has a wierd behavior sometime it works and often refreshes the page
//the event is not responding
document.body.addEventListener("keydown",evehand);














