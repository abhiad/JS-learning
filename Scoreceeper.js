var p1Button = document.querySelector("#b1");
var p2Button = document.getElementById("b2");
var reset = document.getElementById("r1")
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var winningScoreDisplay = document.querySelector("p span");
var numInput = document.querySelector("input")
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winingScore = 5;

p1Button.addEventListener("click", function(){
    if(!gameOver){
    	 p1score++;
    	 if (p1score == winingScore) {
    	 	gameOver = true;
    	 }
    }
    p1display.textContent = p1score;
});

p2Button.addEventListener("click", function(){
	if (!gameOver) {
		p2score++;
		if (p2score == winingScore) {
			gameOver = true;
		}
	}
    p2display.textContent = p2score;
})


reset.addEventListener("click", function(){
    reset();

});
function reset(){
	var p1score = 0;
var p2score = 0;
p1Display.textContentn= 0;
p2display.textContent = 0;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winingScore = Number(this.value); 

})