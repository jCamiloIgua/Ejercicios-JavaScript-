let a = 3,b=2;
let z = a + b;

//Incremento
//Pre-Incremento
z = ++a;//incremento de a uno siempre delante de la variable
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable)
z = b++;
// b = 2 antes incremento 3
//z = 2 guarda el valor antes del incremento 
console.log(b);
console.log(z);

a = 5;
//Drecremento
z = --a;
console.log(z);

//Post-decremento
a = 3;
z = a--;
//z = 3
//a = 2
console.log(z);
console.log(a);

