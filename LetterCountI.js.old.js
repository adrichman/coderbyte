/* Using the JavaScript language, have the function LetterCountI(str) take the str 
parameter being passed and return the first word with the greatest number of repeated letters. 
For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's 
(and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating 
letters return -1. Words will be separated by spaces. */

function LetterCountI(str) { 

	var wordArray = str.split(' ');
	var wordArrayArray = [];
	for (w = 0; w < wordArray.length; w++){

		var thisWord = wordArray[w];

		wordArrayArray[w] = [thisWord, 0];
		console.log("word is: " + thisWord);  
	}
	console.log("this is the word object: [" + wordArrayArray + "]");

	var countedArray = [''];
	for (i = 0; i < wordArray.length; i++){

		letterArray = wordArray[i].split('');
		var count = 0;
		var thisWord = { "Count": 0 };
		letterArrayCount = 0;

		while (thisWord.Count < letterArray.length){
			console.log('letterArray: ' + letterArray);

			for (j = letterArray.length; j > 0; j--){
				var checkLetter = letterArray[0];
				console.log('checkLetter: ' + checkLetter);
				
				if (!/[a-zA-Z]/.test(checkLetter)){
					letterArray.splice(0,1);
					//checkLetter = letterArray[0];
				} else if (checkLetter == letterArray[j-1]){
					count++;
					console.log('count: ' + count);
					letterArray.splice(letterArray.indexOf(checkLetter), 1);
					letterArray.splice(j, 1);

					// j++;
					//console.log('letterArray: ' + letterArray);
				} else {
					letterArray.splice(0,1);
					console.log('no count');
				}
			}
			
			var moveLetter = letterArray.splice(0,1);
			letterArray.push(moveLetter);
			thisWord.Count++;

		}
		console.log('countedArray: ' + countedArray);
		console.log('wordArrayArray: ' + wordArrayArray);
		console.log('count: ' + count);

		if (countedArray[0] == "") {
			countedArray[0] = wordArray[i];
			console.log('countedArray: ' + countedArray);
			
		} else if (count > countedArray[countedArray.length - 1].length) {
				//countedArray.push(wordArray[i]);
				//console.log('countedArray: ' + countedArray);
				wordArrayArray[w][0].pop();
				wordArrayArray[w][0].push(count);

		} else {
			countedArray.unshift(wordArray[i]);
			console.log('countedArray: ' + countedArray);
		}

	}

	var biggestIndex = countedArray.length - 1;
	var largestWord = countedArray[biggestIndex];
	console.log(wordArrayArray);
	return largestWord; 
         
}
   
LetterCountI('seekineg goodness in all things, may we always find peace and joy, namaste.');
//LetterCountI('No words');
//LetterCountI('Hello apple pie');
