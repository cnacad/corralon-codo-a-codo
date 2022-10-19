const box = document.getElementById("box");
const p = document.createElement("P");
const url = "https://criptoya.com/api/dolar";
function quotegen(){
  fetch(url)
    .then(response => {
      return response.json()
    })
    .then(data => {
    console.log(data);
    p.innerHTML = 'Dolar oficial a $'+ data.oficial;
    box.appendChild(p);
    })
}



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