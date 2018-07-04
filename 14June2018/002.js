function soal2(param) {
	
    var result = []
    if(param % 2 === 0){
      return 'Invalid Imput'
    } else {
      for(var i = 1; i <= param; i=i+2){
        var checkpoint = []
        for(var j = 0; j < ((param-i)/2); j++ ){
          checkpoint.push('')
        }
        for(var k = 0; k < i; k++){
          checkpoint.push('*')
        }
        for(var l = 0; l < ((param-i)/2); l++ ){
          checkpoint.push('')
        }
        result.push(checkpoint)
      }
    }
    return result
  }
console.log(soal2(5))
/*

  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input


/*
// The second ways
function soal2(param)
{
	var output = [];
    if(param % 2 === 0){
    	return "invalid input";
    }
    
    else{
    	var buffer = [];
    	for(var k = 0 ; k < param ; k++, buffer.push(""));
    	for(var i = Math.trunc(param/2), j = Math.trunc(param/2); i >= 0 ; i--, j++){
    		buffer[i] = buffer[j] = "*";
    		output.push(buffer.slice());
    	}

    }
    return output;
}

console.log(soal2(9))
*/