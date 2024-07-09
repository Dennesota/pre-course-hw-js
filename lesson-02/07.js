// Ну и вишенка на торт: раз наш парень оказался «в нужное время в нужном месте», пора бы его женить):
// Под surname добавь married: true. И разумеется проверь, что женат только один парень…
//  (Т.е. необходимо создать глубокую копию объекта passportMarried , и добавить в него новый ключ: значение).


let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};

// Создание глубокой копии объекта с использованием structuredClone
let passportMarried2 = structuredClone(passportMarried);

// Добавление нового свойства
passportMarried2.married = true;

console.log(passportMarried);
console.log(passportMarried2);
