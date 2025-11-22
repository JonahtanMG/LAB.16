const imagenes = document.getElementsByTagName("img");
const div = document.getElementById("imagenGrande");
const imagGrande = document.createElement("img");
div.appendChild(imagGrande)

for(let img of imagenes){
    img.addEventListener("click",()=>{
        imagGrande.setAttribute("src", img.getAttribute("src"));
    });
};