/*
Using the JavaScript language, have the function DashInsertII(num) 
insert dashes ('-') between each two odd numbers and insert asterisks 
('*') between each two even numbers in num. For example: if num is 
4546793 the output should be 454*67-9-3. Don't count zero as a negative 
or positive number. 
*/


function DashInsertII(num) { 

	var numStr = String(num);
	var numArr = numStr.split('');
	var checkedArr = [];

//	console.log(numArr);

	if (numArr.length > 1) {
		for (i = 0; i < numArr.length - 1; i++){

			var checker = numArr[i];
			var nextChecker = numArr[i+1];

			if (checker % 2 == 0 && nextChecker % 2 == 0 && checker != 0 && nextChecker != 0 && nextChecker != undefined){
				checkedArr.push(checker + '*');				
					//break;
			} else if (checker % 2 != 0 && nextChecker % 2 != 0 && checker != 0 && nextChecker != 0 && nextChecker != undefined){
				checkedArr.push(checker+'-');
			} else {
				checkedArr.push(checker);
			}

			// if (nextChecker != undefined){

			// 	checkedArr.push(nextChecker);
			// }

		}

		checkedArr.push(numArr[numArr.length - 1]);

	} else {

		checkedArr.push(numArr[0]);

	}

	var checkedStr = checkedArr.join('');

	return checkedStr; 
         
}

//DashInsertII(99946);
//DashInsertII(56647304);
//DashInsertII(56730);
//DashInsertII(567);
//DashInsertII(779933);
//DashInsertII(667488958374553);
//DashInsertII(60497);
//DashInsertII(399047);
DashInsertII(2129);
//DashInsertII(77993);