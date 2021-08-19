function getNumberFactorial(number) {
   let x = 1;
   for (let i = 1; i <= number; i++) {
      x *= i;
   }
   console.log(x);
}

getNumberFactorial(8);