/* Have the function LetterChanges(str) take the str parameter being passed and 
modify it using the following algorithm. Replace every letter in the string with 
the letter following it in the alphabet (ie. c becomes d, z becomes a). Then 
capitalize every vowel in this new string (a, e, i, o, u) and finally return this 
modified string.  */

function LetterChanges(str) { 
  var alphabetStr = " abcdefghijklmnopqrstuvwxyza";
  var alphabetArray = alphabetStr.split("");
  var str = (str).toLowerCase();
  var inputStrArray = str.split('');
  var newStrArray = [];
   
  for (i = 0; i <= inputStrArray.length; i++){
   var inputLetter = inputStrArray[i];
    if (inputLetter === " ") {
     
      var newLetter = " ";
    
    } else if (!/^[a-zA-Z]+$/.test(inputLetter)) {
       
        var newLetter = inputLetter;
      } else if (/^[0-9]+$/.test(inputLetter)){

        var newLetter = inputLetter;

    } else {
                
   
      var n = alphabetArray.indexOf(inputLetter);
      var newLetter = alphabetArray[n+1];
    }
    
    

 
    newStrArray.push(newLetter);
 }
  var newStr = newStrArray.join('');
  var newStrWithVowels = function(str){
        console.log('str: ' + str);
        str.replace(/[aeiou]/g, function(x){
          return x; });
        str.replace(/[AEIOU]/g, function(x){
          return x.toUpperCase(); });
        
        return str;
    }

    return newStrWithVowels(newStr);
}
  
// LetterChanges('My name is Adam, Adam Richman.');
LetterChanges('123456789ae');