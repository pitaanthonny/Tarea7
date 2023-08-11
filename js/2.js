function mostrarCalificacion() {
    var nota = parseFloat(document.getElementById("nota").value);
    
    if (!isNaN(nota)) {
      var calificacion = "";
      
      if (nota >= 0 && nota < 3) {
        calificacion = "Muy deficiente";
      } else if (nota >= 3 && nota < 5) {
        calificacion = "Insuficiente";
      } else if (nota >= 5 && nota < 6) {
        calificacion = "Suficiente";
      } else if (nota >= 6 && nota < 7) {
        calificacion = "Bien";
      } else if (nota >= 7 && nota < 9) {
        calificacion = "Notable";
      } else if (nota >= 9 && nota <= 10) {
        calificacion = "Sobresaliente";
      } else {
        calificacion = "Nota inválida. Ingrese un número entre 0 y 10.";
      }
      
      document.getElementById("mensaje").innerHTML = "Calificación: " + calificacion;
    } else {
      document.getElementById("mensaje").innerHTML = "Por favor, ingrese una nota válida.";
    }
  }