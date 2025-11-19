const boton = document.getElementById("boton");
const parrafo = document.querySelector("P");

boton.addEventListener("click",()=>{
    parrafo.textContent = "Texto cambiado";
});