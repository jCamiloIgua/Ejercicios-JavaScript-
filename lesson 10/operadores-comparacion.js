let a = 3, b= 2, c = "3";
//las comparaciones son chevres aqui
//Cuando usamos solo == verifica si el contenido es igual
// sin importarle que tipo de datos esta guardando
let z = a == c;
console.log(z);

//Si usamos === verifica que el contenido sea igual
// Y el tipo de la variable tambien
z = a ===c;
console.log(z);
//Lo interesante de javaScript, es que como ve que
//z guarda una comparacion z toma su papel
//como booleano es bonito

//DISTINTO A != igual a java
z = a != c;
console.log(z);//False lo toma igual con entero y cadena

//RELACIONES
console.log("<<Operadores relacionales>>")
let datoUno = 2;
let datoDos = 4;

let resultado;
resultado = datoUno < datoDos;
console.log(resultado);
resultado = datoUno > datoDos;
console.log(resultado);


