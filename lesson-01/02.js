// code
// Генерация случайного числа от 0 до 99
let number = Math.floor(Math.random() * 100);

// Проверка на четность и вывод результата в консоль
if (number % 2 === 0) {
    console.log(`${number} : Это четное число`);
} else {
    console.log(`${number} : Это нечетное число`);
}

