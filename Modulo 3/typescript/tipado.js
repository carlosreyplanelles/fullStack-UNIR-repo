var nombre = "Juan";
var estado = false;
console.log(nombre);
console.log(estado);
//typescript dos formas de definir un array
//opcion 1:
var arrNum = [1, 2, 3, 4, 5, 6, 7];
//opcion 2
var arrNombre = ['Jaime', 'Juan', 'Carlos', 'Isabel'];
//tipado de funciones.
var numero = 2;
//function declarativa
function sumar(pNumero1, pNumero2) {
    console.log(pNumero1 + pNumero2);
}
sumar(numero, 6); //8
//funcion expresiva
var restar = function (pNumero1, pNumero2) {
    var resultado = pNumero1 - pNumero2;
    return resultado;
};
var miResta = restar(5, 7);
console.log(miResta); //-2
//arrow function
var multiplicar = function (pNumero1, pNumero2) { return pNumero1 * pNumero2; };
var miMulti = multiplicar(5, 5);
console.log(miMulti); //25
//hago a peticiona a una API, no se lo que voy a recibir-
var valor = "hola";
valor = 2;
console.log(typeof valor);
