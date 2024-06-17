/*Contiene diferentes tipos de datos
tienen propiedades que describen a este objeto  */
//atributos
let persona = {
    nombre : "Camilo",
    apellido: "Igua",
    edad: 21,
    //metodos en objetos
    nombrecompleto: function() {
        return this.nombre + " " + this.apellido;
    }
}
//acceder a una propiedad del objeto
console.log(persona.nombre);
console.log(persona.apellido);

//Todo el objeto
console.log(persona);

//llamamos a la funcion del objeto persona
console.log(persona.nombrecompleto());

//Otra manera de crear objetos
/*cree un espacio en memoria de un objeto
llamado persona2 */
let persona2 = new Object();
//añadir atributos al objeto
persona2.nombre = "Jonatan";
persona2.apellido = "Contreras";
console.log(persona2.apellido);