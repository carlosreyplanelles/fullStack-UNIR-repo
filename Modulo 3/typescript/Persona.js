var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//principios SOLID de programacion
var Persona = /** @class */ (function () {
    function Persona(pName) {
        //private,protected, public
        this.name = "";
        this.age = 0;
        this.name = pName;
    }
    Persona.prototype.saludar = function () {
        return "Hola ".concat(this.name);
    };
    Persona.prototype.getName = function () {
        return this.name;
    };
    Persona.prototype.setEdad = function (pAge) {
        this.age = pAge;
    };
    return Persona;
}());
var alumno = new Persona('Juan Antonio');
var nombreAlumno = alumno.getName();
alumno.setEdad(40);
console.log(alumno); //40 
var Alumno = /** @class */ (function (_super) {
    __extends(Alumno, _super);
    function Alumno() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alumno.prototype.get = function () {
        return this.name;
    };
    return Alumno;
}(Persona));
var miAlumno = new Alumno('Lucia');
