/* Using the JavaScript language, have the function DivisionStringified(num1,num2) 
take both parameters being passed, divide num1 by num2, and return the result as a 
string with properly formatted commas. If an answer is only 3 digits long, return 
the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 
123456789 and num2 is 10000 the output should be "12,345".  */

function DivisionStringified(num1,num2) { 

	var result = String(Math.round(num1 / num2));
	if (result > Math.pow(2,53)){
		return "Too Big!";

	}

	if (result.length > 3){
		resultArr =[];
		resultReverseArr =[];
		resultReverseArr.push(result);
		resultReverseArr = result.split('');
		resultReverseArr = resultReverseArr.reverse();

		console.log(resultReverseArr);
		var n = resultReverseArr.length % 3;

		for (i = 1; i < resultReverseArr.length; i++){

			//var threeDigits = 1;

			if (resultReverseArr[((i * 3) - 1)] != undefined) {

				resultArr = resultArr.splice(0);
				resultArr.push(resultReverseArr[0]);
				console.log(resultArr);
				console.log(resultReverseArr);

				resultArr.push(resultReverseArr[i]);
				// resultReverseArr.shift();
				// resultReverseArr.shift();
				// resultReverseArr.shift();

				console.log(resultArr);


			} else {

				resultArr.push(resultReverseArr[i]);
				console.log(resultArr);
			}


		}
		//console.log(resultArr);
		resultArr = resultReverseArr.reverse();
		console.log(resultArr);
		// var resultStr = resultArr.join('')
		// console.log(typeof resultStr);
		var decimalCount = 0;


			var finalStr = new String;
			var finalSum = 0;
			var nSum = 0;
			var nDigits = new String;
			var jDigit = new String;
			var jSum = 0;

		if (n != 0) {
			for (k = 0; k < n; k++){

				nSum = (parseInt(resultArr[k])-0 * (Math.pow(10,resultArr.length - 1))-0) - 0;
				console.log("nSum: " + nSum);

				nDigits += String(resultArr[k]); 

				finalSum += nSum - 0;
			}
		}
		finalStr += nDigits + ",";
		console.log("finalStr after nSum: " + finalStr);
		
		for (j = n; j < resultArr.length; j++){
			
			if (decimalCount % 3 == 0 && decimalCount != 0){
				jDigit += ',';
			}
			
			jSum = (parseInt(resultArr[j])-0 * (Math.pow(10,resultArr.length - j - 1))-0) - 0;
			console.log("jSum: " + jSum);

			jDigit += String(resultArr[j]);

			finalSum += jSum - 0;

			decimalCount++;

		}

		finalStr += jDigit;

		if(finalStr.charAt(0) == ","){
			finalStr = finalStr.replace(finalStr.charAt(0), "");
		}
		console.log("finalStr: " + finalStr);


		return finalStr;
		 
	} else {

		return result;
	}
         
}

DivisionStringified(123456789000564560,1000);
//DivisionStringified(503394930,43);