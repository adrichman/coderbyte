/*
Using the JavaScript language, have the function NumberSearch(str) take the str parameter, 
search for all the numbers in the string, add them together, then return that final number 
divided by the total amount of letters in the string. For example: if str is 
"Hello6 9World 2, Nic8e D7ay!" the output should be 2. First if you add up all the numbers, 
6 + 9 + 2 + 8 + 7 you get 32. Then there are 17 letters in the string. 32 / 17 = 1.882, and 
the final answer should be rounded to the nearest whole number, so the answer is 2. Only 
single digit numbers separated by spaces will be used throughout the whole string (So this 
won't ever be the case: hello44444 world). Each string will also have at least one letter. 

Input = "H3ello9-9"Output = 4
Input = "One Number*1*"Output = 0
*/

function NumberSearch(str){
	abcArr = [];
	numArr = [];
	for (i = 0; i < str.length; i++ ){
		if (str.charAt(i).match(/[a-zA-Z]/)){
			abcArr.push(str.charAt(i));
		} else if (str.charAt(i).match(/[0-9]/)){
			numArr.push(str.charAt(i));
		}

	}
	//console.log("abcArr" + abcArr);
	//console.log("numArr: " + numArr);
	var divisor = abcArr.length;
	//console.log("divisor: " + divisor);
	numSum = 0;
	for (j = 0; j < numArr.length; j++){
		numSum += parseInt(numArr[j]);
		//console.log("numSum: " + numSum);
	}
	return Math.round(numSum / divisor);

}

//NumberSearch("H3ello9-9");
NumberSearch("One Number*1*");