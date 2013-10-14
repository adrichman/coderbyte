/*
Using the JavaScript language, have the function PrimeChecker(num) take num and 
return 1 if any arrangement of num comes out to be a prime number, otherwise return 0. 
For example: if arr is 910, the output should be 1 because 910 can be arranged into 109 or 019, 
both of which are primes. 

Input = 98 Output = 1
Input = 598 Output = 1
*/

function PrimeChecker(num){
	var num = num;
	var numStr = String(num);
	var numArr = numStr.split('');
	var count = 0;
	var dummyArr = [];
	var testArr = [];
	var permuteCount = 0;
	var wasPrime = false;
	var allSame = true;
	for (s = 0; s < numArr.length; s++){
		if (numArr.indexOf(numArr[s+1]) != -1){
			if (numArr[s+1] != numArr[s] && numArr.length > 1){
				console.log("checking for all same");
				allSame = false;
				console.log(numArr[s]);
				console.log(numArr[s+1]);
			}
			if (!allSame) {
				break;
			}
		}
	}
	var numberOfPermutations = function(n){
		if (n == 1 || n == 0){
			console.log("count: " + count);
			return 1;
		} else { 
			return n * numberOfPermutations(n-1);
		}
	}
	count = numberOfPermutations(numArr.length);
	if (!allSame){
		testArr.push(parseInt(num));
		PermuteNum(dummyArr,numArr, count);
	} else {
		testArr.push(num);
	}
	console.log("numArr: " + numArr + " with typeof: " + typeof numArr + " and length of " + numArr.length);
	var testPrime = function(testNum){
		console.log("testing: " + testNum + " " + typeof testNum);
		testNumSq = Math.floor(Math.sqrt(testNum));
		console.log("testNumSq: "+ testNumSq);
		
		if (testNum > 100){	
			if (testNum != 1 && testNum % 2 != 0 && testNumSq > 2) {
				//console.log("testNum: "+ testNum);
				wasEven = true;
				for (i = 3; i < testNumSq; i++){
					console.log("testing i: " + i)
					if (i % 2 != 0 && testNum % i != 0){ 
						wasPrime = true;
					}
				}
			}
		} else {
			if (testNum != 1 && testNum % 2 != 0 && testNum > 2) {
				//console.log("testNum: "+ testNum);
				wasEven = true;
				for (i = 3; i < testNum; i++){
					console.log("testing i: " + i)
					if (i % 2 != 0 && testNum % i != 0){ 
						wasPrime = true;
					} 
				}
			}
		}
	}
	function PermuteNum(numsSoFar, remainingNums){
		if (testArr.length != 1 && testArr.indexOf(parseInt(remainingNums.join(''))) != -1 ){
			console.log("numsSoFar: " + numsSoFar + " with typeof: " + typeof numsSoFar);
			console.log("testArr: " + testArr + " with typeof: " + typeof testArr);
			return 1;
		} else if (remainingNums.length == 2){
			testArr.push(parseInt(String(remainingNums[1] + remainingNums[0])));
		} else {
			for (j = 0 ; j < remainingNums.length; j++){
				nextRemainingNums = [];
				console.log("remainingNums: "+remainingNums);
				if (testArr.indexOf(parseInt(remainingNums.join(''))) == -1) {
					testArr.push(parseInt(remainingNums.join('')));
				}
				console.log("numsSoFar: " + numsSoFar);
				var next = [];
				console.log(testArr);
				debugger;

				console.log("j: " + j);
				//console.log("remainingNums: " + remainingNums + " with length: " + remainingNums.length);
				//console.log("next: " + next + " with typeof: " + typeof next);
			
				//console.log("remainingNums[j]: "+ remainingNums[j]);
				//console.log("next: " + next + " with typeof: " + typeof next);				
				if (numsSoFar != ""){
					next.push(numsSoFar, remainingNums[j]);
				} else {
					next.push(remainingNums[j]);
				}
				
				var frontArr = remainingNums.slice(0,j);
				console.log("frontArr: " + frontArr);

				var backArr = remainingNums.slice(j+1);
				backArr.push(remainingNums[j]);
				console.log("backArr: " + backArr);
				if (frontArr != ""){				
					for (k = 0; k < frontArr.length; k++){
						nextRemainingNums.push(parseInt(frontArr[k]));
					} 
				}
				if (backArr != ""){
					for (k = 0; k < backArr.length; k++){
						nextRemainingNums.push(parseInt(backArr[k]));
					} 
				}
				console.log("nextRemainingNums: " + nextRemainingNums);
				PermuteNum(next,nextRemainingNums);	
			}
		}
	}
	console.log(count);
	finalArray = [];
	for (y = 0; y < testArr.length; y++){
		if (testPrime(parseInt(testArr[y]))){
			wasPrime = true;
		}
	}
	if (wasPrime){
		return 1;
	} else {
		return 0;
	}
}

//PrimeChecker(98);
//PrimeChecker(598);
//PrimeChecker(10);
//PrimeChecker(9115);
//PrimeChecker(9);
//PrimeChecker(11);
//PrimeChecker(30);
PrimeChecker(44);
