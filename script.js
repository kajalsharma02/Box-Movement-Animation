var box = document.getElementById("container");
var move = document.getElementById("move");
var invert = document.getElementById("invert");
var text = document.getElementById("text");

box.style.height = "80px";
box.style.width = "80px";
box.style.background = "blue";
box.style.position = "absolute";

var direction = 1; // 1 for right, 2 for down, -1 for left, -2 for up
var posLeft = 20;
var posTop = 80;
var containerWidth = window.innerWidth - 110;
var containerHeight = window.innerHeight - 200;
var ani;

function animate() {
    clearInterval(ani); // Clear previous animation interval
    ani = setInterval(function () {
        if ((direction === 1 && posLeft >= containerWidth && posTop <= 80) || (direction === -1 && posLeft <= 20 && posTop <= 80)) {
            clearInterval(ani);
            direction = 2;
        } else if ((direction === 2 && posTop >= containerHeight && posLeft >= containerWidth) || (direction === -2 && posLeft >= containerWidth && posTop <= 80)) {
            clearInterval(ani);
            direction = -1;
        } else if ((direction === -1 && posLeft <= 20 && posTop >= containerHeight) || (direction === 1 && posLeft >= containerWidth && posTop >= containerHeight)) {
            clearInterval(ani);
            direction = -2;
        } else if ((direction === -2 && posTop <= 80 && posLeft <= 20) || (direction === 2 && posLeft <= 20 && posTop >= containerHeight)) {
            clearInterval(ani);
            direction = 1;
        } else {
            if (direction === 1 || direction === -1) {
                posLeft += direction;
                box.style.left = posLeft + "px";
            } else if (direction === 2 || direction === -2) {
                posTop += direction / 2;
                box.style.top = posTop + "px";
            }
        }
    }, 2);
}

move.addEventListener("click", function () {
    animate();
});


invert.addEventListener("click", function () {
    // Reverse the direction
    direction *= -1;
    
    // Update text based on the direction
    if (direction === 1) {
        text.innerText = "Clockwise";
    } else if (direction === -1) {
        text.innerText = "Anti-clockwise";
    } else if (direction === 2) {
        text.innerText = "Clockwise";
    } else {
        text.innerText = "Anti-clockwise";
    }
});
