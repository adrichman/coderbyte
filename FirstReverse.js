/* Have the function FirstReverse(str) take the str parameter being 
passed and return the string in reversed order. */

function FirstReverse(str) { 
  
  var strArray = str.split('');
  var newArray = [];
  for (i = 0; i < strArray.length; i++){
    
    newArray.unshift(strArray[i]); 
  }
  var newStr = newArray.join('');

  return newStr; 
         
}

FirstReverse('this is a test');