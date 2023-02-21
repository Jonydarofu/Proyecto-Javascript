let ciudad = prompt("Por favor ingrese su ciudad")
if (ciudad.toLowerCase() == "cordoba") {
    console.log("Usted es de Cordoba, puede comprar productos")
 mostrarmenu()
}
else {
    console.log("Para poder ingresar ustede debe ser de Cordoba")
}
function mostrarmenu(){
    let salirMenu = true
    do {
        let opcionMenu = prompt(`Ingrese la opción deseada
        1 - Seleccion de Producto
        2 - Borrar pedido
        3 - Consultar catálogo
        4 - Ordenar de mayor a menor por precio
        5 - Buscar productos
        0 - Salir del ménu`)
    
        switch (opcionMenu) {
            case "1":
                //SelecciondeProducto()
                console.log("seleccionar producto")
                break
            case "2":
                console.log("borrar pedido")
                break
            case "3":
                console.log("catalogo")
                break
            case "4":
                console.log("ordenar")
                break
            case "5":
                console.log("buscar")
                break
            case "0":
                console.log("Salir del menu")
                salirMenu = false
                break
            default:
                console.log("Opción no válida")
                break
        }
    } while (salirMenu)
}


//crear funcion, menu de seleccion productos


let IVA = 0.21
console.log(IVA)

//Precios productos del comercio
let precioMilaPollo = 900
let precioMilaPataMuslo = 900
let precioPechugaPollo = 1200
let precioBifedePechuga = 1200
let precioPataMuslo = 450
let precioConIVAMilaPollo = (precioMilaPollo * IVA)+precioMilaPollo
console.log(precioConIVAMilaPollo)

let precioConIVAMilaPataMuslo = (precioMilaPataMuslo * IVA)+precioMilaPataMuslo
console.log(precioConIVAMilaPataMuslo)


let precioConIVAPechugaPollo = (precioPechugaPollo * IVA)+precioPechugaPollo
console.log(precioConIVAPechugaPollo)

let precioConIVABifedePechuga = (precioBifedePechuga * IVA)+precioConIVABifedePechuga
console.log(precioConIVABifedePechuga)

let precioConIVAPataMuslo = (precioPataMuslo * IVA)+precioConIVAPataMuslo
console.log(precioConIVAPataMuslo)
