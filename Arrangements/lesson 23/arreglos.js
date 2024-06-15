//primera forma
let autos = new Array("red","pink","yellow",14);

//segunda forma
const autos1 = ["toyota","nissan","kia"];

console.log(autos);
console.log(autos1)

//con la posicion
console.log(autos1[1]);
//Recorrer array
for(let cont = 0; cont <= autos1.length; cont++){
    console.log(cont + ": " + autos1[cont]);
}