function soal3(param) {
    // your code here
    var obj = {}
    var ageGroup = [[],[]]
      
    for(var i = 0; i < param.length; i++){
      if(param[i][1] < 20){
        ageGroup[0].push(param[i][0])
      } else {
        age.push(param[i][0])
        ageGroup[1].push(param[i][0])
      }
    }

    obj.under20 = ageGroup[0]
    obj.over20 = ageGroup[1]
    
    return obj
}

console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:['dimas','dimitri','saitama'],
        over20:['akbar','rifki']
    }
*/
