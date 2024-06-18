//Se hereda con la palabra extends
/*hace conficto si los nombre de los 
metodos get and set se llaman igual a las
propiedad del contructor*/

class Persona{

    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    get nombrePersona(){
        return this.nombre;
    }
    set nombrePersona(nombre){
        this.nombre = nombre;
    }

    get apellidoPersona(){
        return this.apellido;
    }

    set apellidoPersona(apellido){
        this.apellido = apellido;
    }

    get edadPersona(){
        return this.edad;
    }
    
    set edadPersona(edad){
        this.edad = edad;
    }
}

//Segunda clase
//hereda de la clase persona
class Empleado extends Persona {

    constructor(nombre,apellido,edad,profesion){
        super(nombre,apellido,edad);//constructor heredado
        this.profesion = profesion;
    }

    get profesionPersona(){
        return this.profesion;
    }

    set profesionPersona(profesion){
        this.profesion = profesion;
    }
}

//Crear objetos (instanciar) de las clases

let persona1 = new Persona("Camilo","Igua",21); //super clase
console.log("<<Clase Padre>>");
console.log(persona1);
console.log(persona1.edadPersona);//metodo get

let persona2 = new Empleado("Luisa","Mendez",22,"Ingeniera");
console.log("<<Clase Empleado>>");
console.log(persona2);
console.log(persona2.profesionPersona);//metodo get del propio objecto persona2 de la clase Empleado
console.log("<<Metodos heredados>>");
console.log(persona2.nombrePersona);//metodo get de la clase Persona
console.log(persona2.apellidoPersona);
console.log(persona2.edadPersona);
//modificar el nombre por medio del set de la clase heredada
persona2.nombrePersona = "La mas linda"; //parametro pasado al set de nombrePersona de la clase Persona
console.log(persona2);
console.log(persona2.nombrePersona);//set