const boton = document.getElementById("boton");
const parrafo = document.querySelector("P");

let valor = true;
boton.addEventListener("click",()=>{
    if(valor==true){
        parrafo.textContent = "Texto cambiado";
        valor = false;
    }else {
        parrafo.textContent = "Texto original";
        valor = true;
    }
});