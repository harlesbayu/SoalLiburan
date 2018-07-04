function rocket(param) {
    // your code here
    var result = []
    for(var i = 0; i < param; i++){
      var arr1 = []
      for(var j = 0; j < param; j++) {
        var arr2 = [i,j]
        arr1.push(arr2)
      }
      result.push(arr1)
    }
    return result
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/