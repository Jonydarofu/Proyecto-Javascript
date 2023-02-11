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

//crear funcion calcular iva
//function CalcularIVA(producto){
    //return precioconiva}
//iva va dentro de la funcion 
//fin de la funcion

//selleccion de productos
switch (Productos) {
    case "1":
        let addMilaPollo = parseInt(prompt("Cuantos kilos de MilaPollo desea agregar al carrito"))
        precioMilaPollo = (precioConIVAMilaPollo * addMilaPollo)
        break

    case "2":
        let addMilaPataMuslo = parseInt(prompt("Cuantos kilos de MilaPataMuslo desea agregar al carrito"))
        precioMilaPataMuslo = (precioConIVAMilaPataMuslo * addMilaPataMuslo)
        break

    case "3":
        let addPechugaPollo = parseInt(prompt("Cuantos kilos de PechugaPollo desea agregar al carrito"))
        precioPechugaPollo = (precioConIVAPechugaPollo * addPechugaPollo)
        break

    case "4":
        let addBifedePechuga = parseInt(prompt("Cuantos kilos de BifedePechuga desea agregar al carrito"))
        precioBifedePechuga = (precioConIVABifedePechuga * addBifedePechuga)
        break

    case "5":
        let addPataMuslo = parseInt(prompt("Cuantos kilos de PataMuslo desea agregar al carrito"))
        precioPataMuslo = (precioConIVAPataMuslo * addPataMuslo)
        break
        default:
            console.log("Opción no válida")
            break

}
//finaliza funcion

let metodoPago = true
let optionPago = prompt(`Selecciona metodo de Pago
    1- Efectivo
    2- Tarjeta de Debito
    3- Tarjeta de credito
    4- Transferencia
    0- Salir del Menu`)

function agregarProducto() {
    let productoIngresado = prompt("Ingrese el nombre del producto")
    let precioIngresado = parseInt(prompt("Ingrese el precio del producto"))
    const ProductoIngresado = {
        producto: ProductoIngresado,
        precio: precioIngresado
    }
    console.log(ProductoIngresado)
    mostrarDatosProducto(ProductoIngresado, precioIngresado)
}

function mostrarDatosProducto(producto, precio) {
    console.log(`El producto elegido es ${producto} y vale ${precio}`)
}

const arrayString = ["Mila de Pechuga", "Mila de PataMuslo", "Pechuga de Pollo", "Bife de Pechuga", "Pata Muslo"]
console.log(arrayString)

console.log(arrayString[3])
console.log(arrayString[0])

arrayString.push("Bife de Pata Muslo", "Milanesas Rellenas")
console.log(arrayString)
arrayString.unshift("Pollo Entero")
console.log(arrayString)

arrayString.pop()
arrayString.pop()
arrayString.shift()
console.log(arrayString)

arrayString.splice(2, 4)
console.log(arrayString)

console.log(arrayString.join(" - "))
console.log(arrayString.join(" * "))

function mostrarCatalogo(array) {
    console.log("Los Productos disponibles son:")
    for (let elemento of array) {
        console.log(elemento.id, elemento.producto, elemento.precio)
    }
}

function mostrarCatalogoForEach(arr) {
    console.log("Nuestro catalogo es con forEach")
    arr.forEach(
        (producto) => {
            console.log(`${producto.id} - que vale ${producto.precio}`)
        }
    )
}

function buscarporProducto(array) {
    let productoBuscado = prompt("Ingrese el nombre del producto que desea buscar")
    let productoEncontrado = array.find(
        (producto) => { return producto.producto == "MiladePollo" },
        (producto) => producto.producto.toLowerCase() == ProductoBuscado.toLowerCase()
    )
    if (productoEncontrado == undefined) {
        console.log(`${productoBuscado} no se encuentra en nuestro stock`)
    } else {
        console.log(productoEncontrado)
    }
}


