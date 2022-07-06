let nombre: string = "Juan";
let estado: boolean = false;

console.log(nombre);
console.log(estado);

//typescript dos formas de definir un array

//opcion 1:
const arrNum: number[] = [1, 2, 3, 4, 5, 6, 7]

//opcion 2
const arrNombre: Array<string> = ['Jaime', 'Juan', 'Carlos', 'Isabel']

//tipado de funciones.
let numero: number = 2;
//function declarativa
function sumar(pNumero1: number, pNumero2: number): void {
    console.log(pNumero1 + pNumero2)
}

sumar(numero, 6) //8

//funcion expresiva
const restar = function (pNumero1: number, pNumero2: number): number {
    let resultado: number = pNumero1 - pNumero2;
    return resultado;
}

let miResta = restar(5, 7)
console.log(miResta); //-2

//arrow function

const multiplicar = (pNumero1: number, pNumero2: number): number => pNumero1 * pNumero2;
let miMulti = multiplicar(5, 5);

console.log(miMulti); //25

//hago a peticiona a una API, no se lo que voy a recibir-

let valor: any = "hola"
valor = 2;

console.log(typeof valor)






