/*  Using the JavaScript language, have the function WordCount(str) take the str string parameter 
being passed and return the number of words the string contains (ie. "Never eat shredded wheat" 
would return 4). Words will be separated by single spaces.  */

function WordCount(str) { 

	var count = 0;

	var strArray = str.split(' ');

	for (i = 0 ; i < strArray.length; i++){
		if (strArray[i]){
			count++;			
		}
	}

  
	return count; 
         
}

//console.log('should be 3:'); WordCount('One 22 three');
console.log('should be 2:'); WordCount('Hello World');
