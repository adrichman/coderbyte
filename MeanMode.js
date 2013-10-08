/*

Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored 
in arr and return 1 if the mode equals the mean, 0 if they don't equal each other 
(ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)). The array 
will not be empty, will only contain positive integers, and will not contain more than one mode. 

*/

function MeanMode(arr) { 

	var meanAdd = 0;
	var meanResult = 0;
	var modeArr = [];


	for (i = 0; i < arr.length; i++){

		modeArr.push(arr[i]);
		meanAdd += parseInt(arr[i]);
	}
//	console.log("meanAdd: " + meanAdd);

	meanResult = meanAdd / arr.length;
//	console.log("meanResult: " + meanResult);
	var mode = 0;


	for (j = 0; j < modeArr.length - 1; j++){

		var checker = modeArr[j];
		var count = 0;
		var thisCount = 0;

		for (k = 0; k < modeArr.length; k++){
			

			if (modeArr[k] == checker){
				thisCount++;
//				console.log("checker: " + checker + " thisCount: " + thisCount);
				modeArr.shift();
			}

		}

		if (thisCount > count) {
			mode = checker;
		}
		modeArr = modeArr.slice(1);
//		console.log(modeArr);
	}

	if (mode == meanResult){

		return 1;
	} else {
		return 0;
	}
         
}

MeanMode([1,2,3,2,2]);


