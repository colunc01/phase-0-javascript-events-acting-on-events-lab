// Your code here
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
  if(e.key === "ArrowUp"){
    moveDodgerUp();
  }
  if (e.key === "ArrowDown"){
    moveDodgerDown();
  }
});

// Move Dodget to the Left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }

}

// Move Dodger to the Right
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (360 > left) {
        dodger.style.left = `${left + 1}px`;
    }
}

// Move Dodger Up
function moveDodgerUp(){
    const leftNumbers = dodger.style.bottom.replace("px", "");
    const left = parseInt(10, leftNumbers);
    if (360 > left) {
        dodger.style.bottom = `${left + 1}px`;
    }
}
// Move Dodger Down
function moveDodgerDown(){
    const leftNumbers = dodger.style.bottom.replace("px", "");
    const left = parseInt(10, leftNumbers);
    if (360 > left) {
        dodger.style.bottom = `${left - 1}px`;
    }
}
