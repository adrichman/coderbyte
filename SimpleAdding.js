/*  Have the function SimpleAdding(num) add up all the numbers from 1 to num. 
For the test cases, the parameter num will be any number from 1 to 1000.  */

function SimpleAdding(num) { 

  //save input num to variable
  //iterate from 1 to num
  // add i to variable
  
  var inputNum = num;
  
  for (i = 0; i < num; i++){
    inputNum += i;
  }
  
  return inputNum; 
         
}
   
SimpleAdding(64);