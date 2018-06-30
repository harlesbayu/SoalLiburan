function createPyramid(num){
  var str = ''
  for(var i = 0; i < num; i++){
    str += '  *  '
  }
  str += '\n'
  for(var i = 0; i < num; i++){
    str += ' *** ' 
  }
  str += '\n'
  for(var i = 0; i < num; i++){
    str += '*****' 
  }
  return str
}

console.log(createPyramid(1));
/*

	  *
	 ***
	*****

*/

console.log(createPyramid(2));
/*

	  *   *
	 *** ***
	*********

*/

console.log(createPyramid(5));

/*
	  *   *   *   *   *  
	 *** *** *** *** *** 
	*********************

*/