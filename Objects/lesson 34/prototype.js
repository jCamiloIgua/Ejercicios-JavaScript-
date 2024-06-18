
//contructor persona
function Persona(nombre,apellido,email){

    this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        //metodos
        this.nombreCompleto = function(){
            return this.nombre + " " + this.apellido;
        }
}
/*agregar propiedad a todos los objetos creados
sin modificar el constructor se usa prototype*/

Persona.prototype.telefono = "123";//para todos los objetos globales
//Objetos persona
let padre = new Persona("orlando","suarez","orlando@gmail.com");
console.log(padre.telefono);


let madre = new Persona("maria","galvez","maria@gmail.com");
madre.telefono = "000";//se cambia valor en el objeto
console.log(madre.telefono);