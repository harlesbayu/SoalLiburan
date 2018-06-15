function soal1(param) {
    // your code here..
    var position = Math.floor(param / 2)
    var position2 = Math.ceil(param / 2)
    var array = []
  
    if(param % 2 !== 0){
      for(var i = 0; i < param; i++){
        if(i == position){
          array.push('*')
        } else {
          array.push('')
        }
      }
    }
  
    else if(param === 0) {
      return "invalid input"
    }
  
    else if(param % 2 == 0) {
      for(var i = 0; i < param; i++){
        if(i == position || i == (position - 1)){
          array.push('*')
        } 
        else {
          array.push('')
        }
      }
    } 
    
    return array
    
  }
  
  // test case
  console.log(soal1(5)) // ['','','*','','']
  console.log( soal1(4)) // ['','*','*','']
  console.log( soal1(7)) // ['','','','*','','','']
  console.log( soal1(10)) // ['','','','','*','*','','','','']
  console.log( soal1(0)) // invalid input 
  console.log( soal1(1)) // ['*']

/*
// The second ways
function soal1(param)
{
  var print=[];
  // var middle = (param-1)/2;
  var lowMiddle = Math.floor((param-1)/2);
  var highMiddle = Math.ceil((param-1)/2);
  
  if(param===0){
    return "invalid input";
  } 
  
  for(var i=0;i<param;i++){
     if(i===lowMiddle || i===highMiddle){
        print.push("*");
      } else {
        print.push(" ");
      }
  }
  return print;
}

// test case
console.log( soal1(5) ) //  ['','','*','','']
console.log( soal1(4)) // ['','*','*','']
console.log( soal1(7)) // ['','','','*','','','']
console.log( soal1(10)) // ['','','','','*','*','','','','']
console.log( soal1(0)) // invalid input 
console.log( soal1(1)) // ['*']
*/
