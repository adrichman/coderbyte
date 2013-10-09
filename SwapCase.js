/*

Using the JavaScript language, have the function SwapCase(str) take the 
str parameter and swap the case of each character. For example: if str 
is "Hello World" the output should be hELLO wORLD. Let numbers and symbols 
stay the way they are. 


*/

function SwapCase(str) { 

	var strArr = str.split('');
	
	for (i = 0; i < strArr.length; i++){

		
		if (strArr[i].match(/[a-z]/)){
			strArr[i] = strArr[i].toUpperCase();
		} else {
			strArr[i] = strArr[i].toLowerCase();
		}

		newStr = strArr.join('');
	}

  return newStr; 
         
}

//SwapCase('Hello-LOL');
SwapCase('Sup DUDE!!?');