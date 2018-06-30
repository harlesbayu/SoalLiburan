// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param) {
    //your code here
    var stabil = Math.floor(param.length / 2)
    var length = param.length-1
    var groups = []
    var group = []
    
    for(var i = 0; i < param.length/2; i++){
      if (i == stabil){
        group = []
        group.push(param[i])
        group.push('Instruktur')
        groups.push(group)
      } else {
        group = []
        group.push(param[i])
        group.push(param[length])
        length--
        groups.push(group)
      }
        
    }
    
    return groups
}

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))//
// [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]


/*
// The second ways
// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param)
{
    var result=[];
    var smallBox=[];
    for(var i=0; i<=param.length; i++){
        if(param.length===1){
         param.push("Instruktur");
        }

        var front = param.shift(); 
        var end = param.pop();
        smallBox.push(front, end);
        result.push(smallBox);
        smallBox=[];
        i=0;
        
    }
    return result;
}
console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"]))

console.log(soal2(['A','B','C','D','E']))//
// // [ ['A','E'] , ['B','D'], ['C','Instruktur']]
*/