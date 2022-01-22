let botonEncriptar=document.querySelector("#encriptar");
let botonDesencriptar=document.querySelector("#desencriptar");



function encriptar(evento) {
let input=document.querySelector("#input-ingreso").value;

let cadena=input.toLowerCase();

arrayCadena=cadena.split("");

for(let i=0;i<arrayCadena.length;i++){

	if(arrayCadena[i]==='a'){
			arrayCadena[i]='ai';
		}
		if(arrayCadena[i]==='e'){
			arrayCadena[i]='enter';
		}
		if(arrayCadena[i]==='o'){
			arrayCadena[i]='ober';
		}
		if(arrayCadena[i]==='u'){
			arrayCadena[i]='ufat';
		}
		if(arrayCadena[i]==='i'){
			arrayCadena[i]='imes';
		}
}

let campoResultado=document.querySelector(".campo-resultado");
let resultado=campoResultado.querySelector("#resultado");

resultado.value=arrayCadena.join('');


}

function desencriptarTexto(){

let input=document.querySelector("#input-ingreso").value;

let cadena=input.toLowerCase();


let a= /ai/g;
let e = /enter/g;
let i= /imes/g;
let o = /ober/g;
let u= /ufat/g;



let cadena2 = cadena.replace(a,"a").replace(e,"e").replace(i,"i").replace(o,"o").replace(u,"u");

console.log(cadena2)



let campoResultado=document.querySelector(".campo-resultado");
let resultado=campoResultado.querySelector("#resultado");

resultado.value=cadena2;



}

let botonLimpiar=document.querySelector("#boton-limpiar");
function limpiar(){
location.reload();

}


let botonCopiar=document.querySelector("#boton-copiar");

function copiar(){
let cadena=document.getElementById("resultado");
cadena.select();
cadena.setSelectionRange(0,99999);
document.execCommand('copy');

}




botonCopiar.onclick=copiar;
botonLimpiar.onclick=limpiar;
botonEncriptar.onclick=encriptar;
botonDesencriptar.onclick=desencriptarTexto;


