let passport = {
    name: "Petr",
    surname: "Petrov",
};

// Создаем копию объекта и изменяем свойство name
let Passport1 = { ...passport, name: "Ivan" };

// Проверяем значения в консоли
console.log(passport); // { name: "Petr", surname: "Petrov" }
console.log(Passport1); // { name: "Ivan", surname: "Petrov" }

