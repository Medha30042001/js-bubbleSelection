//my approach, gpt help

function solve(N,arr){
    for(let i=0; i<N; i++){
      let minIndex = i;
      for(let j=i; j<N; j++){
        if(arr[j]<arr[minIndex]){
          minIndex = j;
        }
      }
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
    console.log(arr);
}
