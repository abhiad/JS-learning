var secreteNumber = 4;
var guess = Number(prompt("Enter the number which you guessed"));

if(guess === secreteNumber){
	alert("You guess right");
}

else if(guess > secreteNumber){
	alert("Too high... Guess again");
}

else{
	alert("Too low.... Guess again");
}

/*anther way for guess ------


if(guess == secreteNumber){
	alert("You Guess right");

	else if(guess < secreteNumber){
	alert("It is too low");
}

else{
	alert("It is too high");
}

}*/