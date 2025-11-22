const form = document.getElementById("formulario");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const inputs = form.getElementsByTagName("input");
    
    for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        
        //REMUEVE LOS MENSAJES CUANDO SE LLENE LA CASILLA
        const spanExistente = input.nextElementSibling;
        if (spanExistente) {
            spanExistente.remove();
        }
        
        //PONE EL MENSAJE SI LA CASILLA ESTA VACIA
        if (input.value === "" || input.value === null) {
            const errorSpan = document.createElement("span");
            errorSpan.style.color = "red";
            errorSpan.textContent = " Este campo es obligatorio";
            input.parentNode.appendChild(errorSpan);
        }
    }
});