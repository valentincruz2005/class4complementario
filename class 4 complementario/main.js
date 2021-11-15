function calcular (a,b) {
  return  a+b}
let precio1 = parseInt (prompt ("INGRESE PRECIO"))
let iva = (precio1 * 0.21)
let resultado= calcular (precio1,iva)
console.log ("EL PRECIO CON IVA ES " + resultado)


let descuento = precio1*0.15
function descontar (a,b){
return    a-b
}
let precioConDescuento= descontar (resultado,descuento)
console.log ("EL MONTO TOTAL CON DESCUENTO ES " + precioConDescuento)

 let tarejaDeCredito = parseInt (prompt ("INGRESE SU NUMERO DE TRAJETA"))
 let nombreDelTitular = prompt ("INGRESE EL NOMBRE DEL TITULAR")
 function concatenacion (a,b) {
   return  a+" "+b
 }
let titular = concatenacion (nombreDelTitular,tarejaDeCredito)

console.log ("EL MONTO A PAGAR CON DESCUENTO ES DE " + precioConDescuento + "  EL TITULAR DE LA TARJETA ES " + titular)
