function printReverse(add){
	for (var i = add.length - 1; i >= 0; i--) {
		console.log(add[i]);
	}
}

printReverse([1,2,3,4,5]);

/*Is uniform*/

function isUniform(add){
	var first = add[0];
	for(var i = 0;i < add.length; i++){
		if (add[i] !== first) {
			return false;
		}

	}
	return true;
}

function sumArray(add){
    var total = 0;
    add.forEach(function(element){
    	total += element;
    });

    return total;
}

function max(add){
	var max = [0];
	for (var i = 1; i < add.length; i++) {
		if (add[i] > max) {
			max = add[i];
		}
	}

	return max;
}
