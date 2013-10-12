/*

Using the JavaScript language, have the function ThirdGreatest(strArr) take the array 
of strings stored in strArr and return the third largest word within in. So for example: 
if strArr is ["hello", "world", "before", "all"] your output should be world because 
"before" is 6 letters long, and "hello" and "world" are both 5, but the output should 
be world because it appeared as the last 5 letter word in the array. If strArr was 
["hello", "world", "after", "all"] the output should be after because the first three 
words are all 5 letters long, so return the last one. The array will have at least three 
strings and each string will only contain letters. 


Input = "coder","byte","code" Output = "code"
Input = "abc","defg","z","hijk" Output = "abc"

*/

function ThirdGreatest(strArr) { 

	var words = [];
	var thirdGreatest, thirdGreatestStr, wordNow, wordArr;
	var thirdGreatestArr = [];

	for (var i = 0; i < strArr.length; i++) {
		
		words.push([strArr[i].length, strArr[i]]);
	}

	words = words.sort(function(a,b){return a[0]<b[0]});
	console.log(words);
	for (var i = 0; i < words.length; i++) {
		console.log("iterating");
		wordNow = String(words[i]);
		console.log(wordNow);
		console.log(typeof wordNow);
		wordArr = wordNow.split(',');
		thirdGreatestArr.push(wordArr);
		console.log(thirdGreatestArr);
		console.log("words: "+words);
		
	}

function SortDupes(thirdGreatestArr){
	dupesArr = [];

	for (j = 0; j < thirdGreatestArr.length; j++){

		if(thirdGreatestArr[j][0] == thirdGreatestArr[2][0]){
			
			dupesArr.push(thirdGreatestArr[j][1]);
		}

	}

	console.log("dupesArr: " + dupesArr);
	currentDupe = dupesArr[0];
	console.log('currentDupe: ' + currentDupe);
	console.log("strArr: " + strArr);
		
	for (k = 0; k < dupesArr.length; k++){

			
			if (strArr.indexOf(currentDupe) > strArr.indexOf(dupesArr[k])) {
				console.log('currentDupexxx: ' + currentDupe);
			} else {
				currentDupe = dupesArr[k];
				console.log('currentDupe: ' + currentDupe);
			}

	}

	}	

	console.log("thirdGreatestArr: "+ thirdGreatestArr);
		
	if(thirdGreatestArr[2][0] == thirdGreatestArr[1][0]){
		
		SortDupes(thirdGreatestArr);
		thirdGreatest = currentDupe;
		return thirdGreatest; 

	} else if (thirdGreatestArr.length > 3){
		
		if (thirdGreatestArr[2][0] == thirdGreatestArr[3][0]){
		 	SortDupes(thirdGreatestArr);
		 	
		} else {

			thirdGreatest = thirdGreatestArr[2][1];
			return thirdGreatest; 

		}

	} else {
		
		thirdGreatest = thirdGreatestArr[2][1];
		return thirdGreatest; 
	}
	         
}

ThirdGreatest(["byte","coder","code"]);
//ThirdGreatest(["abc","defg","z","hijk"]);
//ThirdGreatest(["coder","byte","code", "jerk","yeah","you"]);
//ThirdGreatest(["a","bc","def"]);
//ThirdGreatest(["two","three","four"]);
//ThirdGreatest(["a","bcd","efgdggc"]);
//ThirdGreatest(["aaaa","bbbbbb","cc"]);
//ThirdGreatest(["jk","lmn","opqrst"]);
//ThirdGreatest(["battt","catt","mat"]);
//ThirdGreatest(["as","assssvvvvt","affggg"]);

