if (provinciaIngresada == "Cordoba"){
    console.log ("Usted es de Cordoba, puede comprar productos")
}
 /* Tenes 2 repos de git vinculados a las 2 carpetas
tenes 1 .git en Proyecto-Javascript y otro .git en mi-repositorio 
Voy a borrar el mi-repositorio 
*/
let IVA = 0.21
console.log(IVA)

//Precios productos del comercio
let precioMilaPollo = 900
let precioCONIVA = precioMilaPollo * IVA
console.log(precioCONIVA)
let precioFinal = precioMilaPollo + precioCONIVA
console.log(precioFinal) 

let precioMilaPataMuslo = 900
let precioCONIVA = precioMilaPataMuslo * IVA
console.log(precioCONIVA)
let precioFinal = precioMilaPataMuslo + precioCONIVA
console.log(precioFinal) 

let precioPechugaPollo = 1200
let precioCONIVA = precioPechugaPollo * IVA
console.log(precioCONIVA)
let precioFinal = precioPechugaPollo + precioCONIVA
console.log(precioFinal)


let precioBifedePechuga = 1200
let precioCONIVA = precioBifedePechuga * IVA
console.log(precioCONIVA)
let precioFinal = precioBifedePechuga + precioCONIVA
console.log(precioFinal)

let precioPataMuslo = 450 
let precioCONIVA = precioPataMuslo * IVA
console.log(precioCONIVA)
let precioFinal = precioPataMuslo + precioCONIVA
console.log(precioFinal)


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

let numTabla = parseInt (prompt("Ingrese el num que desea la tabla de multiplicar"))
console.log (numTabla)
for(let i = 0; i<=10;i++){
    console.log(`${numTabla} x ${i} = ${numTabla * i}`) 
}

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