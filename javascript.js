let countPix = prompt("How Many Pixels(Sqred)");
let newCount = countPix * countPix;
//selecting the retainer for the pixels to go in
const mkSq = document.querySelector("#squareDivs");


//creates a 16x16 grid to draw on
for(let i=0; i < newCount; i++){
   console.log(newCount);
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
