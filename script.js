//NOTES
/*
1- BREAK THE BIG FUNCTIONS TO SMALLER ONES
2- FIND A BETTER WAY TO POSITION AND CHECK FOR COLLISION. THE CURRENT WAY HAS SOME STRNAGE 
BEHAVIOUR ESPICIALLY IN Y
3- RETHINK THIS APPROACH TO THE APPLICATION IN GENERAL AND FIND A BETTER WAY TO HANDLE THE
GAME
4- rearange the code in an order that would be easier to read*/ 

let snake = document.querySelector("#snake");
let playfield = document.querySelector("#play-field");
let startButton = document.querySelector("#start");
let snakePositionX = 0 ;
let snakePositionY = 0;
let operators = ["+","-","*"];
let btmDisplayScrn = document.querySelector("#btm-display-scrn");
let mthProplemDisplay = document.querySelector("#mth-proplem");
let scoreDisplay = document.querySelector("#score");
let correctFoodPosX;
let correctFoodPosY;
let falseFoodPosX;
let falseFoodPosY;
let scoreValue = 0;
let mthProplem;



const generateFood = (value ,state) =>{
	let food = createFoodElement(value);
	playfield.appendChild(food);
	positionFood(food,state);
}

const createFoodElement = (value)=>{
	let food = document.createElement("div");
	let textValue = document.createTextNode(value);
	food.appendChild(textValue);
	food.classList.add("food");
	return food;
}

//THE FOOD IS SOMETIMES POSITIONED INSIDE THE PLAYFIELD DUE TO USING VW AND VH SO FIX THAT
const positionFood =(food , answer)=>{
	if(answer === "correct"){
	    correctFoodPosX = Math.floor(Math.random()*95);
	    correctFoodPosY = Math.floor(Math.random()*55);
	    food.style.left = correctFoodPosX + "vw";
		food.style.top = correctFoodPosY + "vh";
		food.setAttribute("id","correct");}
	else if (answer === "false"){
		falseFoodPosX = Math.floor(Math.random()*95);
		falseFoodPosY = Math.floor(Math.random()*55);
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
	displayQustAndFood();
}


const correctFoodValue =(question)=>{
			return eval(question);
		}

const falseFoodValue = ()=>{
	return Math.floor(Math.random()*100);
}


//creates a random mathmatical proplem _[+,-,*] only_. 
const generateRandomProplem =()=>{
	let num1 = Math.floor(Math.random()*10);
    let num2 = Math.floor(Math.random()*10);
    let operator = operators[Math.floor(Math.random()*operators.length)];
    let proplem = num1+operator+num2;
    return proplem; 
}

//FIND A BETTER WAY TO UPDATE THIS VARIABLE IT'S REPEATING THE FIRST QUESTION TWICE 
mthProplem = generateRandomProplem();


const displayQuestion =(question)=>{
	mthProplemDisplay.innerText = question;
}


//movment functions are working properly
const moveLeft =()=>{
	if(snakePositionX>0){
		snakePositionX-=1;
	    snake.style.left = snakePositionX + "vw";}
}

//by subtracting the width of the snake the 
//collision with the wall should be at about 97
//chose 96 for styling purposes
const moveRight =()=> {
	    if(snakePositionX<96){ 
			snakePositionX += 1 ;
		    snake.style.left = snakePositionX +"vw";}
}
const moveUp =()=>{
	if(snakePositionY>0){
		snakePositionY -= 1;
	    snake.style.top = snakePositionY + "vh";} 
}
//by subtracting the width of the snake the 
//collision with the wall should be at about 48.5
//may change these numbers in the future
const moveDown = ()=>{
	if(snakePositionY<57){
		snakePositionY += 1;
	    snake.style.top = snakePositionY + "vh";}
}


const moveSnake = (event)=>{
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
	if(snakePositionX +3 >= foodPosX && snakePositionX <= foodPosX+2){
		return true;
	}
}
//3 to add to the height of the snake and 4 to the height of the food
		const colisionY =(foodPosY)=>{
	if(snakePositionY  >= foodPosY && snakePositionY - 4 <= foodPosY ){
		return true;
	}
}

const collisionCheck = ()=>{
	if (colisionX(correctFoodPosX)&&colisionY(correctFoodPosY)){
		addScore();
		removeFood();
		mthProplem = generateRandomProplem();
	}
	if(colisionX(falseFoodPosX)&&colisionY(falseFoodPosY)){
		deleteScore();
		removeFood();
		mthProplem = generateRandomProplem();
	}

}
	
const addScore =()=>{
	scoreDisplay.innerText = scoreValue+=10; 
}
const deleteScore =()=>{
	scoreDisplay.innerText = scoreValue-=10; 
}


const displayQustAndFood = ()=>{
	displayQuestion(mthProplem);
	generateFood(correctFoodValue(mthProplem),"correct");
	generateFood(falseFoodValue(),"false");
}


const startGame = ()=>{
	displayQustAndFood();
    btmDisplayScrn.removeChild(startButton);
}

startButton.addEventListener("click",startGame);
//the event is working in chrome but not in IE
document.body.addEventListener("keydown",moveSnake);














