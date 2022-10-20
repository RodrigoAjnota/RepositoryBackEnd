// let obj = {}

// for (let i = 0; i < 10000; i++) {
//     const randomNumber = Math.floor(Math.random()*20+1);
//     if (obj[randomNumber]) {
//         obj[randomNumber++];
//     } else{
//         obj[randomNumber] = 1;
//     }
// }


// const productos = [
//     { id:1, nombre:'Escuadra', precio:323.45 },
//     { id:2, nombre:'Calculadora', precio:234.56 },
//     { id:3, nombre:'Globo Terráqueo', precio:45.67 },
//     { id:4, nombre:'Paleta Pintura', precio:456.78 },
//     { id:5, nombre:'Reloj', precio:67.89 },
//     { id:6, nombre:'Agenda', precio:78.90 }
// ]

// const names = productos.map(products => products.nombre)

// let priceTotal = productos.reduce((accumulator, currentValue) => accumulator + currentValue.precio, 0).toFixed();

// let promedio = (priceTotal/productos.length).toFixed()

// let numeros = productos.map(producto => producto.precio)

// let min = Math.min(...numeros)
// let max = Math.max(...numeros)

// const sendObjetc = {
//     names,
//     priceTotal,
//     promedio,
//     numeros,
//     max,
//     min
// }

// console.log(sendObjetc)


