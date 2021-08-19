function getRandomNumber() {
   let machineNumber = Math.floor(Math.random() * 10 + 1);
   let yourNumber = Number(prompt('Введите число'));
   if (yourNumber === machineNumber) {
      console.log('You guessed it right!');
   }
   else {
      console.log('Sorry. You lost');
   }
}

getRandomNumber();