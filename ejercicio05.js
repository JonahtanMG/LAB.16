const eliminar = document.getElementById("eliminar");
const input = document.getElementById("input");
const lista = document.getElementById("lista");
//SE EJECUTA CON ENTER
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        let nuevoItem = document.createElement("li");
        nuevoItem.textContent = input.value;
        lista.appendChild(nuevoItem);
    }
});

eliminar.addEventListener("click", () => {
    lista.removeChild(lista.lastElementChild);
});
