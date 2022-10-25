const Users = require("./desafio2");
const manager = new Users()

//Se crea un usuario
let user = {
    first_name: "Bruce",
    last_name: "Wayne",
    username: "Batman",
    age: 48,
    email: "bruce@wayne.com",
}

//Llamar al usuario
manager.save(user).then((response) => {
    console.log(response);
})

//Llamar a la funcion getAll
manager.getAll().then((response) => {
    console.log(response)
})

//Llamar a la funcion getById
manager.getById(2).then((response) => {
    console.log(response)
})

//Llamar a la funcion deleteById
manager.deleteById(3).then((response) => {
    console.log(response)
})

//Llamar a la funcion deleteAll
manager.deleteAll().then((response) => {
    console.log(response)
})