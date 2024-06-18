//metodo get obtener
//se usa para traer datos

//metodo set 
//cambiar valor dentro del objeto
//Objeto
let persona = {
    //atributos
    nombre: "Camilo",
    apellido: "Contreras",
    correo: "camilo@correo.com",
    edad: 20,

    idioma: "es",

    //funciones (metodos)
        get nombreCompleto(){ //siempre retorna
            return this.nombre + " " + this.apellido;
        },

        get lenguaje(){
            return this.idioma.toUpperCase();
        /*el toUpperCase se usa para volver
        todo a mayusculas*/
        },

    //modificar
        set lenguaje(lenguaje){
            this.idioma = lenguaje.toUpperCase();
        }
    }

//llamar metodo get
console.log(persona.nombreCompleto);
console.log(persona.lenguaje);
//llamamos el set
//cambiamos el valor de idioma por en
persona.lenguaje = "en";//intuye que es al set
//llamamos al get
console.log(persona.lenguaje);//intuye get


