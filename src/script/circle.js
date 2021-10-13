let circle = document.querySelector("#circle");

let left_edge = document.querySelector(".main").getBoundingClientRect().left;
let top_edge = document.querySelector(".main").getBoundingClientRect().top;
let right_edge = document.querySelector(".main").getBoundingClientRect().right;
let bottom_edge = document.querySelector(".main").getBoundingClientRect().bottom;

let cLeft = false;
let cTop = false;
let cRight = true;
let cBottom = true;

let cX = 0;
let cY = 0;

function randomDirection(){

    for (let tick = 0; tick <= 2; tick++){
        min = Math.ceil(1);
        max = Math.floor(5);
        let index = Math.floor(Math.random() * (max - min)) + min;

        if (index == 1){
            cRight = true;
            cLeft = false;
        }
        if (index == 2){
            cRight = false;
            cLeft = true;
        }
        if (index == 3){
            cTop = false;
            cBottom = true;
        }
        if (index == 4){
            cBottom = false;
            cTop = true;
        }
    }


}

function changeDirection(){

    let rect = circle.getBoundingClientRect();

    if (rect.left - 50 <= left_edge){
        cRight = true;
        cLeft = false;
    }
    if (rect.right + 50 >= right_edge){
        cRight = false;
        cLeft = true;
    }
    if (rect.top - 50 <= top_edge){
        cTop = false;
        cBottom = true;
    }
    if (rect.bottom + 50 >= bottom_edge){
        cBottom = false;
        cTop = true;
    }

}

function move(){

    changeDirection();

    if (cLeft){
        cX -= 20;
    }
    if (cTop){
        cY -= 20;
    }
    if (cRight){
        cX += 20;
    }
    if (cBottom){
        cY += 20;
    }
    circle.style.transform = 'translateX('+cX+'px)';
    circle.style.transform += 'translateY('+cY+'px)';

}