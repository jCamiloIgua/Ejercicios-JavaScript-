//Uso de la palabra reservada return
/*Se usa para devolver el resultado de una 
operacion  */

function miFuncion(a,b){
    return a+b;
}
//podemos guardar el valor de retorno en una
/*variable cuando le pasamos los parametros estos 
van a la funcion y esta nos retorna la suma
esta suma se devuelve a donde llamamos a la funcion 
por eso podemos guardar la suma en una variable
*/

let resultado = miFuncion(4,5);

console.log(resultado);

alert(resultado);

//Crear funcion de tipo exprecion
/*Se usa para crear una funcion con una variable
en solo una linea */

let suma = function (a,b) {return a+b}

let resultado1 = suma(8,3);

alert("El resultado es :" + resultado1)



