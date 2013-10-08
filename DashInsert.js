/*
Using the JavaScript language, have the function DashInsert(num) insert dashes ('-') 
between each two odd numbers in num. For example: if num is 454793 the output should be 
4547-9-3. Don't count zero as an odd number. 
*/

function DashInsert(num) { 

	var numStr = String(num);
	var numArr = numStr.split('');
//	console.log(numArr);
	var checker = 0;
	var nextChecker = 0;
	var checkedArr = [];

	if (numArr.length > 1){
		
		for (i = 0; i < numArr.length; i++){

			checker = numArr[i];
//			console.log("checker: " + checker);
			nextChecker = numArr[i+1];
//			console.log("nextChecker: " + nextChecker);
			
			if (checker % 2 != 0 && nextChecker % 2 !=0 && nextChecker != undefined){

				checkedArr.push(checker + "-");
	//			console.log(checkedArr);

			} else {

				checkedArr.push(checker);
	//			console.log(checkedArr);
			}
		}

//		checkedArr.push(numArr[numArr.length -1]);

	} else {
		checkedArr.push(numArr[0]);	
	//			console.log(checkedArr);	

	}
	
	checkedStr = checkedArr.join('');


	return checkedStr; 
}

//DashInsert(56730);
//DashInsert(99946);
//DashInsert(567);
//DashInsert(779933);
//DashInsert(667488958374553);
//DashInsert(60497);
//DashInsert(399047);
//DashInsert(2129);
//DashInsert(77993);

