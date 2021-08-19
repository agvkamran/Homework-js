let firstNumber = Number(prompt('Введите первое число'));
let secondNumber = Number(prompt('Введите второе число'));

if (firstNumber > secondNumber) {
    console.log('Первое число больше чем второе число');
}
else if (secondNumber > firstNumber) {
    console.log('Второе число больше чем первое число');
}
else {
    console.log('Числа равны');
}
