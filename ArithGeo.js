function ArithGeo(arr) { 
var type;
var diff = new Array();
var div = new Array();
var geo = true;
var arith = true;
var geoWasFalse = false;
var arithWasFalse = false;
  for (i = 0; i < arr.length-1; i++){
    var n = i+1;
    diff.push(arr[n] - arr[i]);
    div.push(arr[n] / arr[i]);     

  }  
console.log('arith: ' + diff);
console.log('geo: ' + div);


var y = diff[0];
var diffResult = diff.reduce(function(prevresult,cur){
   
   var result = y / cur;
  return result;
}, y)

    if (diffResult == 1){
      arithWasFalse = false;
      console.log('arithWasFalse: '+ arithWasFalse);
    } else {
      arithWasFalse = true;
    }

var x = div[0];
var divResult = div.reduce(function(prevresult,cur){
   
   var result = x / cur;
  return result;
}, x)

    if (divResult == 1){
      geoWasFalse = false;
      console.log('geoWasFalse: '+ geoWasFalse);
    } else {
      geoWasFalse = true;
    }


  if (!geoWasFalse) {
    type = "Geometric";
  } else if (!arithWasFalse) {
    type = "Arithmetic";
  } else {
    type = -1;
  }

return type;         
}
ArithGeo([5,10,15,20,25,30]);
//ArithGeo([2,6,18,54]);
//ArithGeo([1,2,3,100]);