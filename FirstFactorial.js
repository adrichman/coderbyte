/*  Have the function FirstFactorial(num) take the num parameter being passed and 
return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test 
cases, the range will be between 1 and 18.  */

function FirstFactorial(num) { 

  //take input num and multiply it by all integers greater than 0 and less than itself
  // decrement num by 1, loop: multiply result by num, decrement result by 1
    var num = num;
  var newNum = 1;
    for (i = 1; i <= num; i++){
    
      newNum *= i;  
    }
  return newNum; 
         
}
   
FirstFactorial(15);