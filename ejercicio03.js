const boton = document.getElementById("boton");
const body = document.body;

let valor = true;
boton.addEventListener("click",()=>{
    if(valor == true){
        body.classList.add("oscuro");
        valor = false;
    }else {
        body.classList.remove("oscuro");
        valor = true;
    }
});