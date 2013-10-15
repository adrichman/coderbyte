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
	var largest = 0;
	for (i = 0; i < numArr.length-1; i++){
		if (numArr[i] != numArr[i+1]){
			same = false;
		} 
		if (numArr[i] > largest){
			largest = numArr[i];
		}
	}
	
	function CheckLargest(arr){
		var numLargest = true;
		for (ll=0; ll < arr.length; ll++){
			if (arr[ll] < arr[ll+1]) {
				numLargest = false;
			}
		}
		return numLargest;
	}
	function PermuteNum(numsSoFarArr, numsRemainingArr){
		if (permuteArr.length != 1 && permuteArr.indexOf(parseInt(String(numsRemainingArr.join('')))) != -1){
			return 1;
		} else if (numsRemainingArr.length == 2){
			permuteArr.push(parseInt(String(numsRemainingArr[1] + numsRemainingArr[0])));
		} else if (numsRemainingArr.length == 1){
			permuteArr.push(String(numsSoFarArr.join(''))+String(numsRemainingArr));
		} else {
		// if (permuteArr.indexOf(parseInt(numsRemainingArr.join(''))) == -1 )
		//{
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

	

	if (same) {
		return -1;
	} else if (CheckLargest(numArr)) {
		return -1;
	} else {
		for (a = numArr.length-1; a > -1; a--) {
			console.log("a: " + a);
			if (a == 1){
				var nextLargest = 0;
				var nextLargestIndex = 0;
				for (aa = 0; aa < numArr.length; aa++) {
					if (numArr[aa] > nextLargest && numArr[aa] < largest){
						nextLargest = numArr[aa];
						nextLargestIndex = parseInt(aa);
						console.log("nextLargest: " + nextLargest);
					}
				}
				nextLargestNumArr = [];
				arrFrontToSort = numArr.slice(0, nextLargestIndex);
				arrBackToSort = numArr.slice(nextLargestIndex + 1);
				arrBackToSort.push(numArr[nextLargestIndex]);
				console.log("arrFrontToSort: " + arrFrontToSort);
				console.log("arrBackToSort: " + arrBackToSort);
				nextLargestNumArr.push(arrBackToSort.join(''), arrFrontToSort.join(''));
				nextLargestNumArr = String(nextLargestNumArr.join('')).split('');
				newFrontArr = nextLargestNumArr.slice(0, nextLargestNumArr.indexOf(largest) + 1); 
				newBackArr = nextLargestNumArr.slice(nextLargestNumArr.indexOf(largest) + 1);
				newBackArr = newBackArr.sort(function(a,b){return parseInt(a) - parseInt(b);});
				concatLargest = String(newFrontArr.join('')) + String(newBackArr.join(''));
				if (parseInt(concatLargest) > num) {
					console.log(parseInt(concatLargest));
					return 1;
				}
			} else {
			holdArr = numArr.slice(0,a);
			permArr = numArr.slice(a);
			if (permArr.length > 1 && !(CheckLargest(permArr)))	{
				PermuteNum(dummyArr, permArr);
				console.log(permuteArr.length)
				sortedPermuteArr = permuteArr.sort(function(a,b){return parseInt(a) - parseInt(b);});
				console.log(sortedPermuteArr); 
				if (sortedPermuteArr[sortedPermuteArr.length - 1] == num){
					return -1;
				} else if (sortedPermuteArr[sortedPermuteArr.indexOf(parseInt(permArr.join('')))] != -1 
					&& sortedPermuteArr[sortedPermuteArr.indexOf(parseInt(permArr.join('')))+1] != -1){
						var concatResult = parseInt(String(holdArr) + String(sortedPermuteArr[sortedPermuteArr.indexOf(parseInt(permArr.join('')))+1]));
						if (concatResult > num){
							console.log(concatResult);
							return 1;
						}
					} else {
						numArr = [];
						numArr.push(String(holdArr.join('')+ permArr.join('')).split(''));
						console.log("numArr: " + numArr);
					}
				}
			}
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
PermutationStep(897654321); // Output = 912345678
//PermutationStep(11121); // Output = 11211
//PermutationStep(41352); //  Output = 41523
//PermutationStep(990); //  
//numberOfPermutations(5);