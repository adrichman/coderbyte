/* Using the JavaScript language, have the function ArrayAdditionI(arr) 
take the array of numbers stored in arr and return the string true 
if any combination of numbers in the array can be added up to equal the 
largest number in the array, otherwise return the string false. 

For example: if arr contains [4, 6, 23, 10, 1, 3] the output should 
return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, 
will not contain all the same elements, and may contain negative numbers. */

function ArrayAdditionI(arr) { 
	var status = false;
	var sortedArray = arr.sort(function(a,b){return a-b});
	var largestIndex = parseInt(sortedArray.length) - 1;
	console.log('largestIndex: ' + largestIndex);

	var findLargestNum = function(arrSorted){
			return arrSorted[largestIndex];
		};

	var largestNum = findLargestNum(sortedArray);


	console.log(sortedArray);
	console.log(largestNum);


	var mathArray = sortedArray.slice(0);
	var count = 0;


	var getDiffs = function(arr){
		if(!status){
			arr.pop();
			arr.reverse();
			console.log(arr);
			if (count > 1){
				arr.pop();
			}


				var max = largestNum;

				for (i = arr.length - 1 ; i > -1; i-- ){
					console.log(max);
					max -= arr[i];
					if (max == 0){
						status = true;

					} else if(max < 0) { 
						max += arr[i];
						i--;
					} 
				}

			if (!status){
				count++;
				console.log('count: ' + count);
				console.log('max: ' + max);
				return max;
			} else {
				console.log('status: ' + status);
				return status;	
			}
		}
	}

		while (!status && count < sortedArray.length - 1){
			console.log('sortedArray: ' + sortedArray);
			mathArray = sortedArray.slice(0);
			getDiffs(mathArray);
		}
		for (var splice = 0; splice < sortedArray.length - 1; splice++){
			if (!status){
				count = 0;
				console.log('sortedArray: ' + sortedArray);
				mathArray = sortedArray.slice(0);
				console.log("math array: " + mathArray);
				console.log('spliceIndex: ' + splice);
				mathArray.splice(splice,1);
				console.log('largestNum: ' + largestNum);
				getDiffs(mathArray);

			}
		}

	var theDiffs = getDiffs(mathArray);


    return status;
}

//ArrayAdditionI([3,5,7,9,43,23,35,10,23,23,46,12]);
//ArrayAdditionI([3,5,-1,8,12]);
//ArrayAdditionI([14,10,3,2,2]);
// ArrayAdditionI([5,7,16,1,2]);
//ArrayAdditionI([10,20,30,40,100]);