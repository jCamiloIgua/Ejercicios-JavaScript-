
let persona = {
    nombre: "Jonatan",
    apellido: "Igua",
    email: "jonatan@gmail.com",
    edad: 21,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//agregar una nueva propiedad
//eliminar una propiedad del objeto
delete persona.telefono;
console.log(persona);
//Imprimir objetos en el navegador
//concatenar cada valor de cada propiedad
console.log(persona.nombre + " " + persona.apellido);

//recorrer las propiedades del objeto con for in
console.log("<<For in>>")
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Object values
//lo muestra en formato de arreglo
console.log("<<Object values>>")
let personaArray = Object.values(persona);
console.log(personaArray);
//JSON
console.log("<<JSON stringify>>");
//lo muestra en formato de String de texto
let personaString = JSON.stringify(persona);
console.log(personaString);