let operacion = "multiplicar"
let a = 2
let b = 2

operacion = operacion.toLowerCase()

switch (operacion) {
    case "suma" :
        console.log(`La suma de ${a} + ${b} es: ${a+b}`);
        break;
    case "resta" :
        console.log(`La resta de ${a} - ${b} es: ${a-b}`);
        break;
    case "multiplicar" :
        console.log(`La multiplicación de ${a} * ${b} es: ${a*b}`);
        break;
    case "dividir" : 
        console.log(`La suma de ${a} / ${b} es: ${a/b}`);
        break;
    default :
        console.log("Las operaciones aceptadas son: sumar - restar - multiplicar - dividir")
        break;
}