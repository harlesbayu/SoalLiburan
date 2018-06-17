/*
    membuat bendera scotlandia
    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *
     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param) {
    // yout code here 
    var num = 0;
    var num1 = param-1;
    result = ''
    
    for (var i = 0; i < param; i++){
      var asterisk = ''
      for (var j = 0; j < param; j++){
        if(j === num || j === num1){
          asterisk += '*'
        }
        else {
          asterisk += ' '
        }
      }
      num++
      num1--
      result += asterisk + '\n'
      // return asterisk
    }
    return result
}

console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/
