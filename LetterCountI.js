function LetterCountI(str){

	var strArray = str.split(' ');
	//console.log(strArray);
	var mostMatches;
	var globalCount = 0;
	var thisCount = 0;

	var checkLetter;

	for(var wordCount = 0; wordCount < strArray.length; wordCount++){
		
		originalWord = (strArray[wordCount]).toString().toLowerCase();
		thisWord = originalWord;

			thisCount = 0;

		var lettersMatched = [];
		for (i = 0; i < originalWord.length; i++){
			
				if(thisWord.length > 1){

					//console.log(thisWord + " length: " + thisWord.length);

					
					for (j = 0; j < thisWord.length; j++){
						

						thisLetter = String(thisWord.charAt(j));

						if (!thisLetter.match(/[a-zA-Z]/)) {
							//console.log(thisLetter);
							thisWord = thisWord.slice(0,thisWord.indexOf(thisLetter));
							
						}
					}
					
						for (k = 1; k < thisWord.length; k++){

							checkLetter = '"' + thisWord[0] + '"';
							var matchLetter = '"' + thisWord[0] + '"';
							//console.log('lettersMatched: ' + lettersMatched);
							//console.log(!lettersMatched[lettersMatched.indexOf(checkLetter)]);


							if (checkLetter == '"' + thisWord[k] + '"' && !lettersMatched[lettersMatched.indexOf('"' + thisWord[k] + '"')] 
								&& (lettersMatched[lettersMatched.indexOf('"' + thisWord[k])] + '"' != "")) {

								thisCount++;
								lettersMatched.push(checkLetter);
								//console.log("thisCount: " + thisCount);
								
								debugger;

							}
						}
						debugger;
						if(thisWord.length > 1){
							//console.log('thisWord: ' + thisWord);
							thisWord = thisWord.slice(1);
						}

				} else {

					if (thisWord != undefined){			
						//console.log(thisWord + " after slice");
						//console.log(thisWord + " length: " + thisWord.length);
					}
					if (thisCount > globalCount){
						globalCount = thisCount;
						mostMatches = originalWord;
					}
					
				}		

			}		
		//console.log(originalWord + " matches: " + thisCount);		
	}
	if (mostMatches == undefined){
		return -1;
	} else {
		return mostMatches + " " + globalCount;
	}
}
//LetterCountI('finding good in all things, may we always seek peace and joy, namaste.');
//LetterCountI('finding good in all things, may we always seek peace and joy, namaste. I said nnammassttee.');
LetterCountI('aa bbb cccc dddddd eeedeedee ffffffffff');
//LetterCountI('hello apple pie');
//LetterCountI('no words');