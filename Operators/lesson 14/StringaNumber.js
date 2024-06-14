let miNumero = "18";
console.log(typeof miNumero);

//convertir de tipo String a entero o numero
let edad = Number(miNumero);//se  arreglo
console.log(typeof edad);

if (edad >= 18){
    console.log("Puede votar");
}else{
    console.log("Muy joven para votar")
}
//terniario
console.log("Corto---");
let resultado = (edad >= 18) ? "Puede votar" : "No puede votar";
console.log(resultado);