/* Using the JavaScript language, have the function SimpleMode(arr) 
take the array of numbers stored in arr and return the number that 
appears most frequently (the mode). For example: if arr contains 
[10, 4, 5, 2, 4] the output should be 4. If there is more than one 
mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] 
should return 5 because it appeared first). If there is no mode return -1. 
The array will not be empty. */

function SimpleMode(arr) {

	var count = 0;
	var mode;


	while (arr[0] != undefined) {
		var thisCount = 0;
		var checker = parseInt(arr[0]);

		for (i = arr.length - 1; i > 0; i--){

			

			var checkNumber = parseInt(arr[i]);

			if (checkNumber == checker){

				thisCount++;
//				debugger;

			}

//			debugger;
		}

		if (thisCount > count){

			count = thisCount;
			mode = checker;

//			debugger;
		}
	
		arr.shift();			
//		debugger;			

	}

	if (mode == undefined) {
		return -1;
	} else {
		return mode;
	}
}

//SimpleMode([5,5,2,2,1]);
//SimpleMode([3,4,1,6,10]);
//SimpleMode([4,4,4,7,7,7,4,3,6,7,9]);
//SimpleMode([4,4,4,7,7,7,4,3,6,7,9,7]);
SimpleMode([4,4,4,0,0,0,4,3,6,0,9,0]);