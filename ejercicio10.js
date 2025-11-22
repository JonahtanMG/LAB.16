const cuadrado = document.getElementById("cuadrado");
const moverBtn = document.getElementById("moverBtn");
const reiniciarBtn = document.getElementById("reiniciarBtn");
moverBtn.addEventListener("click", function () {cuadrado.classList.add("mover");});
reiniciarBtn.addEventListener("click", function () {cuadrado.classList.remove("mover");});
