function soal2(param) {
    if(param.length<=2){
      return "invalid input";
    }
    
    var length = param.length;
    var front = Number(param[0]);
    var end = Number(param[length-1]);
    var middle = (length-1)/2;
    var lowMiddle= Math.floor((length-1)/2);
    var highMiddle= Math.ceil((length-1)/2);

    for(var i=0; i<length; i++){
      if(length%2==0){ //even numbers
        if(i===lowMiddle || i===highMiddle){
          param[i] = front * end;
        }
      } else { //odd numbers
        if(i===middle){
          param[i] = front * end;
        }
      }
    }
    return param;
}

console.log(soal2([34,'','','',40]))
// [34,'',1360,'',40]

console.log(soal2([1,2,3,4,5]))
// // [1,2,5,4,5]

console.log(soal2([20,'','','','','','',30]))
// // [20,'','',600,600,'','',30])

console.log(soal2([6,'','','','','',9]))
// [6,'','',54,'','',9]

console.log(soal2([1,2])) // invalid input 
console.log(soal2([1])) // invalid input 
console.log(soal2([])) // invalid input 
