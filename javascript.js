
//selecting the retainer for the pixels to go in
const mkSq = document.querySelector("#squareDivs");

//creates a 16x16 grid to draw on
for(let i=0; i<256; i++){
const newDiv = document.createElement("div");

newDiv.setAttribute("class", "newDiv");

mkSq.appendChild(newDiv);
};


const count = document.querySelectorAll('.newDiv');
const box = document.querySelector('#squareDivs');


const draw = document.querySelector('.newDiv');

count.forEach(function(event){
event.addEventListener('mouseover', function(x){
   this.style.backgroundColor = "green";
})
});
