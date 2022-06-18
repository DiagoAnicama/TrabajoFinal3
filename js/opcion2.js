
/* function muestraFecha(){
  let fecha;
  fecha=new Date();
  let cadena= fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
  return cadena;
}
document.getElementById("fecha").innerHTML=muestraFecha(); */
function muestraFecha(){
  let fecha;
  fecha=new Date();
  let cadena= fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
  return cadena;
}

document.getElementById("fecha").innerHTML=muestraFecha();


function muestraHora(){
let hora;
hora=new Date();
let cadena= hora.getHours()+":"+hora.getMinutes()+":"+hora.getSeconds();
return cadena;
}
document.getElementById("hora").innerHTML= muestraHora();

function borrar() {
document.getElementById("formulario").reset();
}

function calcular() {
// entrada
let a=parseInt(document.getElementById("num1").value);
let b=parseInt(document.getElementById("num2").value);
let c=parseInt(document.getElementById("num3").value);

// mostrar resultado (ó errores)

var x1 = ((-b )-( Math.sqrt(Math.pow(b, 2) )-( 4 * a * c))) / (2 * a);
var x2 = ((-b )+( Math.sqrt(Math.pow(b, 2) )-( 4 * a * c))) / (2 * a);
document.getElementById("xuno").innerHTML = x1;
document.getElementById("xdos").innerHTML = x2;
}

