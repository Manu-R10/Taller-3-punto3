let usuario = 0; // Variable para ingresar usuario
let libros_limite = 0; // variable Límite de libros permitido según el usuario
let prestamo_solicitado = 0; // Variable cantidad de libros que el usuario solicita

do {
    usuario = prompt("Ingrese tu usuario para esta ocasión. (estudiante, docente, visitante):"); // Solicita el tipo de usuario

    switch (usuario) { // Define el límite de libros según el usuario
        case "estudiante":
            libros_limite = 3; // le da un limite en el caso de estudiante
            break;
        case "docente":
            libros_limite = 5; // le da un limite en el caso de docente
            break;
        case "visitante":
            libros_limite = 1; // le da un limite en el caso de visitante
            break;
        default:
            alert("Usuario no reconocido :o"); // Muestra mensaje si el usuario no lo reconoce
    }
    prestamo_solicitado = parseInt(prompt("Ingrese la cantidad de libros que desea pedir prestado:"), 10); // Convierte la entrada a número

    if (prestamo_solicitado > libros_limite) { // Compara si supera el límite permitido
        alert("Advertencia, el usuario pasó el límite permitido :("); // imprime advertencia si excede el límite
    } else {
        alert("Préstamo aprobado :)"); // Imprime que el prestamo es aprobado
    }

    alert("Sistema de préstamo finalizado. Puedes ingresar otro usuario."); // imprime al finalizar todo el proceso
} while (true); // repite infinitamente todo el sistema
