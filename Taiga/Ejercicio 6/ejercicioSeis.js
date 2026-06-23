// En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua.

// Si no elige el menú de la lista aparecerá la frase elija carne, pescado o verdura.

let pedido = prompt("Que desea cenar? Tiene 3 opciones: 1) Carne, 2) Pescado 3) Verduras");

switch (pedido) {
    case "1":
        alert(" 🥩Elegiste carne, cualquier menu que lleve carne, viene acompañado de un vino tinto a eleccion🍷");
        break;

    case "2":
        alert(" 🐟Elegiste pescado, cualquier menu que lleve pescado, viene acompañado con un vino blanco a eleccion🍸");
        break;

    case "3":
        alert(" 🥬Elegiste verduras, los menu mas light, vienen acompañados con una botella de agua🫗");
        break;

    default:
        alert("No elegió ningun de las 3 opciones. Vuelva a intentarlo😊")
        break;
}