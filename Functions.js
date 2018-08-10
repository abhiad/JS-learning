function abhi() {
	console.log("Hii Abhi");
	console.log("Bye Abhi");

}

abhi();

function ad(){
	console.log("Twinkle , twinkle , little star," ,);
	console.log("How are woder what you are!");
	console.log("Up above the world so high,");
	console.log("Like a diamond in the sky");
}

setInterval(function(){
	console.log("I am a anonymous function");
	console.log("This is awsome!");
},2000);

area(num1,num2);


person1 = prompt("Enter your first freind name");
person2 = prompt("Enter your second freind name");
person3 = prompt("Enter your third freind name");


function wish(){

	console.log("Hii " + person1);
	console.log("Hii " + person2);
	console.log("Hii " + person3);
}

wish(person1 , person2, person3);

retrning the value

function sq(x){
	return x * x;

	console.log("Function to return the number is even or odd")
	x = prompt("Enter the number to be check weather its even or odd");

	function isEven()
	{
		if (x % 2 === 0) {
			console.log("Even");
		}
		else{
			console.log("Odd")
		}
	}

	another way
	var x = prompt("Enter the number");

	function isEven(x){
		return x % 2 === 0;
	}

var num = prompt("Enter the number for factorial");
function factorial(num){
   result = num;
   for (var i = num-1; i >= 1; i--) {
   	result *= i;
   }
   return result;
}
