const form = document.getElementById("form");
const tbody = document.getElementById("tbody");

//AQUI SE GUARDARAON LOS USUARIOS
let usuarios = [];

//ESTO SERVIRA PARA VERIFICAR SI ESTAMOS EDITANDO
let editId = null;

//FUNCION PARA ACTUALIZAR LA TABLA
function render() {
  tbody.innerHTML = "";

  usuarios.forEach((u, i) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${u.nombre}</td>
      <td>${u.edad}</td>
      <td>
        <button data-action="edit" data-id="${i}">Editar</button>
        <button data-action="delete" data-id="${i}">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
//BOTON AGREGAR
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = document.getElementById("edad").value;

  //SI EDITID ES NULL SIGNIFICA QUE ESTAMOS EDITAN
  if (editId !== null) {
    usuarios[editId] = { nombre, edad };
    editId = null;   
  } else {
    usuarios.push({ nombre, edad });
  }
  //ACTUALIZA LA TABLA
  render();     
});

tbody.addEventListener("click", (e) => {
  const btn = e.target;

  const id = btn.dataset.id;

  //ACCION ELIMINAR
  if (btn.dataset.action === "delete") {
    usuarios.splice(id, 1);
    render();
  }

  //ACCION EDITAR
  if (btn.dataset.action === "edit") {
    const user = usuarios[id];
    document.getElementById("nombre").value = user.nombre;
    document.getElementById("edad").value = user.edad;
    editId = id;//SE MARCA QUE ESTA EDITANDO
  }
});

