function soal3(param1) {
    // your code here 
    var result = []
    var num = 1
    for(var i = 1; i <= param1; i++){
      var checkpoint = []
      for(var j = 1; j <= param1; j++){
        checkpoint.push(num)
        num++
      }
      if(i % 2 == 0){
        checkpoint.sort(function(a,b){
          return b-a
        })
        result.push(checkpoint)
      } else {
        result.push(checkpoint)
      }
      
    }
    return result
}

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]

*/

console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]

*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]

*/
