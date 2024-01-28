//selecting the retainer for the pixels to go in
const mkSq = document.querySelector("#squareDivs");

   let countPix = prompt("Enter a number between 20 and 100");

   let newHeight = countPix * 3;
   let newWidth = countPix * 3;
   let newCount = countPix* countPix;

   mkSq.style.maxHeight = (`${newHeight}px`);
   mkSq.style.maxWidth = (`${newWidth}px`);

   console.log(newHeight);
   console.log(newWidth);

//creates a grid to draw on - based on user input (countPix)
for(let i=0; i < newCount; i++){
   console.log(newCount);
const newDiv = document.createElement("div");

newDiv.setAttribute("class", "newDiv");

mkSq.appendChild(newDiv);
};



//function that creates the drawing effect
const count = document.querySelectorAll('.newDiv');
count.forEach(function(event){
event.addEventListener('mouseover', function(x){
   this.style.backgroundColor = "green";
})
});
