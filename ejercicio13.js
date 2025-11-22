const jsonString = '{"nombre":"María","edad":28,"ciudad":"Barcelona"}';

const persona = JSON.parse(jsonString);

const parrafo = document.createElement("p");
parrafo.textContent = persona.nombre;
document.body.appendChild(parrafo);