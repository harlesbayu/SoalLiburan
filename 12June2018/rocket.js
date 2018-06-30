function persegi(param1,param2) {
    // your code here 
    var result = ''
  
    if(param1 === 0 || param2 === 0){
      return 'invalid input'
    }
  
    for(var i = 0; i < param2; i++){
      var asterisk = ''
      if(i === 0 || i === param2-1){
        for (var j = 0; j < param1; j++){
          asterisk += '#'
        }
      }
      else {
        for (var j = 0; j < param1; j++){
          if(j === 0 || j === param1-1) {
            asterisk += '#'
          }
          else {
            asterisk += " "
          }
        }
      }
      result += asterisk + '\n'
    }
  
    return result
    
  }
  
  console.log(persegi(5,7))
  
  /*
      #####
      #   #
      #   #
      #   #
      #   #
      #   #
      #####
  */
  
  console.log(persegi(6,3))
  
  /*
      ######
      #    #
      ######
  */
  
  
  console.log(persegi(0,7)) // invalid value 
  console.log(persegi(4,0)) // invalid value


/*
// The second ways
function persegi(param1,param2) {
  // your code here 
  var result = ''

  if(param1 === 0 || param2 === 0){
    return 'invalid input'
  }

  for(var i = 0; i < param2; i++){
    var asterisk = ''
    for (var j = 0; j < param1; j++){
      if(i === 0 || i === param2-1){
        asterisk += '#'
      }
      else {
        if(j === 0 || j === param1-1) {
          asterisk += '#'
        }
        else {
          asterisk += " "
        }
      }
    }
    result += asterisk + '\n'
  }

  return result
  
}

console.log(persegi(5,7))
*/