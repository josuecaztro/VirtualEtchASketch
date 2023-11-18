
//THESE ARE ALL YOUR DOM SELECTORS
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

//REVEALS CONTAINER ONE AFTER PRESSING START
startButton.addEventListener("click", ()=> {
    if (containerOne.style.display = "none"){
        containerOne.style.display = "flex";
        startButton.style.display = "none";
    } else {
        containerOne.style.display = "none";
    }});

//REVEALS CONTAINER TWO AFTER CLICKING ENTER
enterButton.addEventListener("click", ()=> {

    if (userInput.value >= 100 && userInput.value <= 5000){
        if (containerTwo.style.display = "none"){
            containerTwo.style.display = "block";
            containerOne.style.display = "none";
        } else {
            containerTwo.style.display = "none";
        }}});

//ALSO REVEALS CONTAINER TWO BUT AFTER PRESSING ENTER KEY
userInput.addEventListener("keyup", function (event){
    if (userInput.value >= 100 && userInput.value <= 5000){

    if (event.key === "Enter"){
        if (containerTwo.style.display = "none"){
                containerTwo.style.display = "block";
                containerOne.style.display = "none";
        } else {
                containerTwo.style.display = "none";
        }}}});

//TO MAKE RESTART BUTTON WORK
restartButton.addEventListener("click", ()=> {
    location.reload();
});


//THE DEFAULT MAKE GRID FUNCTION 
//THIS IS A PARENT OF MAKEGRID()
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

//MAKES GRID BASED OFF NUMBER APPEAR AFTER CLICKING ENTER
enterButton.addEventListener("click", defaultGrid);

//MAKES GRID BASED OFF NUMBER APPEAR AFTER PRESSING ENTER KEY
userInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter"){
        defaultGrid();
    }
});

//MAKE GRID FUNCTION - THIS IS A CHILD OF DEFAULT GRID()
function makeGrid(num){

    for (i = 0; i < num; i++){
        let row = document.createElement("div");
        row.classList.add("a-square");
        gridContainer.appendChild(row);

        row.addEventListener("mouseover", function() {
            this.classList.add("hovered");
    })};
    

}

//THE FUNCTION TO MAKE A RANDOM COLOR GENERATE
function getRandomColor(){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let answer = "#" + randomColor;
    return answer;
}

//THIS ACTIVATES FUN MODE 
function randomColorMode(){
        let trulyAllSquares = document.querySelectorAll(".a-square");
        trulyAllSquares.forEach(element => {
            element.style.backgroundColor = "lightgrey";
            element.addEventListener("mouseover", function() {
                element.classList.add("hoveredRGB");
                this.style.backgroundColor = getRandomColor();
            })})
        
    
}

//MAKES FUN MODE ACTIVE ONCE FUN BUTTON IS CLICKED
funButton.addEventListener("click", randomColorMode);


//SETS ALL DIVS BACK TO NORMAL AKA CLEARS ALL DIVS 
clearButton.addEventListener("click", ()=> {
    let allSquares = document.querySelectorAll(".a-square");
    allSquares.forEach(element => {
        element.classList.remove("hovered");
        element.style.backgroundColor = "lightgrey";
        element.addEventListener("mouseover", function() {
            this.style.backgroundColor = "black";
    })});
   
});









