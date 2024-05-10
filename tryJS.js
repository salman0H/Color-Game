let appendItem = document.querySelector(".plate");
let appendNumber = Number(prompt("enter number"));

let randomColor = () => 
    `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
console.log(randomColor());
for(let i = 0; i < appendNumber * 70; i++){
    let create = document.createElement("span");
    create.classList.add("inside--box");
    create.addEventListener('mouseenter',() => {
        create.style.backgroundColor = randomColor();
    })
    create.addEventListener('mouseleave',() => {
        setTimeout(() => {
            create.style.backgroundColor = `var(--section)`;
        },1000)
    })
    appendItem.appendChild(create);
}