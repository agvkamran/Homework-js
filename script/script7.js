function getNumber(number) {
   const array = [];
   for (let i = 1; i <= number; i++) {
      if (number % i === 0) {
         array.push(i);
      }
   }
   console.log(array);
}


getNumber(96);
