let passport = {
    name: "Petr",
    surname: "Petrov",
};

// Создаем копию объекта и изменяем свойство name
let newPassport = { ...passport, name: "Ivan" };

// Проверяем значения в консоли
console.log(passport.name); // Вывод: Petr
console.log(newPassport.name); // Вывод: Ivan

