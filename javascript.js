
function newGame(){//---------------------------------------------
//creating the container for the pixels to go in
const getBody = document.querySelector('body');
const mkDiv = document.createElement('div');
mkDiv.setAttribute('id', 'squareDivs');
getBody.appendChild(mkDiv);

//selecting the created container - 
//this is where the pixels will print to
const mkSq = document.querySelector("#squareDivs");

//take user input for desired sketchpad size
   let countPix = prompt("Enter a number between 20 and 100");
   let usrColor = prompt("Enter ur fav color")

//multiplies input by pixel size to ensure field size matches
//does not overflow border/container
   let newHeight = countPix * 3;
   let newWidth = countPix * 3;
   let newCount = countPix* countPix;

//sets the size of the field to match the user input
   mkSq.style.maxHeight = (`${newHeight}px`);
   mkSq.style.maxWidth = (`${newWidth}px`);

//creates a grid to draw on - based on user input (countPix)
for(let i=0; i < newCount; i++){
   const newDiv = document.createElement("div");
   newDiv.setAttribute("class", "newDiv");
   mkSq.appendChild(newDiv);
};

//event listener that creates the drawing effect
const count = document.querySelectorAll('.newDiv');
count.forEach(function(event){
event.addEventListener('mouseover', function(x){
   this.style.backgroundColor = usrColor;
})
});
};

//end newGame()------------------------------------------------------------

//selects the reset button
const restart = document.querySelector('button');

//when reset button is pressed, clears the last child from the body
//and re-calls newGame() to clear the previous playfield and 
//start a new game
restart.addEventListener('click', ()=>{
   const getBody = document.querySelector('body');
   getBody.removeChild(getBody.lastChild);
   newGame();
});


newGame()