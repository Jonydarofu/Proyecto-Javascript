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
let precioConIVA = precioMilaPollo * IVA
console.log(precioConIVA)
let precioFinal = precioMilaPollo + precioConIVA
console.log(precioFinalMilaPollo) 

let precioMilaPataMuslo = 900
let precioConIVA = precioMilaPataMuslo * IVA
console.log(precioConIVA)
let precioFinal = precioMilaPataMuslo + precioConIVA
console.log(precioFinalMilaPataMuslo) 

let precioPechugaPollo = 1200
let precioConIVA = precioPechugaPollo * IVA
console.log(precioConIVA)
let precioFinal = precioPechugaPollo + precioConIVA
console.log(precioFinalPechugaPollo)


let precioBifedePechuga = 1200
let precioConIVA = precioBifedePechuga * IVA
console.log(precioConIVA)
let precioFinal = precioBifedePechuga + precioConIVA
console.log(precioFinalBifedePechuga)

let precioPataMuslo = 450 
let precioConIVA = precioPataMuslo * IVA
console.log(precioConIVA)
let precioFinal = precioPataMuslo + precioConIVA
console.log(precioFinalPataMuslo)


console.log(0)
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)

for(let index = 0;index <=20; index+2){
    console.log ("valor iteracion:" + index)

}

//let numTabla = parseInt (prompt("Ingrese el num que desea la tabla de multiplicar"))
//console.log (numTabla)
//for(let i = 0; i<=10;i++){
//    console.log(`${numTabla} x ${i} = ${numTabla * i}`) 
//}

//let cantidadNotas = parseInt(prompt ("Ingrese la cantidad de notas que desea ingresar"))
//let total = 0
//for (let i = 1; i <= cantidadNotas; i++){
//    let notas= pasrseInt(prompt(`Ingrese el valor de la nota n° ${i}`))
//    console.log(nota)
//    total = total + nota
 //   console.log (`total  parcial: ${total}`)  
// }


//let bandera = true 
//while(bandera){
//    let autor = prompt("Ingrese el nombre del autor")
//    let libro = prompt("Ingrese nombre del libro")
//     console.log(`El nombre del autor es ${autor} escribio el libro ${libro}`)
//     let pregunta = prompt("Quiere seguir ingresando libros. ESC para cortar")
//     if(pregunta.toUpperCase()=="ESC")
//     bandera = false
//}