const mkSq = document.querySelector("#squareDivs");

for(let i=0; i<256; i++){
const newDiv = document.createElement("div");

newDiv.setAttribute("class", "newDiv");

mkSq.appendChild(newDiv);
};

const path = document.querySelector("#squareDivs");

path.addEventListener('mouseenter', ()=>{

    const draw = document.querySelectorAll('.newDiv');

    draw.style.backgroundColor = "blue";
})

