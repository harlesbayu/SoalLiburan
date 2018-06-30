
/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode
    PSEUDOCODE HERE : 
    
    FUNCTION SOAL 1
    parameter: param(type data : number)
    START
    STORE 'symbol' with '!@*'
    STORE 'caount' with 0
    STOTRE 'array' with empty array
    IF param EQUALS TO 0
        RETURN 'invalid input'
    FOR i LESS THEN 'param'
        IF 'count' EQUALS TO 2
            PUSH symbol[count] to array
            SET 'count' EQUALS TO 0
        ELSE
            PUSH symbol[count] to array
            SET 'count' with 'count = count + 1'
        END IF
        i++
    END FOR
    RETURN array
    END FUNCTION
*/
function soal1(param)
{
    // your code here
    var symbol = '!@*'
    var count = 0
    var array = []

    if(param === 0){
      return 'invalid input'
    }

    for (var i = 0; i < param ; i++){
      if(count === 2){
        array.push(symbol[count])
        count = 0 
      } else {
        array.push(symbol[count])
        count++
      }
    }

    return array
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input


/*
//The second ways
function soal1(param)
{
  var count = 1;
  var print = [];
  if(param<=0){
    return "invalid input";
  }
  while(param>0){
    if(count === 1){
      print.push("!");
      count++;
    } else if (count === 2){
      print.push("@");
      count++;
    } else if (count === 3){
      print.push("#");
      count=1;
    }
    param--;
  }
  return print;
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input
<<<<<<< HEAD
*/
=======
*/
>>>>>>> ebd89ce580bc81b9265cfc2c835d6b01332e3c05
