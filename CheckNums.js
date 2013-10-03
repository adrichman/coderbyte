/* Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if 
num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each 
other then return the string -1. */

function CheckNums(num1,num2) { 
  var statusStr = "false";
  
  if (num2 > num1) {
    statusStr = "true"
      } else if (num2 === num1){
        statusStr = "-1"
      }
  
  return statusStr; 
         
}
CheckNums(25,126);