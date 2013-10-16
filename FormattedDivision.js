/*
Using the JavaScript language, have the function FormattedDivision(num1,num2) 
take both parameters being passed, divide num1 by num2, and return the result 
as a string with properly formatted commas and 4 significant digits after the 
decimal place. For example: if num1 is 123456789 and num2 is 10000 the output 
should be "12,345.6789". The output must contain a number in the one's place 
even if it is a zero. 
Input = 2 & num2 = 3Output = "0.6667"
Input = 10 & num2 = 10Output = "1.0000"
*/

function FormattedDivision(num1, num2){

	var divideNums = String((num1 / num2).toFixed(4));
	var decimalIndex = divideNums.indexOf('.');
	function InsertCommas(num){
		var num = num;
		if(num.length < 8){
			return num;
		} else {
			for (i = 1; i < ((num.length-4) / 3); i++){		
				thisIndex = decimalIndex - (i*3);
				if (!isNaN(num.charAt(thisIndex)) && thisIndex < decimalIndex && thisIndex > 0){
					num = String(num.slice(0, thisIndex) + "," + num.slice(thisIndex));
				} else {
					return num;
				}
			}
			while (isNaN(num.charAt(0))) {
				num = num.slice(1);
			}
			return num;
		}
	}
	return(InsertCommas(divideNums));
}

//FormattedDivision(2,3); // 0.6667
//FormattedDivision(10,10); //1.0000
FormattedDivision(1234567890003000534000000,10000); // 12,345.6789
//FormattedDivision(503394930,43); //
//FormattedDivision(9112,2); //
//FormattedDivision(101077282,21123); //

