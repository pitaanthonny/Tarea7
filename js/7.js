
function calcularPrecioConIVA() {
    var precio = parseFloat(document.getElementById("precio").value);
    var iva = parseFloat(document.getElementById("iva").value) || 0.13;
    
    var precioConIVA = precio * (1 + iva);
    
    document.getElementById("resultado").textContent = "Precio con IVA: " + precioConIVA.toFixed(2);
  }
  