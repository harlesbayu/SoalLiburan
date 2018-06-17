/*
    wajib pseudocode. 
    Jawaban pseudocode disini 
    
    FUNCTION soal2
    parameter: param(type data : number)
    START
    STORE 'alphabet' with 'abcdefghijklmnopqrstuvwxyz'
    STORE 'num' with '0'
    STORE 'alphabetGroups' with empty array
    IF param EQUALS TO 0
      RETURN 'invalid imput'
    ELSE
      FOR i LESS THEN param 
        STORE 'alphabetGroup' with empty array
        FOR j LESS THEN param
          IF alphabet.length-1 EQULAS TO num
            alphabetGroup.push(alphabet[num])
            num EQULAS TO 0
          ELSE
            alphabetGroup.push(alphabet[num])
            num = num + 1
          END IF
          j++
        END FOR
        i++
        alphabetGroups.push(alphabetGroup)
      END FOR
    RETURN alphabetGroups
    END FUNCTION
*/

function soal2(param) {
    // your code here
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var num = 0;
  var alphabetGroups = []
  if(param === 0){
    return 'invalid imput'
  }
  else {
    for(var i = 0; i < param; i++){
      var alphabetGroup = []
      for(var j = 0; j < param; j++){
        
        if(alphabet.length-1 === num){
          alphabetGroup.push(alphabet[num])
          num = 0
        } else {
          alphabetGroup.push(alphabet[num])
          num++
        }
      }
      alphabetGroups.push(alphabetGroup)
    }
  }
  
  return alphabetGroups

}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        [g','h','i','j','k','l','m','n']
        [''o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input


/*
// The second ways
function soal2(param) {
  var asciiLetter="";
  var asciinum=65;//65-90 === A-Z;
  var box=[];
  var result=[];
  if(param===0){
    return "invalid input";
  }
  for(var i=0;i<param;i++){
    for(var j=0;j<param;j++){
      if(asciinum===90){
        asciiLetter = String.fromCharCode(asciinum).toLowerCase();
        box.push(asciiLetter);
        asciinum=65;
      } else {
        asciiLetter = String.fromCharCode(asciinum).toLowerCase();
        box.push(asciiLetter);
        asciinum++;
      } 
    }
    result.push(box);
    box=[];

  }
  return result;
}

console.log(soal2(8))
*/
