/* Using the JavaScript language, have the function SecondGreatLow(arr) 
take the array of numbers stored in arr and return the second lowest and 
second greatest numbers, respectively, separated by a space. For example: 
if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array 
will not be empty and will contain at least 2 numbers. It can get tricky 
if there's just two numbers! 

Input = 1, 42, 42, 180 Output = "42 42"
Input = 4, 90 Output = "90 4" 
*/

function SecondGreatLow(arr) { 

	resultArr = arr.sort(function(a,b){return a-b});
	
	if(!(resultArr.length <= 2)){
		while (resultArr[0] == resultArr[1]){
			resultArr = resultArr.slice(1);
			//return resultArr;
		}

		while (resultArr[resultArr.length-1] == resultArr[resultArr.length-2]){
			resultArr = resultArr.pop();
			//return resultArr;
		}
	}


	if (resultArr.length <= 2){
		return resultArr[1] + " " + resultArr[0];
	} else {
			return resultArr[1] + " " + resultArr[resultArr.length-2];

	}
}
   
//SecondGreatLow([5,7,2,46,6,453]);
//SecondGreatLow([2,2,2,5,5,5,6]);
SecondGreatLow([80,80]);