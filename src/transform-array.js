const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resArr=[];

  
 let check = arr.find(elem=> elem=='--discard-prev' || elem=='--discard-next' || elem=='--double-next' || elem=='--double-prev');


  if (arr && arr.length !== 0 && Array.isArray(arr) && check ) {
 
 
 for(let i=0;i<arr.length;i++) {
    if(arr[i]==='--double-next') {
      if(arr[i+1] && typeof arr[i + 1] != undefined) {
        //console.log('heh:' + arr[i+1]);
     resArr.push(arr[i+1]);
      }
   } else if(arr[i]==='--discard-prev' && typeof arr[i-1] != undefined) {
     resArr.splice(-1,1);
   } else if(arr[i]==='--double-prev') {
    if(arr[i-1] && typeof arr[i - 1] != undefined) {
      //console.log('huh:' + arr[i-1])
      resArr.push(resArr[resArr.length -1]);
      }
   }else if(arr[i]==='--discard-next' && typeof arr[i+1] != undefined) {
    resArr.push('');
     i++;
   }
   else {
     resArr.push(arr[i]);
   }
 }
 
 
if(!arr.join('') !== resArr.join('')) {
 resArr = resArr.filter(Number);
}
 return resArr;
  } 
   
  else if(!check) {
return arr;
  }
    else {
    throw new Error();
  }
 
 
 
};
