let nombre = "Camilo";

//imprimir algo
console.log(nombre)

let numero=5000;
//el + se usa para concatenar igual que en java

console.log("Un numero " + numero);
//type object parameter value
//entidades y atributos
//diccinarios en otros lenguajes como python a los objetos
let objeto = {
    nombre: "Camilo",
    edad: 21,
    telefono: 31654757
}

console.log(objeto);   

//Boolean (true,false)
let bandera = false;

if(bandera == false){
    console.log(nombre);
}else{
    console.log("No entro en la condicion");
}

//funciones
function mifuncion(){
    console.log(typeof mifuncion);
}
//llamar a ejecutar una funcion
mifuncion();

//Class
class persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persona);
//tanto la funcion y la clase son consideradas tipo de datos
//funcion

//Indefinido
let x;
console.log(typeof x);

//null = ausencia de valor
let y = null;
console.log(typeof y);