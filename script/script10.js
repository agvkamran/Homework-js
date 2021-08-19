function getNumber(number) {
   let prime = true;
   for (let i = 2; i < number; i++) {
      if (number % i === 0) {
         prime = false;
         break;
      }
   }
   if (prime) {
      console.log('Число простое');
   }
   else {
      console.log('Число сложное');
   }
}

getNumber(57);