function soal3(param) {
    // your code here
  var sortingAnimal = param.sort()
  var groups = []

  for(var i = 0; i < sortingAnimal.length; i++){
    var isGroup = true
    var group = []
    for(var j = 0; j < groups.length; j++){
      if(groups[j][0][0] === sortingAnimal[i][0]){
        groups[j].push(sortingAnimal[i])
        isGroup = false
      }
    }
    if(isGroup){
      group.push(sortingAnimal[i])
      groups.push(group)
    }
  }

  var obj = {}
  for(var i in groups){
      obj[groups[i][0][0]] = groups[i];
  }

  return obj;
}

<<<<<<< HEAD

=======
>>>>>>> ebd89ce580bc81b9265cfc2c835d6b01332e3c05
console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak'])

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/
<<<<<<< HEAD


/*
// The second ways
function AlphabetGrouping(arr){
    arr.sort();
    var match=[];
    var noMatch=[];
    var result=[];
    for(var i=0;i<=arr.length;i++){
      var currentFirstAlpha = arr[0][0];//A
      for(var j=0;j<arr.length;j++){
        if(arr[j][0]===currentFirstAlpha){
          match.push(arr[j]);
        } else {
          noMatch.push(arr[j]);
        }
      }
      result.push(match);
      match=[];
      arr=noMatch;
      noMatch=[];
      i=0;
    }
   return result; 
}
  
function soal3(param)
{ 
    var arr= AlphabetGrouping(param);
    var obj={};
    for(var i in arr){
      obj[arr[i][0][0]] = arr[i];
    }
    return obj;
}

//P.S. the output will be printed out in an Ascending (A-Z) order 
  
console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
*/
=======
>>>>>>> ebd89ce580bc81b9265cfc2c835d6b01332e3c05
