function soal1(param) {
    // Your Code Here
    //3,2,3,1,1
    var fizz = 4;
    var buzz = 7;
    var result = []
    for(var i = 1; i <= param; i++){
      if(i === fizz){
        result.push('fizz');
        fizz = fizz + 4;
      }
      else if(i === buzz){
        result.push('buzz');
        buzz = buzz + 7;
      }
      else {
        result.push(' ');
      }
    }
    return result
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','Fizz','','']


/*
// The second ways
// Jika terdapat FizzBuzz
function soal1(param) {
    // Your Code Here
    var result = []
    for(var i = 1; i <= param; i++){
      if(i%4 === 0 && i%7 === 0){
        result.push('FizzBuzz');
      }
      else if(i%4 === 0){
        result.push('fizz');
      }
      else if(i%7 === 0){
        result.push('buzz');
      }
      else {
        result.push(' ');
      }
    }
    return result
}

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']
*/
