let edad : number
let nombre : string = "Billy"
let mayorEdad : boolean = true // False
let cualquierVariable : null = null
let otraVariable : undefined
let variable 
let estatura : 10.5

// Listas
let nombres : string[] = ["Billy", "Pepe"]
console.log(nombres.length)
console.log(nombres[1])
nombres.push("Edgar")
console.log(nombres)
nombres.splice(1,1)
console.log(nombres)

let tuplaPersona : [string, number, boolean] = ["Billy", 39, true]
tuplaPersona[0] = "Edgar"



// Pattern matching
const [nombrePersona, edadPersona, estadoCivil] = tuplaPersona
console.log(nombrePersona)
console.log(edadPersona)
console.log(estadoCivil)

enum DiasSemana{
    Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo
}
let dia : DiasSemana = DiasSemana.Sábado

let alumno : {codigo : string | number, nombre : string, edad: number}

alumno = {
    codigo : 123912391,
    nombre : "Billy",
    edad : 39
}
const alumno2 = {
    codigo : "20222323",
    nombre : "Edgar",
    edad : 20
}

let vehiculo : string | null
vehiculo = null

// Forma antigua (Shift + Alt + A para comentar)
function s1(n1 : number, n2 : number){
    return n1 + n2
}

// Variación 
const s2 = function(n1 : number, n2: number){
    return n1 + n2
}

// Sintaxis Arrow function
const s3 = (n1 : number, n2 : number) => {
    return n1 + n2
}

interface Alumno {
    codigo : string | number | boolean
    nombre : string
    edad : number
}
const alumno3 : Alumno = {
    codigo : true,
    nombre : "Billy",
    edad : 39
}

console.log(s1(12,23))
//console.log(sumar(1,2))

