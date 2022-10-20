class Usuario{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido =  apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName = () => {
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`)
    }
    addMascota = () => {
        this.mascotas++
    }
    countMascotas = () => {
        console.log(`Tengo ${this.mascotas} mascotas`)
    }
    addBook = (nombre, autor) => {
        this.libros.push(nombre,autor)
    }
    getBookNames = () => {
        return this.libros.map(libro => libro.nombre)
    }
};

const usuario1 = new Usuario("Rodrigo", "Ajnota")

usuario1.getFullName();
usuario1.addMascota();
usuario1.addMascota();
usuario1.countMascotas();

//No pude completarlo
// usuario1.addBook("El Resplandor", "Stephen King");
// usuario1.getBookNames();