const mkSq = document.querySelector("#squareDivs");

for(let i=0; i<256; i++){
const newDiv = document.createElement("div");
newDiv.textContent = ("Here it is");

newDiv.setAttribute("class", "newDiv");


mkSq.appendChild(newDiv);
};

const divCount = document.querySelectorAll(".newDiv");
console.log(divCount.length);