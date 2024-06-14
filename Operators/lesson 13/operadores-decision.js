//and
console.log("Operador and");
let a = 15, valMin = 0, valMax = 10;

if (a>= valMin && a <= valMax){
    console.log("Dentro del rango");
}else{
    console.log("Fuera del rango");
}
// OR
console.log("Operador Or");
let vacaciones = false, diaLibre= true;

if(vacaciones || diaLibre){
    console.log("Se puede jugar genshin impact");
}else{
    console.log("No se puede jugar genshin impact");
}
/*Lo interesante es que las variables se usan como banderas
permitiendo no poner vacaciones == true || diaLibre == true
ya que es dinamico y mas sencillo
 */

//Operador TERNARIO
//Sustitucion al if else
//condicion ? expre1 : expre2
//si la condicion se cumple se ejecuta expre1
//si no se cumple se ejecute expre2
console.log("Operador Ternario");
let resultado = (10 < 2) ? "Verdadero" : "Falso";//Me encanta esta forma
console.log(resultado);

