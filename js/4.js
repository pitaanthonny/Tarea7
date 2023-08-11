function sumarNumeros() {
    var suma = 0;
    
    while (true) {
      var input = prompt("Ingrese un número (o presione 'cancelar' para salir):");
      
      if (input === null) {
        break;
      }
      
      var numero = parseFloat(input);
      
      if (!isNaN(numero)) {
        suma += numero;
      } else {
        alert("No es un número válido. Intente nuevamente.");
      }
    }
    
    document.getElementById("resultado").textContent = "La suma total de los números introducidos es: " + suma;
  }