const input = document.getElementById("nombre");
const boton = document.getElementById("guardar");

boton.addEventListener("click", ()=> {
    const nombre = input.value;
    const datosUsuario = {
        nombre: nombre,
    };
    const datosJSON = JSON.stringify(datosUsuario);

    console.log("Datos guardados:", datosJSON);
});