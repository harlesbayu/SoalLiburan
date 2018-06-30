function soal1(param){
    // your code here
    var array = []
    var stringParam = ''
    for(var i = 0; i < param.length; i++){

        if(param[i] === " "){
        array.push(stringParam)
        stringParam = ''
        }
        else {
        stringParam += param[i]
        }
        
    }
    array.push(stringParam)

    var stringParam2 = ''
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].length; j++){
        if(j == array[i].length-1){
            stringParam2 += array[i][j].toUpperCase() + '\n' + '\n'
        } else {
            stringParam2 += array[i][j] + '\n'
        }
        }
        
    }
    return stringParam2
}
  
console.log(soal1('harles bayu anggara'));
  /*
      h
      a
      r
      l
      e
      S
  
      b
      a
      y
      U
  
      a
      n
      g
      g
      a
      r
      A
  */


/*
//The second ways
