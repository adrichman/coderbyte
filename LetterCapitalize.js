/* Have the function LetterCapitalize(str) take the str parameter being passed and 
capitalize the first letter of each word. Words will be separated by only one space.  */


function LetterCapitalize(str) { 
  
  var strArray = str.split('');
  var newArray = []
  strArray[0] = strArray[0].toUpperCase();
  console.log("strArray[0]: " + strArray[0]);
  
  for (var i = 0; i < strArray.length; i++){
    if (strArray[i] == " "){
      n = i+1;
      newArray.push(strArray[i]);
      newArray.push(strArray[n].toUpperCase());
      i++;
    } else {
      newArray.push(strArray[i]);
    }
  }
  // code goes here
  var newStr = newArray.join('');
  return newStr; 
         
}
   
LetterCapitalize('a b c d e f');    

/* FIXED:
1. When the input was "hello world" your output was incorrect.
2. When the input was "i love coding" your output was incorrect.
3. When the input was "h3llo yo people" your output was incorrect.
4. When the input was "yooooooo hi" your output was incorrect.
5. When the input was "thisiscool" your output was incorrect.
6. When the input was "oxford comma" your output was incorrect.
7. When the input was "letter by letter go" your output was incorrect.
8. When the input was "a b c d e f" your output was incorrect.
9. When the input was "jelloupin here" your output was incorrect.  */