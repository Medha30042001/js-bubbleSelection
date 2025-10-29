//my approach, gpt help for optimization

function solve(N,arr){
  let swapped = true, pass = 0;
    while(swapped){
      swapped = false;
      for(let j=1; j<N-pass; j++){
        if(arr[j]<arr[j-1]){
          let temp = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = temp;
          swapped = true;
        }
      }
      pass++;
    }
    console.log(arr.join(' '));
}
