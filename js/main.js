let opcionElegida;

do {
    opcionElegida = parseInt(prompt("Bienvenido a la tienda de vinos. Por favor, elija una opción: \n\n1. Ver catálogo de vinos \n2. Consultar precios\n3. Realizar compra\n\nPara salir, ingrese 0"));

    switch (opcionElegida) {
        case 0:
            alert("Gracias por visitar nuestra tienda. ¡Vuelva pronto!");
            break;
        case 1:
            mostrarCatalogo();
            break;
        case 2:
            consultarPrecios();
            break;
        case 3:
            realizarCompra();
            break; 4
        default:
            alert("La opción que ingresaste no es válida. Por favor, selecciona una opción del menú.");
            break;
    }

} while (opcionElegida !== 0);



