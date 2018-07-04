function soal1(objList,id,action) {
    // your code here 
    var lengObj = Object.keys(objList).length

    var obj = {}
    for (var i = 0; i < lengObj; i++){
        if(Object.keys(objList)[i] == id && action == 'view'){
        obj = Object.values(objList)[i]
        } else if(Object.keys(objList)[i] == id && action == 'delete'){
        delete objList[i]
        var lengthObj2 = Object.keys(objList).length
        var obj2 = {}
        for(var j = 0; j < lengObj-1; j++){
            obj2[j] = Object.values(objList)[j]
        }
        obj = obj2
        }
    }

    return obj
}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"view"));
// { name:"awtian",codename:"the black assasin"}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"},
},1,"delete"));
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{ name:"icha",codename:"the real dementor"}
    }

*/