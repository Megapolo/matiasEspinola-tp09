var perfil = "AdmINISTRadOr"

perfil = perfil.toLowerCase()

switch (perfil) {
    case "invitado" :
        console.log("Usted sólo tiene permisos de consultar datos")
        break;
    case "administrador" :
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case "asistente" :
        console.log("Usted solo sólo tiene permisos de registrar, modificar y consultar datos");
        break;
    default :
    console.log("Debe especificar un perfil válido");
}