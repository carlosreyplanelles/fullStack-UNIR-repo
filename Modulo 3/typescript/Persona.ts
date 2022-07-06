//contrato vinculante que exige unos minimos a la clase a la que se aplica.
interface IPersona {
    age: number;
    saludar(): string;
    setEdad(pAge: number): void
}
//principios SOLID de programacion

class Persona implements IPersona {

    //private,protected, public
    protected name: string = "";
    age: number = 0;
    constructor(pName: string) {
        this.name = pName;
    }

    saludar(): string {
        return `Hola ${this.name}`
    }

    getName() {
        return this.name;
    }

    setEdad(pAge: number): void {
        this.age = pAge
    }


}

let alumno = new Persona('Juan Antonio')
let nombreAlumno: string = alumno.getName()
alumno.setEdad(40);
console.log(alumno) //40 

class Alumno extends Persona {
    get() {
        return this.name
    }
}

let miAlumno = new Alumno('Lucia');

