let snake = document.querySelector("#snake");
let playfield = document.querySelector("#play-field");
let buttonUp = document.querySelector("#up");
let buttonLeft = document.querySelector("#left");
let buttonDown = document.querySelector("#down");
let buttonRight = document.querySelector("#right");
let controls = document.querySelectorAll(".controls");
let positionX = 0 ;
let positionY = 0;
// const makeFood =()=>{
//     let food = document.ceateElement("span");
//     food.setAttribute("id","food");
//     food.style.left = Math.floor(Math.random()*1000) +"px";
//     food.style.top = Math.floor(Math.random()*200) +"px";
//     playfield.appendChild(food);
// }
const moveLeft =()=>{
	if(positionX>0){
	positionX-=10;
	snake.style.left = positionX + "px";} 
}
const moveRight =()=> {
    if(positionX<playfield.offsetWidth){ 
	positionX += 10 ;
	snake.style.left = positionX +"px";}
}
const moveUp =()=>{
	if(positionY>0){
	positionY -= 10;
	snake.style.top = positionY + "px";} 
}
const moveDown = ()=>{
	if(positionY<playfield.offsetHeight){
	positionY += 10;
	snake.style.top = positionY + "px";}
}
// makeFood();
buttonUp.addEventListener("click",moveUp);
buttonLeft.addEventListener("click",moveLeft);
buttonDown.addEventListener("click",moveDown);
buttonRight.addEventListener("click",moveRight);











