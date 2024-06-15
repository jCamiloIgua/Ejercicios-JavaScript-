
let autos = ["toyota","nissan","kia","renault","mazda"];

//modificar elemento en posicion
autos[1]= "Camilo"; //modifique el valor de posicion 1
//Añadir elemento al arreglo
autos.push("volvo");

for(let i = 0; i < autos.length; i++){
    console.log(i + ": " + autos[i]);
}