
function calcularLetraCedula() {
    var input = document.getElementById("cedulaInput").value;
    var numeroCedula = parseInt(input);
    
    var resultado = document.getElementById("resultado");
    
    if (!isNaN(numeroCedula) && numeroCedula >= 0 && numeroCedula <= 99999999) {
      var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
      var indice = numeroCedula % 23;
      var letraCedula = letras.charAt(indice);
      
      resultado.textContent = "La letra de la cédula es: " + letraCedula;
    } else {
      resultado.textContent = "Número de cédula no válido. Intente nuevamente.";
    }
  }
  