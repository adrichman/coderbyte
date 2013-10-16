/* Have the function LetterCount(str) take the str parameter being 
passed and return the first word with the greatest number of repeated 
letters. For example: "Today, is the greatest day ever!" should return 
greatest because it has 2 e's (and 2 t's) and it comes before ever which 
also has 2 e's. If there are no words with repeating letters return -1. 
Words will be separated by spaces. 

Solving with use of object to practice iterating on object key/value pairs
*/
function LetterCount(str){

	var strWordArr = str.split(" ");
	var wordObjArr = [];
	var repeatLettersCount = 0;
	var mostRepeatsWord;
	for (each in strWordArr){
		wordObj = new Object();
		var key = each;
		wordObj.word = strWordArr[key];
		var theseLetters = String(strWordArr[key]).split('');
		//console.log(theseLetters);
		for (letter in theseLetters){
			(isNaN(wordObj[theseLetters[letter]])) ? wordObj[theseLetters[letter]] = 1 : wordObj[theseLetters[letter]] +=1;
//			(isNaN(wordObj[theseLetters[letter]])) ? 1 : wordObj[letter]+1;
		}
		wordObjArr.push(wordObj);
	}
	//console.log(wordObjArr);
	for (i = 0; i < wordObjArr.length; i++){
		thisCount = 0;
		for (letters in wordObjArr[i]){
			if (wordObjArr[i][letters] > 1){
				thisCount++;
			}

		}
		if (thisCount > repeatLettersCount){
			repeatLettersCount = thisCount;
			mostRepeatsWord = wordObjArr[i].word;
		}
	}
	//console.log(repeatLettersCount);
	//console.log(mostRepeatsWord);
	return mostRepeatsWord || -1 ;

}


//LetterCount('finding good in all things, may we always seek peace and joy, namaste.');
//LetterCount('finding good in all things, may we always seek peace and joy, namaste. I said nnammassttee.');
//LetterCount('aa bbb cccc dddddd eeedeedee ffffffffff');
LetterCount('hello apple pie');
//LetterCount('no words');