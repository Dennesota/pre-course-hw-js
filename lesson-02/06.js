// Давайте-ка нашего парня, чтобы он не зазнавался переселим в ‘city’ 'Bobryisk' ,
//  а потом опять же убедимся в консоли, что мы все правильно скопировали. 
//  (Т.е. необходимо создать глубокую копию объекта passportWithAddress,
//      а затем 'LA' заменить на 'Bobryisk' в city).

// let passportWithAddress = {
//     name: "Petr",
//     surname: "Petrov",
//     address: {
//         country: "USA",
//         city: "LA"
//     }
// };

// let newPassportWithAddress = {...passportWithAddress, ...address, city:'Bobryisk' }

// console.log(passportWithAddress.address.city)
// console.log(newPassportWithAddress.address.city)

let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};

// Создаем глубокую копию объекта
let newPassportWithAddress = structuredClone(passportWithAddress);

// Меняем значение свойства city в скопированном объекте
newPassportWithAddress.address.city = "Bobryisk";

// Проверяем значения в консоли
console.log(passportWithAddress.address.city); // Вывод: LA
console.log(newPassportWithAddress.address.city); // Вывод: Bobryisk
