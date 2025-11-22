const usuario = {
    nombre: "Carlos López",
    correo: "carlos@gmail.com",
    rol: "Usuario"
};

localStorage.setItem("datosUsuario", JSON.stringify(usuario));
const datosRecuperados = JSON.parse(localStorage.getItem("datosUsuario"));
console.log(datosRecuperados);