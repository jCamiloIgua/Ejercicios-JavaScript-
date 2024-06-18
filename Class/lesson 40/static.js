//Si algo es estatico no es necesario instanciar
//un objeto clase.metodo();
//si lo hereda una clase, la clase hija tambien lo puede usar

//En los metodos tambien se pueden pasar objetos por parametro

//el metodo statico tambien sele pueden pasar parametros
//si llamamos a los set o get no es necesario poner (), si es otro tipo de metodo si se usa los ()

class Persona{

    //atributos
    static contador = 10;//no se crea un objeto para acceder a esta variable

    correo = "un correo"; //variable no estatica toca usar objeto para acceder asu contenido

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    get nombrePersona (){
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
    //metodos
    nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
    //no es necesario instanciar objetos
    static saludar(){//metodo estatico
        console.log("Hola soy un metodo static");
    }
    //se pasa por parametro un objeto nombreCOMPLETO
    static saludar2(persona){
        console.log(persona.nombreCompleto());
    }
}

class Empleado extends Persona{

    constructor(nombre,apellido,departamento){
        super(nombre,apellido);
        this.departamento = departamento;
    }

    get departamentoEmpleado(){
        return this.departamento;
    }

    set departametoEmpleado(depa){
        this.departamento = depa;
    }

    //sobreEscritura de metodos

    nombreCompleto(){
        return super.nombreCompleto() + " " + this.departamentoEmpleado;
    }
}

let persona1 = new Empleado("Camilo","Igua","Sistemas");
console.log(persona1.nombreCompleto());

console.log("<<Static>>");
Persona.saludar();
Empleado.saludar();

console.log("<<Con parametros>>");
Empleado.saludar2(persona1);

console.log("<<Atributos estaticos y no estaticos>>");
console.log(Persona.contador);
console.log(persona1.correo);//como lo esta heredando no importa, lo tiene

