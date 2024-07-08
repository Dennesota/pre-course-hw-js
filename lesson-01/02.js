// code
// Генерация случайного числа от 0 до 99
let number1 = Math.floor(Math.random() * 100);

// Проверка на четность и вывод результата в консоль
if (number1 % 2 === 0) {
    console.log(`${number1} : Это четное число`);
} else {
    console.log(`${number1} : Это нечетное число`);
}

