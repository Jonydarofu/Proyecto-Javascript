let ciudad = parseInt(prompt("Por favor ingrese su ciudad"))
if (provinciaIngresada == "Cordoba"){
    console.log ("Usted es de Cordoba, puede comprar productos")
    alert("Cordoba")
}
 else{
    console.log("Para poder ingresar ustede debe ser de Cordoba")
    alert("Para poder ingresar usted debe ser de Cordoba")
 }

let metodoPago = true
let optionPago = prompt(`Selecciona metodo de Pago
    1- Efectivo
    2- Tarjeta de Debito
    3- Tarjeta de credito
    4- Transferencia
    0- Salir del Menu`)

let IVA = 0.21
console.log(IVA)

//Precios productos del comercio
let precioMilaPollo = 900
let precioConIVAMilaPollo = precioMilaPollo * IVA
console.log(precioConIVAMilaPollo)
let precioFinalMilaPollo = precioMilaPollo + precioConIVA
console.log(precioFinalMilaPollo) 

let precioMilaPataMuslo = 900
let precioConIVAMilaPataMuslo = precioMilaPataMuslo * IVA
console.log(precioConIVAMilaPataMuslo)
let precioFinalMilaPataMuslo = precioMilaPataMuslo + precioConIVA
console.log(precioFinalMilaPataMuslo) 

let precioPechugaPollo = 1200
let precioConIVAPechugaPollo = precioPechugaPollo * IVA
console.log(precioConIVAPechugaPollo)
let precioFinalPechugaPollo = precioPechugaPollo + precioConIVA
console.log(precioFinalPechugaPollo)


let precioBifedePechuga = 1200
let precioConIVABifedePechuga = precioBifedePechuga * IVA
console.log(precioConIVABifedePechuga)
let precioFinalBifedePechuga = precioBifedePechuga + precioConIVA
console.log(precioFinalBifedePechuga)

let precioPataMuslo = 450 
let precioConIVAPataMuslo = precioPataMuslo * IVA
console.log(precioConIVAPataMuslo)
let precioFinalPaataMuslo = precioPataMuslo + precioConIVA
console.log(precioFinalPataMuslo)

let salirMenu = true
do{
    let opcionMenu = prompt(`Ingrese la opción deseada
    1 - Seleccion de Producto
    2 - Borrar pedido
    3 - Consultar catálogo
    4 - Ordenar de mayor a menor por precio
    5 - Buscar productos
    0 - Salir del ménu`)

    switch(opcionMenu){
                case "1":
                     SelecciondeProducto()
                 break
                case "2":
                     console.log("Borrar pedido")
                 break
                case "3":
                     console.log("Consultar")
                 break
                case "4":
                     console.log("Ordenar")
                 break 
                case "5":
                     console.log("Buscar")
                 break
                case "0":
                     console.log("Salir del menu")
                     salirMenu = false
                 break
                default:
                     console.log("Opción no válida")
                 break             
             }
         }while(salirMenu)


//selleccion de productos
switch(Productos){
    Producto"1":
    let addMilaPollo = parseInt(prompt("Cuantos kilos de MilaPollo desea agregar al carrito"))
    precioMilaPollo = precioFinalMilaPollo * addMilaPollo
    break

    Producto"2":
    let addMilaPataMuslo = parseInt(prompt("Cuantos kilos de MilaPataMuslo desea agregar al carrito"))
    precioMilaPataMuslo = precioFinalMilaPataMuslo * addMilaPataMuslo
    break

    Producto"3":
    let addPechugaPollo = parseInt(prompt("Cuantos kilos de PechugaPollo desea agregar al carrito"))
    precioPechugaPollo = precioFinalPechugaPollo * addPechugaPollo
    break

    Producto"4":
    let addBifedePechuga = parseInt(prompt("Cuantos kilos de BifedePechuga desea agregar al carrito"))
    precioBifedePechuga = precioFinalBifedePechuga * addBifedePechuga
    break

    Producto"5":
    let addPataMuslo = parseInt(prompt("Cuantos kilos de PataMuslo desea agregar al carrito"))
    precioPataMuslo = precioFinalPataMuslo * addPataMuslo
    break
    
}

function agregarProducto(){
    let ProductoIngresado = prompt("Ingrese el nombre del producto")
    let precioIngresado = parseInt(prompt("Ingrese el precio del producto"))
    const ProductoIngresado = {
        producto: ProductoIngresado,
        precio: precioIngresado
    }
    console.log(ProductoIngresado)
    mostrarDatosProducto(ProductoIngresado, precioIngresado)
}

function mostrarDatosProducto(producto, precio){
    console.log(`El producto elegido es ${producto} y vale ${precio}`)   
}

const arrayString = [ "Coca-Cola", "Sprite", "Fanta", "Fanta Limon", "Shoeppers", "Cepita Durazno"]
console.log (arrayString)

console.log(arrayString[3])
console.log(arrayString[0])

arrayString.push("Ades", "Powerade")
console.log(arrayString)
arrayString.unshift("Coca Cola Zero")
console.log(arrayString)

arrayString.pop()
arrayString.pop()
arrayString.shift()
console.log(arrayString)

arrayString.splice(2,4)
console.log(arrayString)

console.log(arrayString.join(" - "))
console.log(arrayString.join(" * "))

function mostrarCatalogo(array){
    console.log("Los Productos disponibles son:")
    for(let elemento of array){
        console.log(elemento.id, elemento.producto, elemento.precio)
    }
}

function mostrarCatalogoForEach(arr){
    console.log("Nuestro catalogo es con forEach")
    arr.forEach(
        (producto)=>{
            console.log(`${producto.id} - que vale ${producto.precio}`)
        }
    )
}

function buscarporProducto(array){
    let productoBuscado = prompt("Ingrese el nombre del producto que desea buscar")
    let productoEncontrado = array.find(
        (producto) => {return producto.producto == "MiladePollo"} 
        (producto) => producto.producto.toLowerCase() == ProductoBuscado.toLowerCase() 
    )
    if(productoEncontrado == undefined){
        console.log(`${productoBuscado} no se encuentra en nuestro stock`)
    }else{
        console.log(productoEncontrado)
    }
}


