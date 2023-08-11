function verificarEdad() {
    var edad = parseInt(document.getElementById("edad").value);
    
    if (!isNaN(edad)) {
      if (edad >= 18) {
        document.getElementById("mensaje").innerHTML = "¡Puede conducir!";
      } else {
        document.getElementById("mensaje").innerHTML = "Aún no puede conducir.";
      }
    } else {
      document.getElementById("mensaje").innerHTML = "Por favor, ingrese una edad válida.";
    }
  }