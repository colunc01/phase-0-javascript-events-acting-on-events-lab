// Your code here
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});


function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }

}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (360 > left) {
        dodger.style.left = `${left + 1}px`;
    }

    /******************
     * var left = dodger.style.left
    left = parseInt(left)

    moveDodgerRight()

    var newPosition = dodger.style.left
    newPosition = parseInt(newPosition)

    expect(newPosition).to.be.above(left)
     */ 

}
