let persona = {
    nombre: "Camilo",
    apellido: "Contreras",
    correo: "camilo@correo.com",
    edad: 20,
    nombreCompleto: function(profesion, telefono){
        return profesion + ";" + this.nombre + " " + this.apellido + ";" + telefono;
    }
}

//segundo objeto

let persona2 = {
    nombre: "Maria",
    apellido: "Perez",
}

//imprimir objeto persona
console.log(persona.nombreCompleto("Tecnico","112545"));

//pasar parametros de una funcion heredada
console.log(persona.nombreCompleto.call(persona2,"Ingeniera","4545"));