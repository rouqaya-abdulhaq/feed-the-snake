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
let proplem;
let input;

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
    let proplem = num1+operator+num2+" =";
    return proplem; 
}
//returns a  simple random mathmatical proplem in string format 
const question = ()=>{
	let mathQuestion = document.createElement("p"); 
	mathQuestion.appendChild(document.createTextNode(randomProplem()));
	mathQuestion.id = "question";
	return mathQuestion;
}
//returns an input box for the user input
const createAnswerInput =()=>{
	let userAnswer = document.createElement("input");
	userAnswer.id = "answer";
	return userAnswer;
}
//this method is not working properly
//it should get the user answer and check if it is correct
const validateAnswer =(event)=>{
    if (input.value.length > 0 && event.keyCode === 13) {
		return input.value === eval(proplem);
	}
}
//this method should remove an existing question and input box
//in case of correct answer or the user pressed the controls again
const removeQuestion =(proplem,input)=>{
    gamePlay.removeChild(proplem);
    gamePlay.removeChild(input);
}
// creates the question and the input box when any of the controls is pressed
const startQuestion =(event)=>{
	proplem = question();
	input = createAnswerInput();
	gamePlay.appendChild(proplem);
	gamePlay.appendChild(input);
}



positionFood();
buttonUp.addEventListener("click",startQuestion);
buttonLeft.addEventListener("click",startQuestion);
buttonDown.addEventListener("click",startQuestion);
buttonRight.addEventListener("click",startQuestion);













