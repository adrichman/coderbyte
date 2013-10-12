/*

Using the JavaScript language, have the function TripleDouble(num1,num2) take both 
parameters being passed, and return 1 if there is a straight triple of a number at 
any place in num1 and also a straight double of the same number in num2. For example: 
if num1 equals 451999277 and num2 equals 41177722899, then return 1 because in the 
first parameter you have the straight triple 999 and you have a straight double, 99, 
of the same number in the second parameter. If this isn't the case, return 0. 

Input = 465555 & num2 = 5579 Output = 1
Input = 67844 & num2 = 66237 Output = 0

*/

function TripleDouble(num1,num2) { 

	// num1status = false;
	// num2status = false;

	num1Str = String(num1);
	num2Str = String(num2);

	//console.log(num1Str);
	//console.log(num2Str);

	for (i = 0; i < num1Str.length - 1; i++){


		if (num1Str[i+2]) {
			if (num1Str[i+1]) {
				if (num1Str[i] == num1Str[i+1] && num1Str[i] ==  num1Str[i+2]) {
			
					console.log(num1Str[i] + " " + num1Str[i+1] + " " + num1Str[i+2]);

					for (j = 0; j < num2Str.length; j++){
						
						if (num2Str[j+1]) {
							if (num2Str[j] == num2Str[j+1]) {

								console.log(num2Str[j] + " " + num2Str[j+1]);
								return 1;

							}
						}
					}
				}
			}
		}
	}
	
	return 0;  
}

//TripleDouble(465555,5579);
TripleDouble(67844,66237);
//TripleDouble(556668,556886);
//TripleDouble(3776777,87766);
//TripleDouble(678444,6237);