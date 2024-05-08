const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//boton encriptar
function btnEncriptar(){
     const textoEncriptado=  encriptar(textArea.value)
     mensaje.value= textoEncriptado
     textArea.value= "";
     mensaje.style.backgroundImage="none"
}

//funcion para encriptar el texto
function encriptar(stringEncriptado){
    let matriCodigo=[["e","enter"],["i","imes"],["a","ai",],["o","ober"],["u","ufat"]];
    stringEncriptado= stringEncriptado.toLowerCase()
  
    for( let i=0; i < matriCodigo.length;i++){
        if(stringEncriptado.includes(matriCodigo[i][0])){
            stringEncriptado= stringEncriptado.replaceAll(matriCodigo[i][0],matriCodigo[i][1])
        }

    }
 return stringEncriptado
}
// boton para desencriptar
function btnDesencritar(){
    const textoEncriptado=  desencriptar(textArea.value)
    mensaje.value= textoEncriptado
    textArea.value= "";
    
}
//funcion para desencriptar
function desencriptar(stringDesencriptado){
    let matriCodigo=[["e","enter"],["i","imes"],["a","ai",],["o","ober"],["u","ufat"]];
    stringDesencriptado= stringDesencriptado.toLowerCase()
  
    for( let i=0; i < matriCodigo.length; i++){
        if(stringDesencriptado.includes(matriCodigo[i][1])){
            stringDesencriptado= stringDesencriptado.replaceAll(matriCodigo[i][1], matriCodigo[i][0])
        }

    }
    return stringDesencriptado
}

//funcion boton copiar
  function clipboard(){
    const texto_copiar = document.querySelector(".mensaje");
    navigator.clipboard.writeText(texto_copiar.value);

}
const copiar = document.querySelector('.Copiar');
copiar.addEventListener( 'click', function() {clipboard();});