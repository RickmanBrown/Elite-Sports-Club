let contador = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  proximaImagem();
}, 5000);

function proximaImagem() {
  contador++;

  if (contador > 5) {
    contador = 1;
  }

  document.getElementById("radio" + contador).checked = true;
}