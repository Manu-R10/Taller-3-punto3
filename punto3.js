let usuario = 0;
let libros_limite = 0;
let prestamo_solicitado = 0;

do {
    usuario = prompt("Ingrese tu usuario para esta ocasion. (estudiante,docente,visitante):");

    switch (usuario) {
        case "estudiante":
            libros_limite = 3;
            break;
        case "docente":
            libros_limite = 5;
            break;
        case "visitante":
            libros_limite = 1;
            break;
        default:
            alert("Usuario no reconocido :o");
        }
    }