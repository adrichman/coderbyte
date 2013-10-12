/*

Using the JavaScript language, have the function StringReduction(str) take the str parameter 
being passed and return the smallest number you can get through the following reduction method. 
The method is: Only the letters a, b, and c will be given in str and you must take two different 
adjacent characters and replace it with the third. For example "ac" can be replaced with "b" but 
"aa" cannot be replaced with anything. This method is done repeatedly until the string cannot be 
further reduced, and the length of the resulting string is to be outputted. For example: if str 
is "cab", "ca" can be reduced to "b" and you get "bb" (you can also reduce it to "cc"). The 
reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a", so you have 
"aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b" so the output should be 1. 
*/

function StringReduction(str) { 
	var remainingString = str;
	var newString = "";
	var shortestStr = str.length;
	var nextString = "";
	var same = true;
	var newerString = ""; 
	var replaceLetters = function(a,b){
		debugger;
		//console.log("replacing: " + a + " and " + b);
		if ((a == "a" && b == "b") || (a == "b" && b == "a")){
			return "c";
		} else if ((a == "b" && b == "c")||(a == "c" && b == "b")) {
			return "a";
		} else if((a == "a" && b == "c")||(a == "c" && b == "a")) {
			return "b";
		} else {
			return a+b;
		}
	}
	var iterateStr = function(newStr, remainingStr){
		debugger;
		var wasDiff = false;
		if (remainingStr.length < 2){
			return 1;
		}
		for (i = 0; i < remainingStr.length; i++){
			//console.log("remainingStr: " + remainingStr);
			if (remainingStr.length < 2){
				newStr += remainingStr;
				var nextString = "";
				nextString += newStr;
				//console.log("nextString: " + nextString);
//				return iterateStr(newStr,nextString);
			} else {
				if (remainingStr.charAt(i) != remainingStr.charAt(i+1)){
					wasDiff = true;
					debugger;
					newStr += replaceLetters(remainingStr.charAt(i), remainingStr.charAt(i+1));
					i++;
				} else if (remainingStr.charAt(i) == remainingStr.charAt(i+1)){
					debugger;
					newStr += remainingStr.charAt(i);
				}
			}
			if (remainingStr.charAt(i+1) == undefined){	
				//console.log("calling this!");
				newStr += remainingStr.charAt(i);
				if (!wasDiff) {
					return newStr.length;
				}
			}
			//console.log("newStr: " + newStr);
		}
		var nextString = "";
		nextString += newStr;
		//console.log("nextString: " + nextString);
		if (nextString == remainingStr){
			return nextString.length;
		} else if (nextString.length < 2){
			return 1;
		}
		var emptyStr = "";
		return iterateStr(emptyStr,nextString);
	}
	return iterateStr(newString, remainingString);
}

//StringReduction("abcabc"); // output = 2;
StringReduction("cccc"); // output = 4;
//StringReduction("ababccbbcabab"); //