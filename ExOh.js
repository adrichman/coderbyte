/*  Using the JavaScript language, have the function ExOh(str) 
take the str parameter being passed and return the string true 
if there is an equal number of x's and o's, otherwise return 
the string false. Only these two letters will be entered in 
the string, no punctuation or numbers. 

For example: if str 
is "xooxxxxooxo" then the output should return false because 
there are 6 x's and 5 o's.  */

function ExOh(str) { 

	var countX = 0;
	var countO = 0;
	var isEven = false;
	var strArray = str.split('');
	console.log(strArray);

	for(i = 0; i < strArray.length; i++){
		var testSpace = strArray[i];
		console.log(testSpace);
		if (/^[xX]/.test(testSpace)){
			countX++;
		} else if (/^[oO]/.test(testSpace)){
			countO++;
		} else {
			continue;
		}
	}
	console.log(countX);
	console.log(countO);
	if (countX === countO) {
		isEven = true;
	}

  return isEven; 
         
}

//ExOh('xoxoxoxo');
ExOh('x');