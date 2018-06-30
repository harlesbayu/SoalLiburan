function rocket(param) {
  // your code here
  var asteriks = Math.floor(param/2)
  var result = []
  for(var i = 0; i < param; i++){
    var arr = []
    for(var j = 0; j < param; j++){
      if(param % 2 !== 0){
        if(i === asteriks){
          if(j === asteriks){
            arr.push('*')
          } else {
            arr.push('')
          }
        } else {
          arr.push('')
        }
      } else {
        if(i === asteriks || i === asteriks-1){
          if(j === asteriks || j === asteriks-1){
            arr.push('*')
          } else {
            arr.push('')
          }
        } else {
          arr.push('')
        }
      }
    }
    result.push(arr)
  }
  return result
}
console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/
