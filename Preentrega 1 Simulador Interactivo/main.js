let precioProducto1 = 10000;
let precioProducto2 = 5000;
let precioProducto3 = 1000;
let precioProducto4 = 12000;
let nombreProducto1 = "Ron Antiguo"
let nombreProducto2 = "Vino Malbec"
let nombreProducto3 = "Vodka Smirnoff"
let nombreProducto4 = "Ron Cacique"
let total = 0;

function sumaTotal(precioProducto,costoTotal){
    return precioProducto+costoTotal;
}

function restaTotal(costoTotal,precioProducto){
    return costoTotal-precioProducto;
}


let seleccion = prompt("Has entrado a La Cueva , elija el producto que desee comprar: \n 1 - Ron Antiguo - Precio: $10000 \n 2 - Vino Malbec - Precio: $5000 \n 3 - Vodka Smirnoff - Precio: $1000 \n 4 - Ron Cacique - Precio: $12000 \n 5 - Finalizar Compra");

while (seleccion !="5"){
    switch (seleccion){
        case "1":
        alert("Producto elegido: "+nombreProducto1+": $"+ precioProducto1 +"\n"+ "Total acumulado: " +"$"+ sumaTotal(precioProducto1,total))
        total += precioProducto1;
        break;
        case "2":
            alert("Producto elegido: "+nombreProducto2+": $"+ precioProducto2 +"\n"+ "Total acumulado: " +"$"+ sumaTotal(precioProducto2,total))
            total += precioProducto2;
            break;
        
        case "3":
            alert("Producto elegido: "+nombreProducto3+": $"+ precioProducto3 +"\n"+ "Total acumulado: " +"$"+ sumaTotal(precioProducto3,total))
            total += precioProducto3;
            break;
        
        case "4":
            alert("Producto elegido: "+nombreProducto4+": $"+ precioProducto4 +"\n"+ "Total acumulado: " +"$"+ sumaTotal(precioProducto4,total))
            total += precioProducto4;
            break; 
    }

    seleccion = prompt("¿Qué otra acción desea realizar?, seleccione si quiere comprar:\n 1 - Ron Antiguo - Precio: $10000 \n 2 - Vino Malbec - Precio: $5000 \n 3 - Vodka Smirnoff - Precio: $1000 \n 4 - Ron Cacique - Precio $12000 \n 5 - Finalizar compra")

}

if (total == 0){ 
    alert("¡No has seleccionado ningún producto! \n Por favor selecciona un producto de la lista y vuelve a finalizar la compra. \n ¡¡Te Esperamos :D !!") 
} else{
    alert("Muchas gracias por elegirnos, el monto total de tu compra es de: "+"$"+ total)
    alert("¡Vuelve Pronto!")
}
