/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris
    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param) {
    // your code here
    var pemisah = Math.ceil(param / 2) //5
    
    if (param % 2 === 0 ) {
      return 'invalid input'
    } 
    else {
      for(var i = 1; i <= param; i++){
        var asterisk = ''
        if(i === pemisah){
          for(var j = 0; j < param; j++) {
            asterisk += '*'
          }
        }

        else {
          for(var j = 1; j <= param; j++){
            if(j === pemisah) {
              asterisk += '*'
            }
            else {
              asterisk += ' '
            }
          }
        }
        console.log(asterisk)
      }
    }

}

console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input

/*
// The Second ways
function benderaInggris(param)
{
  var pembatas = (param-1) / 2
  var asterisk = ''
  if(param % 2 === 0){
    return 'invalid input'
  }
  else {
    for(var i = 0; i < param; i++){
    for(var j =0; j < param; j++){
      if(i === pembatas){
        asterisk += '*'
      }
      else if(j === pembatas){
        asterisk += '*'
      }
      else {
        asterisk += ' '
      }
    }
    asterisk += '\n'
  }
    return asterisk
  }
  
}
console.log(benderaInggris(5))
/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/
