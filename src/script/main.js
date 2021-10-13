let main = document.querySelector(".main");
let main_width = main.getBoundingClientRect().width;
let main_height = main.getBoundingClientRect().height;

main.addEventListener('mousemove', moveHandler);

let mX;
let mY;

let time = 0;
let scale = 1;
let brightness = 1;

var loop = window.setInterval(mainLoop, 100);   

let background = document.querySelector(".background");

function checkCollision(first, second){

    let first_rect = first.getBoundingClientRect();
    let second_rect = second.getBoundingClientRect();
    return ((first_rect.left >= second_rect.left  &&
             first_rect.right <= second_rect.right) &&
            (first_rect.top >= second_rect.top  &&
             first_rect.bottom <= second_rect.bottom));

}

function hit(){

    if (brightness < 1){
        brightness += 0.01;
    }
    background.style.filter = 'brightness('+brightness+')';
    randomDirection();

}

function miss(){
    
    background.style.filter = 'brightness('+brightness+')';
    brightness -= 0.01;
    if (brightness <= 0){
        window.clearInterval(loop);
        console.log((time/10));
    }

}

function checkTime(){

    let seconds = time / 10;

    if (Number.isInteger(seconds / 10)){
        if (circle.getBoundingClientRect().width >= 20) {
            cursor.style.width = cursor.getBoundingClientRect().width - 14+'px';
            cursor.style.height = cursor.getBoundingClientRect().height - 14+'px';
            circle.style.width = circle.getBoundingClientRect().width - 10+'px';
            circle.style.height = circle.getBoundingClientRect().height - 10+'px';
        }
    }
}

function mainLoop(){

    time++;

    document.querySelector("#header").innerHTML = (time / 10);

    checkTime();

    if (checkCollision(circle, cursor)){
        setTimeout(hit, 1000);
    } else {
        miss();
    }

    move();

}
