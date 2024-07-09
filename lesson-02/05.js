//Дан объект passport. Создай его копию и поменяй имя с "Petr" на "Ivan",
//и убедись в консоли, что у объекта passport имя осталось "Petr", а у твоего нового объекта "Ivan".

let passport = {
    name: "Petr",
    surname: "Petrov",
};

// Создаем копию объекта и изменяем свойство name
let newPassport = {...passport, name: "Ivan"};

// Проверяем значения в консоли
console.log(passport); // { name: "Petr", surname: "Petrov" }
console.log(newPassport); // { name: "Ivan", surname: "Petrov" }
