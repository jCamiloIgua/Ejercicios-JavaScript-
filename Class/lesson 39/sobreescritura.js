
class Persona{

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get nombrePersona() {
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

    //metodo
    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

class Empleado extends Persona{

    constructor(nombre,apellido, departamento){
        super(nombre,apellido);
        this.departamento  = departamento;
    }

    get departamentoEmpleado(){
        return this.departamento;
    }

    set departamentoEmpleado(departamento) {
        this.departamento = departamento;
    }

    //sobreEscritura de metodo (nombreCompleto)
    //se rescribe en la clase hija
    //concateno el metodo anterior con el atributo del hijo
    nombreCompleto(){
        return super.nombreCompleto() + " " + this.departamentoEmpleado;
    }

}

//instancia
let persona2 = new Empleado("Dana","Rios","Ciencia");

console.log(persona2.nombreCompleto());//llamo metodo clase padre
