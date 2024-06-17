/*constructor permite crear copias de un objeto
para almacenar varios datos de diferentes objetos de 
un mismo objeto*/
/*con un constructor podemos crear objetos que 
tengan en comun propiedades (atribustos) entre
si */

//instancia
//contructor es la plantilla
//constructor establece numero de propiedades iniciales
//todos los objetos al crearlos tienen las propiedades y los metodos

function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //metodos
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

//intanciar un objeto (crear objeto) con el contructor
let padre = new Persona("orlando","suarez","orlando@gmail.com");
console.log("<<Primer Objeto>>");
console.log(padre);
//con el metodo
console.log(padre.nombreCompleto());

let madre = new Persona("maria","galvez","maria@gmail.com");
console.log("<<Segundo Objeto>>");
console.log(madre);
console.log(madre.nombreCompleto());




