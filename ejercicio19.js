const tareasJSON = `[
    {"titulo": "Estudiar", "completada": true},
    {"titulo": "Hacer ejercicio", "completada": false},
    {"titulo": "Comprar", "completada": false},
    {"titulo": "Leer un libro", "completada": true}
]`;

const tareas = JSON.parse(tareasJSON);
const lista = document.createElement("ul");
//AQUI SE CREARAN LOS LI
tareas.forEach(tarea => {
    const item = document.createElement("li");
    item.textContent = tarea.titulo;
    //SE LE DA UN COLOR
    if (tarea.completada) {
        item.style.color = "green";
    } else {
        item.style.color = "red";
    }
    lista.appendChild(item);
});

document.body.appendChild(lista);