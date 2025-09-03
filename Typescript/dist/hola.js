"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let edad;
let nombre = "Billy";
let mayorEdad = true; // False
let cualquierVariable = null;
let otraVariable;
let variable;
let estatura;
// Listas
let nombres = ["Billy", "Pepe"];
console.log(nombres.length);
console.log(nombres[1]);
nombres.push("Edgar");
console.log(nombres);
nombres.splice(1, 1);
console.log(nombres);
let tuplaPersona = ["Billy", 39, true];
tuplaPersona[0] = "Edgar";
// Pattern matching
const [nombrePersona, edadPersona, estadoCivil] = tuplaPersona;
console.log(nombrePersona);
console.log(edadPersona);
console.log(estadoCivil);
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["Lunes"] = 0] = "Lunes";
    DiasSemana[DiasSemana["Martes"] = 1] = "Martes";
    DiasSemana[DiasSemana["Mi\u00E9rcoles"] = 2] = "Mi\u00E9rcoles";
    DiasSemana[DiasSemana["Jueves"] = 3] = "Jueves";
    DiasSemana[DiasSemana["Viernes"] = 4] = "Viernes";
    DiasSemana[DiasSemana["S\u00E1bado"] = 5] = "S\u00E1bado";
    DiasSemana[DiasSemana["Domingo"] = 6] = "Domingo";
})(DiasSemana || (DiasSemana = {}));
let dia = DiasSemana.Sábado;
let alumno;
alumno = {
    codigo: 123912391,
    nombre: "Billy",
    edad: 39
};
const alumno2 = {
    codigo: "20222323",
    nombre: "Edgar",
    edad: 20
};
let vehiculo;
vehiculo = null;
// Forma antigua (Shift + Alt + A para comentar)
/*function s(n1 : number, n2 : number){
    return n1 + n2
}*/
// Variación 
const s = function (n1, n2) {
    return n1 + n2;
};
console.log(s(12, 23));
//# sourceMappingURL=hola.js.map