let palabra = "puerTA"

palabra = palabra.toLowerCase()

switch (palabra) {
    case "gato" :
        console.log("Cat");
        break;
    case "perro" :
        console.log("Dog");
        break;
    case "ventana" :
        console.log("Window");
        break;
    case "puerta" :
        console.log("Door");
        break;
    case "mesa" :
        console.log("Table");
        break;
    default :
        console.log("La palabra ingresada no es correcta");
}