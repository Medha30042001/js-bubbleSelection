//my approach, gpt insights

function sq(a){
  return a*a
}
function squareSorting(n,arr){
  let swapped = true, pass = 0;
   while(swapped){
     swapped = false;
     for(let j=1; j<n-pass; j++){
       if(sq(arr[j])<sq(arr[j-1])){
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
