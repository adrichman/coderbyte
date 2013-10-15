/*
Using the JavaScript language, have the function CountingMinutes(str) take the 
str parameter being passed which will be two times (each properly formatted with 
a colon and am or pm) separated by a hyphen and return the total number of minutes 
between the two times. The time will be in a 12 hour clock format. For example: 
if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am 
the output should be 1320. 
*/
function CountingMinutes(str) { 

	var timeStr = str;
	var timeArr = timeStr.split("-");
	// ["12:30pm", "12:00am"]
	var timesObjArr = [];
	var diffHours = 0;
	var diffMins = 0;
	var diffTotal = 0;
	for (each in timeArr){
		var key = each;
		var timeObj = new Object;
		var nowTimeArr = String(timeArr[key]).split(/:/);
		timeObj["hrs"] = parseInt(nowTimeArr[0]);
		timeObj["mins"] = parseInt(nowTimeArr[1]);
		timeObj["am"] = false;
		timesObjArr.push(timeObj);			
		nowTimeArr[1].match(/am/) ? timesObjArr[key].am = true : timesObjArr[key].am = false;
		timeObj.hrs == 12 ? timeObj.hrs = 0 : timeObj.hrs = timeObj.hrs;

		//console.log(String(timesObjArr[key]['clock']));
	}
	function DiffTime(time1Hrs,time1Mins,time2Hrs,time2Mins){
			if(time1Hrs > time2Hrs){
				laterTime = time1;
				earlierTime = time2;
			} else if (time1Hrs == time2Hrs) {
				if(time1Mins > time2Mins){
					laterTime = time1;
					earlierTime = time2;
				} else {
					laterTime = time2;
					earlierTime = time1;
				}
			} else {
				laterTime = time2;
				earlierTime = time1;
			}
		diffHours = Math.abs(laterTime.hrs - earlierTime.hrs);
		diffMins = Math.abs(laterTime.mins - earlierTime.mins);
		diffTotal = (diffHours*60)+(diffMins); 
		 if (time1 == earlierTime) { 
			return diffTotal; 
		 } else {
		 	return 1440 - diffTotal;
		 }
		
	}
	var time1 = timesObjArr[0];
	var time2 = timesObjArr[1];

	switch(true) {
		case (time1.hrs == time2.hrs && time1.mins == time2.mins):
			return 0;
		
		case (time1.am && time2.am):

			return DiffTime(time1.hrs, time1.mins, time2.hrs, time2.mins);

		case (!time1.am && !time2.am):

			return DiffTime(time1.hrs, time1.mins, time2.hrs, time2.mins);
		
		case (time1.am && !time2.am):
			return Math.abs(720 - DiffTime(time1.hrs, time1.mins, time2.hrs, time2.mins));
		

		case (!time1.am && time2.am):
			return Math.abs(720 - DiffTime(time1.hrs, time1.mins, time2.hrs, time2.mins));
	}
	
//console.log(timesObjArr);
         
}
//CountingMinutes("12:34pm-12:31pm"); // Output = 1437
//CountingMinutes("6:11pm-6:00pm"); // Output = 1429  
//CountingMinutes("6:00pm-6:11pm"); // Output = 11  
//CountingMinutes("7:30am-12:00pm"); // Output = 270   
//CountingMinutes("12:30pm-12:00am"); // Output = 690
CountingMinutes("1:23am-1:08am"); // Output = 1425
//CountingMinutes("5:23am-1:08am"); // Output = 1185