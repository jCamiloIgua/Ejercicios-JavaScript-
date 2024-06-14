let  numero = "Camilo";

let numeroTexto = "Valor desconocido";

//se le pasa la condicion o el valor
switch (numero){
    case 1://si la variable es 1
        numeroTexto = "Numero uno";
        break;
    
    case 2:
        numeroTexto = "Numero dos";
        break;
    
    case 3:
        numeroTexto = "Numero tres";
        break;
    
    case 4:
        numeroTexto = "Numero cuatro";
        break;

    case "Camilo":
        numeroTexto = "Camilo de string";
        break;

    default:
        numeroTexto = "Caso no encontrado"
}

console.log(numeroTexto);
//Como se puede ver el valor de la varible no importa
//conque el caso la contemple se puede 