const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let resArr=[];
  if (arr && arr.length !== 0 && Array.isArray(arr)) {
 
 
 for(let i=0;i<arr.length;i++) {
    if(arr[i]==='--double-next') {
      if(arr[i+1]) {
     resArr.push(arr[i+1]);
      }
   } else if(arr[i]==='--discard-prev') {
     resArr.splice(-1,1);
   } else if(arr[i]==='--double-prev') {
    if(arr[i-1]) {
      resArr.push(resArr[resArr.length -1]);
      }
   }else if(arr[i]==='--discard-next') {
    resArr.push('');
     i++;
   }
   else {
     resArr.push(arr[i]);
   }
 }
 
 
  } 
  else if(arr.length == 0) {
    return [];
  }
    
    else {
    throw new Error();
  }
 
 
 return resArr.filter(Number);
};
