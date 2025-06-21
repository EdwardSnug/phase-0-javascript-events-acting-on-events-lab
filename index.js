// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}
function moveDodgerRight() {
    //Get the current position of the dodger
    const leftNumbers = dodger.style.left.replace("px", "");
    //Convert it to a number using parseInt()
    const left = parseInt(leftNumbers, 10);
    //Check if its within the game field size i.e. dodger is 40px and the field is a total of 400px thus 360px remains
    if(left<360){
        //Moves to the right 
        dodger.style.left = `${left+1}px`;
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }else if(e.key==="ArrowRight"){
        moveDodgerRight();
    }
});
