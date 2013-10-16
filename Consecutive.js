/*
Using the JavaScript language, have the function Consecutive(arr) take 
the array of integers stored in arr and return the minimum number of 
integers needed to make the contents of arr consecutive from the lowest 
number to the highest number. For example: If arr contains [4, 8, 6] 
then the output should be 2 because two numbers need to be added to the 
array (5 and 7) to make it a consecutive array of numbers from 4 to 8. 
Negative numbers may be entered as parameters and no array will have 
less than 2 elements. 

Input = 5,10,15Output = 8
Input = -2,10,4Output = 10
*/

function Consecutive(arr) { 

  var sortedArr = arr.sort(function(a,b){return parseInt(a) - parseInt(b)});
  //console.log(sortedArr);
  var count = 0;
	if(sortedArr.length > 2){
	var difference = sortedArr[sortedArr.length -1] - sortedArr[0] - 2;  
	} else {
		var difference = sortedArr[sortedArr.length -1] - sortedArr[0] - 1;
		return difference;
	}
	for (i = 1; i < sortedArr.length-2; i++){
	  	if(sortedArr[i] != undefined){
	  		count++;
	  	}
	}
  var totalDiff = difference - count;
  return totalDiff; 
         
}
//Consecutive([5,10,15]); //8
//Consecutive([-2,10,40]); //10
//Consecutive([2,10,15]);
//Consecutive([2,5]);
Consecutive([0,3]);
//Consecutive([2,3]);
//Consecutive([-4,10]);