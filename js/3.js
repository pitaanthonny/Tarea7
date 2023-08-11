function concatenarCadenas() {
    var cadenas = [];
    
    while (true) {
      var cadena = prompt("Ingrese una cadena de texto (o presione 'cancelar' para salir):");
      
      if (cadena === null) {
        break;
      }
      
      cadenas.push(cadena);
    }
    
    if (cadenas.length > 0) {
      var resultado = cadenas.join(" - ");
      document.getElementById("resultado").textContent = "Cadenas concatenadas: " + resultado;
    } else {
      document.getElementById("resultado").textContent = "No se ingresaron cadenas.";
    }
  }