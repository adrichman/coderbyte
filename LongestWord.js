/* Have the function LongestWord(sen) take the sen parameter being passed 
and return the largest word in the string. If there are two or more words 
that are the same length, return the first word from the string with that 
length. Ignore punctuation and assume sen will not be empty.  */

function LongestWord(sen){ 
  var senArray = sen.split(' ');
  console.log('senArray[0]: ' + senArray[0]);
  var longestWord = { 'longWord': senArray[0] };
  console.log(longestWord.longWord);
  console.log(longestWord.longWord.length);
  console.log(senArray.length);
  var testWord = { 'longWord': longestWord.longWord } ;
  console.log('testWord: ' + testWord.longWord);
  console.log(senArray);

 for (i = 1; i < senArray.length; i++){
   console.log(senArray);
   testWord.longWord = senArray[i];
   console.log('testword: ' + testWord.longWord);
    if (longestWord.longWord.length < testWord.longWord.length ){
        longestWord.longWord = testWord.longWord;
        return longestWord.longWord;
    } 
    // else {
      
    //   return longestWord.longWord;
    // } 
  }
  
  
  
   return longestWord.longWord; 
         
}
LongestWord('a b c dee');
//LongestWord('coderbyte');
//LongestWord('this is some sort of sentence');