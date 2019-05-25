//NOTES
/*1- MOSTLY EVERY THING NEEDS RENAMING
2- BREAK THE BIG FUNCTIONS TO SMALLER ONES
3- FIND A BETTER WAY TO POSITION AND CHECK FOR COLLISION. THE CURRENT WAY HAS SOME STRNAGE 
BEHAVIOUR ESPICIALLY IN Y
4- RETHINK THIS APPROACH TO THE APPLICATION IN GENERAL AND FIND A BETTER WAY TO HANDLE THE
GAME*/ 

let snake = document.querySelector("#snake");
let playfield = document.querySelector("#play-field");
let startButton = document.querySelector("#start");
//NAME THIS SNAKE POSITIONS
let positionX = 0 ;
let positionY = 0;
let operators = ["+","-","*"];
let gamePlay = document.querySelector("#game-play");
let proplem = document.querySelector("#question");
let score = document.querySelector("#score");
let correctFoodPosX;
let correctFoodPosY;
let falseFoodPosX;
let falseFoodPosY;
let scoreValue = 0;


//BREAK TO SMALLER FUNCTIONS
//creates the food and positiones it
const createFood = (value ,state)=>{
	let food = document.createElement("div");
	let textValue = document.createTextNode(value);
	food.appendChild(textValue);
	food.classList.add("food");
	playfield.appendChild(food);
	positionFood(food,state);
}

//BREAK TO SMALLER FUNCTIONS
//THE FOOD IS SOMETIMES POSITIONED INSIDE THE PLAYFIELD DUE TO USING VW AND VH SO FIX THAT
const positionFood =(food , state)=>{
	if(state === "correct"){
	    correctFoodPosX = Math.floor(Math.random()*95);
	    correctFoodPosY = Math.floor(Math.random()*55);
	    food.style.left = correctFoodPosX + "vw";
		food.style.top = correctFoodPosY + "vh";
		food.setAttribute("id","correct");}
    else if (state === "false"){
    	falseFoodPosX = Math.floor(Math.random()*95);
		falseFoodPosY = Math.floor(Math.random()*55);
		console.log(falseFoodPosY);
	    food.style.left = falseFoodPosX + "vw";
		food.style.top = falseFoodPosY + "vh";
		food.setAttribute("id","false");
    }
}

const removeFood = ()=>{
	let correctFood = document.querySelector("#correct");
	let falseFood = document.querySelector("#false");
	playfield.removeChild(correctFood);
	playfield.removeChild(falseFood);
	askAndAnswers();
}

//takes a question as a pramater in string format and returns the correct answer
//designed to go into the food
//RENAME 
const correctValue =(question)=>{
			return eval(question);
		}
//passed for the other food
//RENAME
const falseValue = ()=>{
	return Math.floor(Math.random()*100);
}


//creates a random mathmatical proplem _[+,-,*] only_. 
const randomProplem =()=>{
	let num1 = Math.floor(Math.random()*10);
    let num2 = Math.floor(Math.random()*10);
    let operator = operators[Math.floor(Math.random()*operators.length)];
    let proplem = num1+operator+num2;
    return proplem; 
}

//FIND A BETTER WAY TO UPDATE THIS VARIABLE IT'S REPEATING THE FIRST QUESTION TWICE 
let question = randomProplem();


const startQuestion =(question)=>{
	proplem.innerText = question;
}


//movment functions are working properly
const moveLeft =()=>{
	if(positionX>0){
	positionX-=1;
	snake.style.left = positionX + "vw";}
}

//by subtracting the width of the snake the 
//collision with the wall should be at about 97
//chose 96 for styling purposes
const moveRight =()=> {
	    if(positionX<96){ 
		positionX += 1 ;
		snake.style.left = positionX +"vw";}
}
const moveUp =()=>{
	if(positionY>0){
	positionY -= 1;
	snake.style.top = positionY + "vh";} 
}
//by subtracting the width of the snake the 
//collision with the wall should be at about 48.5
//may change these numbers in the future
const moveDown = ()=>{
	if(positionY<57){
	positionY += 1;
	snake.style.top = positionY + "vh";}
}


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
        collisionCheck();
	}

/*THE HORIZONTAL COLLISION IS NOT WORKING 
STRANGE BEHAVIOUR IN THE HORIZON POSITIONING AND THE COLLISION */
//3 to add to the width of the snake and 2 to the width of the food
const colisionX = (foodPosX)=>{
	if(positionX +3 >= foodPosX && positionX <= foodPosX+2){
		return true;
	}
}
//3 to add to the height of the snake and 4 to the height of the food
		const colisionY =(foodPosY)=>{
	if(positionY  >= foodPosY && positionY - 4 <= foodPosY ){
		return true;
	}
}

const collisionCheck = ()=>{
	if (colisionX(correctFoodPosX)&&colisionY(correctFoodPosY)){
		addScore();
		removeFood();
		question = randomProplem();
	}
	if(colisionX(falseFoodPosX)&&colisionY(falseFoodPosY)){
		deleteScore();
		removeFood();
		question = randomProplem();
	}

}
	
const addScore =()=>{
	score.innerText = scoreValue+=10; 
}
const deleteScore =()=>{
	score.innerText = scoreValue-=10; 
}

//to display the question and the answers
const askAndAnswers = ()=>{
	startQuestion(question);
	createFood(correctValue(question),"correct");
	createFood(falseValue(),"false");
}


const play = ()=>{
	askAndAnswers();
	gamePlay.removeChild(startButton);
}

startButton.addEventListener("click",play);
//the event is working in chrome but not in IE
document.body.addEventListener("keydown",move);














