/* Have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. If there are two or more words 
that are the same length, return the first word from the string with that 
length. Ignore punctuation and assume sen will not be empty.  */

// THIS ONE IS BROKEN

function LongestWord(sen){ 
  var senArray = sen.replace(/[^\w\s]|_/g, "").split(' ');
  console.log(senArray);
  var longestWord = senArray[0];
  longestWord.toString();
  for (i = 0; i <= senArray.length; i++){
    var testWord = senArray[i];
    if (longestWord.length < testWord.length ){
        longestWord = testWord;
//        return longestWord;
    } 
    // else {
    //   return longestWord;
    // } 
  }
  
  
  
  return longestWord; 
         
}

LongestWord('this is some sort of sentence');