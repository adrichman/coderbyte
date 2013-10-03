/* Using the JavaScript language, have the function ABCheck(str) take the str parameter being 
passed and return the string true if the characters a and b are separated by exactly 3 places 
anywhere in the string at least once (ie. "lane borrowed" would result in true because there 
is exactly three characters between a and b). Otherwise return the string false.  */

function ABCheck(str) { 
  var status = false;
  var strArray = str.split('');
  var checkArray =[];
  for (i = 0; i < strArray.length; i++){
    n = i + 4;  
    checkArray.push(strArray[i]);
    checkArray.push(strArray[n]);
console.log(checkArray);
//var correctArray = new RegExp('aAbB');
//console.log(correctArray);
    if (checkArray.indexOf('a') === 0 || checkArray.indexOf('A') === 0) {
      if (checkArray.indexOf('b') === 1 || checkArray.indexOf('B') === 1) {
        status = true;
        }
      } else if (checkArray.indexOf('b') === 0 || checkArray.indexOf('B') === 0) {
      if (checkArray.indexOf('a') === 1 || checkArray.indexOf('A') === 1) {
        status = true;
        }

}
    checkArray.pop();
    checkArray.pop();
    
  }

  
  
  return status;
}

//console.log('should be false: '); ABCheck('after badly');
console.log('should be true: '); ABCheck('Laura sobs');