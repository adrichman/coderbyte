/* Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed 
and return the string true if the parameter is a palindrome, (the string is the same forward as it is 
backward) otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation 
and numbers will not be part of the string. 
 */

function Palindrome(str) { 

	var isPalindrome = false;
	var wasFalse = false; 

	var strArray = str.split('');

	for (i = 0; i < strArray.length; i++){
		for (j = strArray.length - 1; j > -1; j-- ){

			if (strArray[i] == " "){
				i++;

			} else if(strArray[j] == " ") {
				j--;
			}

			if (strArray[i] == strArray[j]){
				isPalindrome = true;
				i++;
			} else {
				wasFalse = true;
			}

		}
	}
	if (!wasFalse) {
		  return isPalindrome; 
	} else {
		return false;
	}


}

//Palindrome('never odd or even');
//Palindrome('eye');
Palindrome('Adam Richman');     