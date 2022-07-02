/* let ciudad=["lima","arequipa","trujillo","zarate","cuzco"];
console.log(ciudad);
document.write(ciudad+"<br>");
document.write(ciudad.length+"<br>");
ciudad[3]="lambayeque";
document.write(ciudad+"<br>"); */

//ciudad.push("cuzco","puno");
//document.write(ciudad.push());

//ciudad.pop();
//document.write(ciudad.pop()+"<br>");

//ciudad.unshift("piura");
//document.write(ciudad+"<br>");

//ciudad.shift();[]
//document.write(ciudad+"<br>");
//ciudad.sort();
//document.write(ciudad+"<br>");

//let numeros=[];

/* numeros[0]=8;
numeros[1]=2;
numeros[2]=5;
numeros[3]=1;
numeros[4]=9; */
//let num=prompt("cuantos valores desea ingresar al array?")

/* for(let i=0;i<num;i++){
    
    numeros[i]=prompt("Ingrese valores:");
}

document.write(numeros+"<br>");

const fc=function(a,b){
    return a-b;
}
numeros.sort(fc);

document.write(numeros);

 */


function cargarEjemplo(){
    document.getElementById("numerosEjem").value="6,99,56,15,68";

}

function reiniciar(){
    location.reload();
}

function calcular(){
    let valores_array=document.getElementById("numerosEjem").value.split(/,/);
    let mayor= -Infinity;
    let menor= +Infinity;
    let suma=0;
    let promediar=0;

    for(let i=0;i<valores_array.length;i++){
        suma=parseInt(valores_array[i])+suma;
    }

    for(let i=0;i<valores_array.length;i++){
        if(parseInt(valores_array[i])>mayor) mayor=valores_array[i];
    }
    

    document.getElementById("Resultado").innerHTML="La suma es : "+ suma+"<br>"+
                                                    "El mayor numero es : "+ mayor;
   

}