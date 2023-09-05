/// <reference lib="webworker" />


function isPrime(n:any) {
  for(let i = 2; i <= n/2; i++){
      if(n % i === 0){
        return false;
      }
  };
  return true;
};

function generatePrime(num:any){
  const arr = [];
  let i = 2;
  while(arr.length < num){
      if(isPrime(i)){
        arr.push(i);
      };
      i = i === 2 ? i+1 : i+2;
  };


  return arr;
};

addEventListener('message', ({ data }) => {
  setTimeout( () => {
    let result = generatePrime(data);
    const response = {prime: result};
    postMessage(response);

}, 9000 );

});
