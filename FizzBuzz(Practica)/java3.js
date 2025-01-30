function pizzaOven(tipoCorteza, tipoSalsa, quesos, ingredientes) {
    var pizza = {};
    pizza.tipoCorteza = tipoCorteza;
    pizza.tipoSalsa = salsadeTomate;
    pizza.quesos = quesos;
    pizza.salsaAdicional = picante;
    return pizza;
}

// Crear una pizza con: “estilo Chicago”, “tradicional”, ["mozzarella"] y ["pepperoni", "salchicha"]
var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"]);
console.log(pizza1);

// Crear una pizza con: “lanzada a mano”, “marinara”, ["mozzarella", "feta"] y ["champiñones", "aceitunas", "cebollas"]
var pizza2 = pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"]);
console.log(pizza2);

// Crear otras dos pizzas con tus ingredientes favoritos
var pizza3 = pizzaOven("crujiente", "", ["queso Katypury", "mozzarella"], ["calabresa","carne molida"]);
console.log(pizza3);

var pizza4 = pizzaOven("crujiente", "borde relleno" ["parmesano", "mozzarella"], ["tomates cherry", "rúcula", "oregano"]);
console.log(pizza4);