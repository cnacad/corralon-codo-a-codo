const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombre").value;
    if (nombreCliente.length < 3 ) {
      Toastify({
        text: "complete el campo nombre",
        position:"center",
      }).showToast();
      return false;
  }
    const domicilioCliente = document.getElementById("domicilio").value;
    if (domicilioCliente < 5) {
      Toastify({
        text: "complete el campo domicilio",
        position:"center"
      }).showToast();
      return false;
    }
    
  };