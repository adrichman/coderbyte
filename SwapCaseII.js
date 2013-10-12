/*

Using the JavaScript language, have the function SwapII(str) take the 
str parameter and swap the case of each character. Then, if a letter 
is between two numbers (without separation), switch the places of 
the two numbers. For example: if str is "6Hello4 -8World, 7 yes3" the 
output should be 4hELLO6 -8wORLD, 7 YES3. 

*/

function SwapII(str) { 

	var strArr = str.split('');
	var numAndLetter = false;
	var letterAndNum = false;
	var onlyLetters = true;
	var objectAdd = 0;
	var addedObj = true;
	var sawNumber = false;
	var sawSecondNumber = false;


	var numAndLetterObj = {};


	for (i = 0; i < strArr.length; i++){
		console.log("i: " + i);

		strArr[i] = String(strArr[i]);

		if (strArr[i].match(/[ ]/)) {

			onlyLetters = false;
			strArr[i] = " ";
		}		

		if (strArr[i].match(/[a-z]/)){

			strArr[i] = strArr[i].toUpperCase();

		} else {
			strArr[i] = strArr[i].toLowerCase();
		}

		if (!strArr[i].match(/[a-zA-Z0-9]/)) {

			onlyLetters = false;
		}

		if (strArr[i].match(/[0-9]/)){

			if (sawNumber) {
				sawSecondNumber = true;
			} else {
				sawNumber = true;
			}
		}
		
		if (strArr[i+1] != undefined){
			if (strArr[i].match(/[0-9]/) && strArr[i+1].match(/[a-zA-Z]/)) {

				numAndLetter = true;
				
				if (sawNumber && sawSecondNumber){
					objectAdd = 0;
					sawSecondNumber = false;
				}

				numAndLetterObj[objectAdd] = { 'number': strArr[i], 'ind': i };
				objectAdd++;
				var onlyLetters = true;
				hitNumber = true;
				sawNumber = false;

				console.log(numAndLetterObj);
				console.log("sawNumber: " + sawNumber);
				console.log("sawSecondNumber: " + sawSecondNumber);

			} else if (strArr[i].match(/[0-9]/) && strArr[i-1].match(/[a-zA-Z]/)){

				letterAndNum = true;
				numAndLetterObj[objectAdd] = { 'number': strArr[i], 'ind': i };
				objectAdd++;
				console.log(numAndLetterObj);
				sawSecondNumber = false;
			}
		}

		if ((strArr[i+1] == undefined) && strArr[i].match(/[0-9]/)){
			
			console.log('here');
				
			if (sawNumber && sawSecondNumber){
				objectAdd = 0;
				sawSecondNumber = false;
			}

			numAndLetterObj[objectAdd] = { 'number': strArr[i], 'ind': i };
			objectAdd++;
			var onlyLetters = true;
			hitNumber = true;
			sawNumber = false;

			console.log(numAndLetterObj);
			console.log("sawNumber: " + sawNumber);
			console.log("sawSecondNumber: " + sawSecondNumber);


		}


		if (numAndLetterObj[0] != undefined && numAndLetterObj[1] != undefined) {

			strArr[parseInt(numAndLetterObj[0].ind)] = parseInt(numAndLetterObj[1].number);
			strArr[parseInt(numAndLetterObj[1].ind)] = parseInt(numAndLetterObj[0].number);
			strArr[parseInt(numAndLetterObj[0].ind)] = String(strArr[parseInt(numAndLetterObj[0].ind)]);
			strArr[parseInt(numAndLetterObj[1].ind)] = String(strArr[parseInt(numAndLetterObj[1].ind)]);

			delete numAndLetterObj[0];
			delete numAndLetterObj[1];
			numAndLetter = false;
			numAndLetter = false;
			objectAdd = 0;
			sawNumber = false;
			sawSecondNumber = false;

		}

		console.log("objectAdd: " + objectAdd); 

	}
	strStr = strArr.join('');

  return strStr; 
         
}

//SwapII("2S 6 du5d4e");
//SwapII("Hello -5LOL6");
//SwapII("He34lo7 -5LOL689");
//SwapII("COMM2a2");
//SwapII("abcdE 8numbers2");
//SwapII("l2et5ter");
//SwapII("yolO11");
SwapII("123gg" + "))((");
//indicate when having seen a number, no interruption before seeing another number