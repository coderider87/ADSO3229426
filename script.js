function mostrarDia() {
    var numero = parseInt(document.getElementById("numeroDia").value);
    var dia;

    switch (numero) {
        case 1:
            dia = "Lunes";
            break;
        case 2:
            dia = "Martes";
            break;
        case 3:
            dia = "Miércoles";
            break;
        case 4:
            dia = "Jueves";
            break;
        case 5:
            dia = "Viernes";
            break;
        case 6:
            dia = "Sábado";
            break;
        case 7:
            dia = "Domingo";
            break;
        case 8:
            dia = "Festivo";
            break;
        case 9:
            dia = "otro dia";
            break;
        default:
            dia = "Número inválido. Debe ser entre 1 y 7.";
    }

    document.getElementById("resultado").innerHTML = dia;
}