/*
Using the JavaScript language, have the function PermutationStep(num) take the num parameter 
being passed and return the next number greater than num using the same digits. For example: 
if num is 123 return 132, if it's 12453 return 12534. If a number has no greater permutations, 
return -1 (ie. 999). 

Input = 11121 Output = 11211
Input = 41352 Output = 41523
*/

function PermutationStep(num){
	var num = num;
	var numStr = String(num);
	var numArr = numStr.split('');
	console.log("numArr: " + numArr);
	var same = true;
	var permuteArr = [];
	var dummyArr = [];
	for (i = 0; i < numArr.length-1; i++){
		if (numArr[i] != numArr[i+1]){
			same = false;
		} 
	}

	function PermuteNum(numsSoFarArr, numsRemainingArr){
		if (permuteArr.length != 1 && permuteArr.indexOf(parseInt(String(numsRemainingArr.join('')))) != -1){
			return 1;
		} else if (numsRemainingArr.length == 2){
			permuteArr.push(parseInt(String(numsRemainingArr[1] + numsRemainingArr[0])));
		} else 
		// if (permuteArr.indexOf(parseInt(numsRemainingArr.join(''))) == -1 )
		{
			for (n = 0; n < numsRemainingArr.length; n++){
				var nextRemainingArr = [];
				if (permuteArr.indexOf(parseInt(String(numsRemainingArr.join('')))) == -1){
					permuteArr.push(parseInt(String(numsRemainingArr.join(''))));
				}
				var nextSoFarArr = [];
				if (numsSoFarArr != ""){
					nextSoFarArr.push(numsSoFarArr, numsRemainingArr[n]);
				} else {
					nextSoFarArr.push(numsRemainingArr[n]);
				}
				var frontArr = numsRemainingArr.slice(0, n);			
				var backArr = numsRemainingArr.slice(n+1);
				backArr.push(numsRemainingArr[n]);
				// console.log("frontArr: " + frontArr);
				// console.log("backArr: " + backArr);
				if (backArr != ""){
					for (k = 0; k < backArr.length; k++){
						nextRemainingArr.push(parseInt(backArr[k]));
					}
				}
				if (frontArr != ""){
					for (k = 0; k < frontArr.length; k++){
						nextRemainingArr.push(parseInt(frontArr[k]));
					}
				}
				console.log("nextRemainingArr: " + nextRemainingArr);				
				PermuteNum(nextSoFarArr, nextRemainingArr);
			}
		}
	}

	

	if (same){
		return -1;
	} else {
		permuteArr.push(parseInt(String(numArr.join(''))));
		console.log("permuteArr: " + permuteArr);
		PermuteNum(dummyArr, numArr);
		console.log(permuteArr.length)
		sortedPermuteArr = permuteArr.sort(function(a,b){return parseInt(a) - parseInt(b);});
		console.log(sortedPermuteArr);
		if (sortedPermuteArr[sortedPermuteArr.length - 1] == num){
			return -1;
		} else if (sortedPermuteArr[sortedPermuteArr.indexOf(num)] != -1 && sortedPermuteArr[sortedPermuteArr.indexOf(num)+1] != -1){
			return sortedPermuteArr[permuteArr.indexOf(num)+1];
		} else {
			return -1;
		}
	}
}
function numberOfPermutations(n){
	if (n == 1 || n == 0){
		return 1;
	} else { 
		return n * numberOfPermutations(n-1);
	}
}
//PermutationStep(897654321); // Output = 912345678
//PermutationStep(11121); // Output = 11211
//PermutationStep(41352); //  Output = 41523
PermutationStep(990); //  
//numberOfPermutations(5);
