const gridContainer = document.querySelector("#grid-container");
const square = document.querySelector(".a-square");
let userInput = document.querySelector("#user-number");
let enterButton = document.querySelector("#enter-button");
let startButton = document.querySelector("#start-here");
let containerOne = document.querySelector(".container-one");
let containerTwo = document.querySelector(".container-two");
let restartButton = document.querySelector("#restart-here");
let clearButton = document.querySelector("#clear-here");
let funButton = document.querySelector("#fun-mode");

startButton.addEventListener("click", ()=> {
    if (containerOne.style.display = "none"){
        containerOne.style.display = "flex";
        startButton.style.display = "none";
    } else {
        containerOne.style.display = "none";
    }});

enterButton.addEventListener("click", ()=> {
        if (containerTwo.style.display = "none"){
            containerTwo.style.display = "block";
            containerOne.style.display = "none";
        } else {
            containerTwo.style.display = "none";
        }});

userInput.addEventListener("keyup", function (event){
    if (event.key === "Enter"){
        if (containerTwo.style.display = "none"){
                containerTwo.style.display = "block";
                containerOne.style.display = "none";
        } else {
                containerTwo.style.display = "none";
        }}});

restartButton.addEventListener("click", ()=> {
    location.reload();
});



function defaultGrid(){
    let fakeNum = userInput.value;
    let almostNum = parseInt(fakeNum);
    if ((almostNum) % 44 === 0){
        let num = almostNum;
        makeGrid(num - 1);
} else if (almostNum > 5000){
    alert("This is too high! Keep it under five thousand!");
} else if (almostNum < 100){
    alert("This is too low of a number.")
} else {
    let num = Math.ceil(almostNum / 44) * 44;
    makeGrid(num - 1);
}};

enterButton.addEventListener("click", defaultGrid);
userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter"){
        defaultGrid();
    }
});


function makeGrid(num){

    for (i = 0; i < num; i++){
        let row = document.createElement("div");
        row.classList.add("a-square");
        gridContainer.appendChild(row);

        row.addEventListener("mouseover", function() {
            this.classList.add("hovered");
    })};
    

}
function getRandomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let answer = "#" + randomColor;
    return answer;
}

function randomColorMode(){
        let trulyAllSquares = document.querySelectorAll(".a-square");
        trulyAllSquares.forEach(element => {
            element.style.backgroundColor = "lightgrey";
            element.addEventListener("mouseover", function() {
                element.classList.add("hoveredRGB");
                this.style.backgroundColor = getRandomColor();
            })})
        
    
}

funButton.addEventListener("click", randomColorMode);

clearButton.addEventListener("click", ()=> {
    let allSquares = document.querySelectorAll(".a-square");
    allSquares.forEach(element => {
        element.classList.remove("hovered");
        element.style.backgroundColor = "lightgrey";
        element.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
    })});
   
});










