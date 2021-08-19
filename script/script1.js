let dayOfWeek = Number(prompt('Введите день недели'));

switch (dayOfWeek) {
    case 1:
        console.log('Понедельник');
        break;
    case 2:
        console.log('Вторник');
        break;
    case 3:
        console.log('Cреда');
        break;
    case 4:
        console.log('Четверг');
        break;
    case 5:
        console.log('Пятница');
        break;
    case 6:
        console.log('Суббота');
        break;
    case 7:
        console.log('Воскресенье');
        break;
    default:
        console.log('Вы ввели число > 7 или <= 0. Введите пожалуйста правильное число');
        break;
}
