let cursor = document.querySelector("#cursor");

function moveHandler(event) {

    event.preventDefault();

    let main_rect = document.querySelector(".main").getBoundingClientRect();
    
    let mX = event.clientX - main_rect.left;
    let mY = event.clientY - main_rect.top;

    //console.log('mX : '+mX+', mY : '+mY);
    
    let x = (mX - (main_width - cursor.getBoundingClientRect().width) / 2 - (cursor.getBoundingClientRect().width / 2));
    let y = (mY - cursor.getBoundingClientRect().height / 2);

    if ((event.clientX > main_rect.left && event.clientX < main_rect.right) &&
         event.clientY > main_rect.top && event.clientY < main_rect.bottom) {
            cursor.style.transform = 'translateX('+x+'px)';
            cursor.style.transform += 'translateY('+y+'px)';
    }

    event.stopPropagation();
    
}