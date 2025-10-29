//my approach

function  removeToSort(n,arr){
  let j = 1;
    while(j<arr.length){
      if(arr[j]<arr[j-1]){
        arr.splice(j, 1);
        j--;
      }
      j++;
    }
    console.log(arr.join(' '));
}
