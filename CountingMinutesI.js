/*  Using the JavaScript language, have the function CountingMinutesI(str) take the str 
parameter being passed which will be two times (each properly formatted with a colon and 
am or pm) separated by a hyphen and return the total number of minutes between the two 
times. The time will be in a 12 hour clock format. For example: if str is 9:00am-10:00am 
then the output should be 60. If str is 1:00pm-11:00am the output should be 1320. 
*/

function CountingMinutesI(str) { 

  // code goes here  
//  var timeObj = new Object;

  var timeArr = str.split(/(:|pm|am|-)/);
//  console.log(timeArr);

//["5", ":", "30", "pm", "", "-", "6", ":", "00", "am", ""]


var amBeforePm = false;
var pmBeforeAM = false;
var amSamePm = false; 
var timeDiff = 0;

switch (true){

	case (Math.floor(timeArr[0]) != 12):
		var time1HRS = Math.floor(timeArr[0] * 60);
		break;
	case (Math.floor(timeArr[0]) == 12):
		var time1HRS = 0;
		break;
}

switch (true){
	
	case (Math.floor(timeArr[6]) != 12):
		var time2HRS = Math.floor(timeArr[6] * 60);
		break;
	case (Math.floor(timeArr[6]) == 12):
		var time2HRS = 0;
		break;
}

var time1MINS = Math.floor(timeArr[2]);
var time2MINS = Math.floor(timeArr[8]);

var time1Total = time1HRS + time1MINS;
var time2Total = time2HRS + time2MINS;

var amFirstFromMidnight = ((time1HRS) + time1MINS);
var amFirstFromNoon = 720 - (time1HRS) - time1MINS;
var pmFirstFromMidnight = 720 - (time1HRS) - time1MINS;
var pmFirstFromNoon = (time1HRS) + time1MINS;

var pmSecondFromMidnight = (720) + (time2HRS) + time2MINS;
var pmSecondFromNoon = (time2HRS) + time2MINS;
var amSecondFromMidnight = ((time2HRS) + time2MINS);
var amSecondFromNoon = 720 + (time2HRS) + time2MINS;
// console.log("amFirstFromMidnight: " + amFirstFromMidnight);
// console.log("amFirstFromNoon: " + amFirstFromNoon);
// console.log("pmFirstFromMidnight: " + pmFirstFromMidnight);
// console.log("pmFirstFromNoon: " + pmFirstFromNoon);
// console.log("amFirstFromMidnight: " + amFirstFromMidnight);
// console.log("amSecondFromNoon: " + amSecondFromNoon);
// console.log("amSecondFromMidnight: " + amSecondFromMidnight);
// console.log("pmSecondFromNoon: " + pmSecondFromNoon);
// console.log("pmSecondFromMidnight: " + pmSecondFromMidnight);

	switch (true){

		case (timeArr[3] == "am" && timeArr[9] == "am"):

			amSamePm = true;
//			console.log("amSamePm: " + amSamePm);
			
			switch (true){

				case time1Total > time2Total:

					timeDiff = amFirstFromNoon + 720 + amSecondFromMidnight;
					break;

				case time2Total > time1Total:

					timeDiff = amSecondFromMidnight - amFirstFromMidnight;

					break;
			}

			break;

		case (timeArr[3] == "am" && timeArr[9] == "pm"):

			amBeforePm = true;
//			console.log("amBeforePm: " + amBeforePm);

			timeDiff = amFirstFromNoon + pmSecondFromNoon;

			break;

		case (timeArr[3] == "pm" && timeArr[9] == "am"):

			pmBeforeAM = true;
//			console.log("pmBeforeAM: " + pmBeforeAM);
			

			timeDiff = pmFirstFromMidnight + amSecondFromMidnight;

			break;
		
		case (timeArr[3] == "pm" && timeArr[9] == "pm"):
			amSamePm = true;
//			console.log("amSamePm: " + amSamePm);
			
			switch (true){

				case time1Total > time2Total:

					timeDiff = pmFirstFromMidnight + pmSecondFromNoon + 720;
					break;

				case time2Total > time1Total:

					timeDiff = pmSecondFromNoon - pmFirstFromNoon;

					break;
			}

			break;	
	}

	return timeDiff;


}
// "2:03pm-1:39pm"
// "2:00pm-3:00pm"
// "11:00am-2:10pm"
// "12:31pm-12:34pm"
// "5:00pm-5:11pm"
//CountingMinutesI("12:30am-12:00pm");
CountingMinutesI("2:00pm-3:00pm"); // 
//CountingMinutesI("1:23am-1:08pm"); // 