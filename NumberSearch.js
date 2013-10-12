/*

Using the JavaScript language, have the function NumberSearch(str) take the 
str parameter, search for all the numbers in the string, add them together, 
then return that final number. For example: if str is "88Hello 3World!" the 
output should be 91. You will have to differentiate between single digit 
numbers and multiple digit numbers like in the example above. So "55Hello" 
and "5Hello 5" should return two different answers. Each string will contain 
at least one letter or symbol. 


*/

function NumberAddition(str) { 

	var totalSum = 0;
	
	var currentNum = 0;
	
	for (var i = 0; i < str.length; i++) {
	
		if (str[i].match(/[0-9]/)){

			currentNum = parseInt(str[i]);
			//console.log("currentNum: " + currentNum);

			
			if (str[i+1] && str[i+1].match(/[0-9]/)) {			
				remainingStr = str.substring(i+1);
				//console.log("remainingStr: " + remainingStr);

					if (remainingStr[0].match(/[0-9]/)) {
						//console.log('matched');
						nextNum = parseInt(remainingStr[0]);
						currentNum = currentNum * 10 + nextNum;
						//console.log("currentNum: " + currentNum);
						totalSum += currentNum;
						//console.log("totalSum: " + totalSum);
						i++;

					
					}

			} else {
				totalSum += currentNum;
				//console.log("totalSum: " + totalSum);
			}
		
		}
	
	}

	return totalSum; 
         
}



NumberAddition("75Number9"); //output = 84
//NumberAddition("10 2One Number*1*"); // output = 13
//NumberAddition();
//NumberAddition();
