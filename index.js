// const mostrarLista = (lista = []) => {
//     if ( lista.length === 0 ){
//         console.log("La lista esta vacia");
//     } else {
//         lista.forEach(element => {
//             console.log(element)
//         });
//     }
// };

// mostrarLista()

// ((lista = []) => {
//     if ( lista.length === 0 ){
//         console.log("La lista esta vacia");
//     } else {
//         lista.forEach(element => {
//             console.log(element)
//         });
//     }
// })()


// class Contador {
//     constructor(responsable) {
//         this.responsable = responsable;
//         this.cuenta = 0;
//     }
//     static contadorGlobal = 0;
    
//     obtenerResponsable = () => {
//         console.log(`El responsable es ${this.responsable}`)
//     };

//     obtenerCuentaIndividual = () => {
//         console.log(`El contador de ${this.responsable} tiene ${this.cuenta} contados`)
//     }
//     obtenerCuentaGlobal = () => {
//         return Contador.contadorGlobal;
//     }
//     contar = () => {
//         this.cuenta++;
//         Contador.contadorGlobal++;
//     }
// }

// const contador1 = new Contador("Matias");
// const contador2 = new Contador("Miguel");

// contador1.obtenerResponsable();
// contador2.obtenerResponsable();

// contador1.contar();
// contador2.contar();
// contador2.contar();

// contador1.obtenerCuentaIndividual();
// contador2.obtenerCuentaIndividual();

// let cuenta1 = contador2.obtenerCuentaGlobal();

// console.log(cuenta1);

// const contador3 = new Contador("Ingrid");

// console.log(contador3.obtenerCuentaGlobal());


// const mostrarLetras = (palabra, callback) => {
//     let index = 0;
//     const timer = setInterval(() => {
//         console.log(palabra[index])
//         index++;
//         if (index >= palabra.length) {
//             clearInterval(timer);
//             callback();
//         }
//     },1000);
// }

// const fin = () => console.log('Terminé');

// mostrarLetras('queso',fin);

// setTimeout(() => {
//     mostrarLetras('queso',fin);
// },250);

// setTimeout(() => {
//    mostrarLetras('queso',fin); 
// },500);