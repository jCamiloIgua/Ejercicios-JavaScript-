//object person

let persona = {
    nombre: "Jonatan",
    apellido: "Igua",
    email: "jonatan@gmail.com",
    edad: 45,
    nombrecompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

//llamar propiedad de objeto
console.log(persona["apellido"]);

//for in recorrer objeto y sacar informacion
//se usa un alias inventado
//mediante el alias guardo las nombres de las
//propiedades del recorrido del objeto persona

for (nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);//acceso a los valores de las propiedades
}




