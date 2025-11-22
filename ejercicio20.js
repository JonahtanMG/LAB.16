// Selección usando getElementById
const form = document.getElementById("form");
const perfilDiv = document.getElementById("perfil");

// Al cargar la página, verificamos si hay datos guardados
window.onload = function () {
  const datos = localStorage.getItem("perfil");
  if (datos) {
    mostrarPerfil(JSON.parse(datos));
  }
};

// Evento submit del formulario
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;
  const pais = document.getElementById("pais").value;

  const perfil = { nombre, edad, pais };

  localStorage.setItem("perfil", JSON.stringify(perfil));
  mostrarPerfil(perfil);
  form.reset();
});

// Función para mostrar el perfil guardado
function mostrarPerfil(perfil) {
  perfilDiv.innerHTML =
    "Nombre: " + perfil.nombre + "<br>" +
    "Edad: " + perfil.edad + "<br>" +
    "País: " + perfil.pais;
}