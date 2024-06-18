//funcion call reutilizar funciones (metodos) de otros
//objetos call(objeto a incluir)

let persona = {
    nombre : "Camilo",
    apellido: "Igua",
    edad: 21,
    //metodos en objetos
    nombrecompleto: function() {
        return this.nombre + " " + this.apellido;
    }
}

let persona2 = {
    nombre: "Alberto",
    apellido: "sanchez",  
}

console.log(persona.nombrecompleto());

console.log(persona.nombrecompleto.call(persona2));
//persona tiene el metodo nombrecompleto()
/*persona2 no lo tiene por eso accedemos al 
objeto persona al metodo nombrecompleto y usamos una 
funcion call() a la cual le pasamos el objeto al que 
queremos añadirle por un instante la funcion de 
nombrecompleto*/
//lo toma prestado