let container = document.querySelector('.container');
let button = document.querySelector('.button');

button.addEventListener("click" , () => {
    container.textContent = "";
    let sqaureNumber = parseInt(prompt("How many sqares per side do you like?"));

    if(sqaureNumber > 100){
        window.alert("Maximum number is 100");
    }else if (isNaN(sqaureNumber) == true){
        window.alert("You have to enter a number");
    }else{

    for (i = 0; i < sqaureNumber*sqaureNumber ; i++){
        let square = document.createElement('div');
        container.appendChild(square);
        square.addEventListener('mouseover' , ()=>{
            square.style.cssText = "background-color: black;"
        });
    }
    container.style.cssText = `
        grid-template-columns: repeat(${sqaureNumber}, 1fr [col-start]);
        grid-template-rows: repeat(${sqaureNumber}, 1fr [row-start]);
    `
    }
})