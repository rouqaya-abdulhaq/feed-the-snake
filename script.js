let snake = document.querySelector("#snake");
let playfield = document.querySelector("#play-field");
let startButton = document.querySelector("#start");
let positionX = 0 ;
let positionY = 0;
let operators = ["+","-","*"];
let gamePlay = document.querySelector("#game-play");
let proplem = document.querySelector("#question");

//creates the food and positiones it
const createFood = (value)=>{
	let food = document.createElement("div");
	let textValue = document.createTextNode(value);
	food.appendChild(textValue);
	food.classList.add("food");
	playfield.appendChild(food);
	positionFood(food);
}


const positionFood =(food)=>{
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
const move = (event)=>{
        let keyCode = event.keyCode;
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
//in theory this is supposed to start the game display the question 
//and place the food
//i should remove the event listener after the game is started 
//and create a new food that has the false value	
const play = ()=>{
	startQuestion(question);
	createFood(validate(question));
	createFood(20);
}

startButton.addEventListener("click",play);
//the event is working in chrome but not in IE
document.body.addEventListener("keydown",move);














