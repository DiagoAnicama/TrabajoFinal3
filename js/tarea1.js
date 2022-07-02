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


// TRABAJO DEL CRONOMETRO UNIDAD 4


const boton1 = document.getElementById("boton1");
const boton0 = document.getElementById("boton0");
boton1.addEventListener("click", accion1);
boton0.addEventListener("click", reiniciar);



const spanMinutos = document.querySelector(".minutos");
const spanSegundos = document.querySelector(".segundos");
const spanCentesimas = document.querySelector(".centesimas");



let minutos = 0;
let segundos = 0;
let centesimas = 0;

let corriendo = null;


function dibujarTiempo(){
	spanMinutos.innerHTML = minutos;
	spanSegundos.innerHTML = segundos;
	spanCentesimas.innerHTML = centesimas;
}

function reiniciar(){
	minutos = 0;
	segundos = 0;
	centesimas = 0;
	dibujarTiempo();
}

function accion1(){
	if(corriendo){
		detener();
		boton0.disabled = false; 
	}
	else{
		boton0.disabled = true; 
		iniciar();
	}
}

function iniciar(){

	const sumarMinuto = () => {

		if(minutos < 99) minutos++;
	}

	const sumarSegundo = () => {

		if(segundos === 59){
			segundos = 0;
			sumarMinuto();
		}
		else{
			segundos++;
		}
	}

	const incrementar = () => {

		if(centesimas === 99){
			centesimas = 0;
			sumarSegundo();
		}
		else{
			centesimas++;
		}

		dibujarTiempo();
	}

	corriendo = setInterval(incrementar, 10);
	boton1.innerHTML = "Detener";
}

function detener(){

	clearInterval(corriendo);
	corriendo = null;
	boton1.innerHTML = "Iniciar";
}

dibujarTiempo();