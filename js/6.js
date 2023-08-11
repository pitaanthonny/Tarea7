
function crearTabla() {
    var filas = parseInt(document.getElementById("filas").value);
    var columnas = parseInt(document.getElementById("columnas").value);
    
    var tabla = document.getElementById("tabla");
    tabla.innerHTML = ""; // Limpiar la tabla antes de crear una nueva
    
    var numero = filas * columnas;
    
    for (var i = 0; i < filas; i++) {
      var fila = document.createElement("tr");
      
      for (var j = 0; j < columnas; j++) {
        var celda = document.createElement("td");
        celda.textContent = numero;
        fila.appendChild(celda);
        numero--;
      }
      
      tabla.appendChild(fila);
    }
  }
  