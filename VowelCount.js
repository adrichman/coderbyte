/*  Using the JavaScript language, have the function VowelCount(str) take the 
str string parameter being passed and return the number of vowels the string 
contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel 
for this challenge.  */

function VowelCount(str) { 

  var count = 0

  var strArray = str.split('');

  for (i = 0; i < strArray.length; i++){

  	if(/[aeiouAEIOU]/.test(strArray[i])){
  		count++;
  	}

  }

  return count; 
         
}

VowelCount('coderbyte');