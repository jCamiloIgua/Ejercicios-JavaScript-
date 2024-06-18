class Persona{

    constructor(nombre,apellido){
        this.nombrePersona = nombre;
        this.apellidoPersona = apellido;
    }

    //metodos

    get nombre(){
        return this.nombrePersona;
    }

    set nombre(nombre){
        this.nombrePersona = nombre;
    }
    //metodo proprio
    nombreCompleto = function(){
        return this.nombrePersona + " " + this.apellidoPersona;
    }
}

//intanciar objetos de una clase () -> contructor
let persona1 = new Persona("Camilo","Igua");
console.log(persona1.nombre);//tra el nombre
persona1.nombre = "Luis";//set

console.log(persona1.nombre); //get

let persona2 = new Persona("Luisa", "Agudelo");
console.log(persona2.nombre);

console.log(persona2.nombreCompleto());