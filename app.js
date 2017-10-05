function choice (opcion){
  var inicializar = "";
  do{ 
    inicializar= prompt("¿Desea cifrar o descifrar su mensaje?: 1) Cifrar mensaje - 2) Descifrar mensaje");
    if (inicializar !== ""){
      if (inicializar === "1"){
        cipher(isAValidMessage());
      }
      else if (inicializar === "2"){
        decipher(isAValidMessage());
      }
      else {
        alert("Ingrese el número correspondiente a su opción");
      }
    }
  }while (inicializar === "" || (inicializar!= "1" && inicializar!= "2"));
}

var mensajeDelCliente = "";

function isAValidMessage(validMessage){
  var noNumeros = /\d/;
  mensajeDelCliente = "";
  do{
    mensajeDelCliente= prompt("Ingrese su mensaje","ABCDEFG");
    if (mensajeDelCliente===""){
      alert("Ingrese su mensaje");
    }
    else if (noNumeros.test(mensajeDelCliente)){
        alert("No se permiten números en el mensaje"); 
      }
    } while (mensajeDelCliente==="");
  return mensajeDelCliente;
}

function cipher(mensajeDelCliente){
  var mensajeCifrado= "";
  for (var i = 0; i<mensajeDelCliente.length; i++) {
    if(mensajeDelCliente.charCodeAt(i)>=65 && mensajeDelCliente.charCodeAt(i)<=90){
      mensajeCifrado+= String.fromCharCode((mensajeDelCliente.charCodeAt(i)-65+33)%26+65);
    }
    else{
      mensajeCifrado+= String.fromCharCode((mensajeDelCliente.charCodeAt(i)-97+33)%26+97);
    } 
  }
  document.write("Su mensaje cifrado es "+mensajeCifrado)
}
  

function decipher(mensajeDelCliente){
  var mensajeDecifrado= "";
  for (var i = 0; i<mensajeDelCliente.length; i++) {
    if(mensajeDelCliente.charCodeAt(i)>=65 && mensajeDelCliente.charCodeAt(i)<=90){
      mensajeDecifrado+= String.fromCharCode((mensajeDelCliente.charCodeAt(i)-65+19)%26+65);
    }
    else{
      mensajeDecifrado+= String.fromCharCode((mensajeDelCliente.charCodeAt(i)-97+19)%26+97);
    } 
  }
  document.write("Su mensaje descifrado es "+mensajeDecifrado)
}

choice();