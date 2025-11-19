const aumentar = document.getElementById("aumentar");
const disminuir = document.getElementById("disminuir");
const valorActual = document.querySelector("span");
let valor = parseFloat(valorActual.textContent);
const texto = document.querySelector("p");

aumentar.addEventListener("click", () => {
    valor++;
    valorActual.textContent = valor;
    if (valor > 0) {
        texto.textContent = "";
    }
})

disminuir.addEventListener("click", () => {
    if (valor - 1 < 0) {
        texto.textContent = "El valor no puede ser menor que 0";
    } else {
        valor--;
        valorActual.textContent = valor;
    }
})
