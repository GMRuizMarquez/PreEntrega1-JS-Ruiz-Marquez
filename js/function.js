
function mostrarCatalogo() {
    let catalogo = ["Malbec", "Cabernet Sauvignon", "Merlot", "Chardonnay"];
    let mensaje = "Catálogo de vinos disponibles:\n";

    for (let i = 0; i < catalogo.length; i++) {
        mensaje += (i + 1) + ". " + catalogo[i] + "\n";
    }

    alert(mensaje);
}

function consultarPrecios() {
    let vinoSeleccionado = prompt("Ingrese el nombre del vino que desea consultar: \n\nMalbec \nCabernet Sauvignon \nMerlot \nChardonnay");

    switch (vinoSeleccionado.toLowerCase()) {
        case "malbec":
            alert("El precio del Malbec es $200 por botella.");
            break;
        case "cabernet sauvignon":
            alert("El precio del Cabernet Sauvignon es $220 por botella.");
            break;
        case "merlot":
            alert("El precio del Merlot es $180 por botella.");
            break;
        case "chardonnay":
            alert("El precio del Chardonnay es $190 por botella.");
            break;
        default:
            alert("Lo sentimos, el vino que ingresaste no está disponible en nuestro catálogo.");
            break;
    }
}

function realizarCompra() {
    mostrarCatalogoPrecios();

    let inputCompra;
    let cantidad;
    let vino;

    do {
        inputCompra = prompt("Ingrese la cantidad de botellas que desea comprar y el número del vino que desea comprar (cantidad-númeroVino), por ejemplo: 3-2");

        if (inputCompra) {
            let datosCompra = inputCompra.split("-");
            cantidad = parseInt(datosCompra[0]);
            vino = parseInt(datosCompra[1]);

            if (isNaN(cantidad) || cantidad <= 0 || vino < 1 || vino > 4 || isNaN(vino)) {
                alert("Por favor, ingrese una opción válida en el formato cantidad-Número de Vino (por ejemplo, 3-2 para comprar 3 botellas del vino número 2).");
            }
        } else {
            return;
        }
    } while (isNaN(cantidad) || cantidad <= 0 || vino < 1 || vino > 4 || isNaN(vino));

    let vinosDisponibles = ["Malbec", "Cabernet Sauvignon", "Merlot", "Chardonnay"];
    let precios = [200, 220, 180, 190];

    let precioTotal = calcularTotal(cantidad, vinosDisponibles[vino - 1], precios[vino - 1]);
    alert("¡Gracias por tu compra! El total a pagar es: $" + precioTotal);
}

function calcularTotal(cantidad, vino, precio) {
    return cantidad * precio;
}

function mostrarCatalogoPrecios() {
    let catalogo = "Catálogo de vinos disponibles y precios:\n";
    catalogo += "1. Malbec: $200\n";
    catalogo += "2. Cabernet Sauvignon: $220\n";
    catalogo += "3. Merlot: $180\n";
    catalogo += "4. Chardonnay: $190\n";

    alert(catalogo);
}
