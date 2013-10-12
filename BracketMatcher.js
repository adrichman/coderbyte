/* 
Using the JavaScript language, have the function BracketMatcher(str) take the str parameter being 
passed and return 1 if the brackets are correctly matched and each one is accounted for. Otherwise 
return 0. For example: if str is "(hello (world))", then the output should be 1, but if str is 
"((hello (world))" the the output should be 0 because the brackets do not correctly match up. 
Only "(" and ")" will be used as brackets. If str contains no brackets return 1. 

Input = "(coder)(byte))"Output = 0
Input = "(c(oder)) b(yte)"Output = 1
*/
function BracketMatcher(str){
	bracket1Arr = [];
	bracket2Arr = [];
ß	for (i=0; i<str.length;i++){

		if(str.charAt(i) == "("){
			bracket1Arr.push(str.charAt(1));
		} else if (str.charAt(i) == ")"){
			bracket2Arr.push(str.charAt(1));
		}
		if(bracket2Arr.length > bracket1Arr.length){
			return 0;
		}

	}
	if (bracket1Arr.length == bracket2Arr.length){
		return 1;
	} else {
		return 0;
	}

}

//BracketMatcher("(coder)(byte))");
//BracketMatcher("(c(oder)) b(yte)");
//BracketMatcher("(c(o(())((der)) b(y))te)");
BracketMatcher("the color re(d))()(()");