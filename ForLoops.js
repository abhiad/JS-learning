console.log("Print all the numbers between -10 and 20");
for (var i = -10; i < 20; i++) {
	console.log(i);
}
/*var abhi = -10;
while(abhi < 20){
	console.log(abhi);
	abhi++;
}*/

console.log("Print all the even numbers between 10 and 40");
for (var i = 10; i < 40; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
	
}


/*for (var i = 10; i < 40; i+=2) {
	console.log(i);
}
*/



	/*var abhi = 10;
while(abhi < 40){
	console.log(abhi);
	abhi+=2;
}*/


console.log("Print all the odd numbers between 300 and 333");
for (var i = 300; i < 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
	
}

console.log("Print all the  numbers dividible by 5 and also by 3 from 5 to 50");
for (var i = 5; i <= 50; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
	
}