function soal2(param) {
    var array = []
    for (var i = 0; i < param.length; i++) {
      var person =
      {
        firstName : param[i][0],
        lastName : param[i][1],
        hobbies : param[i][2],
        profession : param[i][3]
      }
      array.push(person)
    }
    return array
}

console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] ,
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]
*/ 

console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));

/*
// The second ways
function soal2(param) {
  var result =[];
  var obj={};
  
    for(var i=0;i<param.length;i++){
      for(var j=0; j<param[i].length;j++){
        if(j===0){
          obj.firstName = param[i][j];
        } else if(j===1){
          obj.lastName = param[i][j];
        } else if(j===2){
           obj.hobbies = param[i][j];
        } else if (j===3){
           obj.profession = param[i][j];
        }
      }
      result.push(obj);
      
    }
  return result;
}
<<<<<<< HEAD
console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] ,
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));
console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));
*/
=======

console.log(soal2([ ['Aries','Dimas',['coding','pubg','anime'],'Web Developer'] ,
['Radit','Dika',['manga','gaming'],'Web Developer'] ]));

console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'] , 
['Megalo','Maniak',['metal music','maniac'],'Maniac Expert'] ]));
*/
>>>>>>> ebd89ce580bc81b9265cfc2c835d6b01332e3c05
