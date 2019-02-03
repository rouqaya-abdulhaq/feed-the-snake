let snake = document.querySelector("#snake");
let playfield = document.querySelector("#play-field");
let startButton = document.querySelector("#start");
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



//creates the food and positiones it
const createFood = (value ,state)=>{
	let food = document.createElement("div");
	let textValue = document.createTextNode(value);
	food.appendChild(textValue);
	food.classList.add("food");
	playfield.appendChild(food);
	positionFood(food,state);
}
const positionFood =(food , state)=>{
	if(state === "correct"){
	    correctFoodPosX = Math.floor(Math.random()*100);
	    correctFoodPosY = Math.floor(Math.random()*50);
	    food.style.left = correctFoodPosX + "vw";
	    food.style.top = correctFoodPosY + "vh";}
    else if (state === "false"){
    	falseFoodPosX = Math.floor(Math.random()*100);
	    falseFoodPosY = Math.floor(Math.random()*50);
	    food.style.left = falseFoodPosX + "vw";
	    food.style.top = falseFoodPosY + "vh";
    }
}

//takes a question as a pramater in string format and returns the correct answer
//designed to go into the food
const correctValue =(question)=>{
			return eval(question);
		}
//passed for the other food
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
//you need to update this variable once the correct food is reached 
let question = randomProplem();

//displays the question
const startQuestion =(question)=>{
	proplem.innerText = question;
}


//movment functions are working properly
const moveLeft =()=>{
	if(positionX>0){
	positionX-=1;
	snake.style.left = positionX + "vw";}
}
const moveRight =()=> {
	    if(positionX<playfield.offsetWidth){ 
		positionX += 1 ;
		snake.style.left = positionX +"vw";}
}
const moveUp =()=>{
	if(positionY>0){
	positionY -= 1;
	snake.style.top = positionY + "vh";} 
}
const moveDown = ()=>{
	if(positionY<playfield.offsetHeight){
	positionY += 1;
	snake.style.top = positionY + "vh";}
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
        collisionCheck();
	}


//my most urgent proplem
//it's not what i have in mind i need to find a way to calculate the space of each element and check if they collide at all
const collisionCheck = ()=>{
	if(positionX + 2==correctFoodPosX || positionX -2 == correctFoodPosX ){
		alert("reached");
	}

}
	
const addScore =()=>{
	score.innerText = scoreValue+=10; 
}
const deleteScore =()=>{
	score.innerText = scoreValue-=10; 
}


//in theory this is supposed to start the game display the question 
//and place the food
//just used the vw and vh to place the food and the snake. i need
//to calculate where the circle start and end and put a colision condition 
//i also need to add a scoring system
const play = ()=>{
	startQuestion(question);
	createFood(correctValue(question),"correct");
	createFood(falseValue(),"false");
	gamePlay.removeChild(startButton);
}

startButton.addEventListener("click",play);
//the event is working in chrome but not in IE
document.body.addEventListener("keydown",move);














