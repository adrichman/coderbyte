/*  Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence 
by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters 
between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string 
to the left would be false. The string will not be empty and will have at least one letter.  */


function SimpleSymbols(str) { 
  var strArray = str.split('');
  var status = false;
  var statusWasFalse = false;
  console.log('strArray: ' + strArray);

  for (i = 1; i < strArray.length; i++){
    var countX = 0;
    var countY = 0;
    var char = strArray[i];
    countX == i + 1;
    var charX = strArray[countX];
    countY == i - 1;
    var charY = strArray[countY];
    console.log('chars: '+ charY + ',' + char + ',' + charY);
    if(charX.match(/\+/) && char.match(/^[a-zA-Z]/) && charY.match(/\+/)) {
        statusWasFalse = false; 
    } else if (char.match(/\+/)) {
        statusWasFalse = false;
    } else {
        statusWasFalse = true;
    }
  }
  console.log('statusWasFalse: ' + statusWasFalse);

  if (!statusWasFalse){
      status = true;
    } else {
      status = false;
    }

  return status; 
         
}
   
// console.log('should be true.'); SimpleSymbols("+z+z+z+"); console.log('should be true.');
// console.log('should be true.'); SimpleSymbols("+a++"); 
 console.log('should be true.'); SimpleSymbols("+z+z+==+a+");
// console.log('should be true.'); SimpleSymbols("==a+");