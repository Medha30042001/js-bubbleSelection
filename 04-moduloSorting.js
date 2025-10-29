//my approach, idk it's same as 03

function sortingwithK(n,k,arr){
  let swapped = true, pass = 0;
   while(swapped){
     swapped = false;
     for(let j=1; j<n-pass; j++){
       if(arr[j]%k<arr[j-1]%k){
         let temp = arr[j-1];
         arr[j-1] = arr[j];
         arr[j] = temp;
         swapped = true;
       }
     }
     pass++;
   }
   console.log(arr.join(' '));
}

