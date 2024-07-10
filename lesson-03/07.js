const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

// Функция для проверки на четность числа
function isEven(num) {
    return num % 2 === 0;
}

// Удаление нечетных чисел из каждого вложенного массива
const filteredNumbers = numbers.map(innerArray =>
    innerArray.filter(num => isEven(num))
);

console.log(filteredNumbers);
