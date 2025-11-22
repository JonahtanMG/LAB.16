const librosJSON = `[
    {"titulo": "Libro 01", "autor": "Autor 01"},
    {"titulo": "Libro 02", "autor": "Autor 02"},
    {"titulo": "Libro 03", "autor": "Autor 03"},
    {"titulo": "Libro 04", "autor": "Autor 04"}
]`;

const libros = JSON.parse(librosJSON);
//SE CREA LA TABLA
const tabla = document.createElement("table");
tabla.style.border = "1px solid black";

const encabezado = document.createElement("tr");
//SE CREA LA PARTE TITULO 
const thTitulo = document.createElement("th");
thTitulo.textContent = "Título";
thTitulo.style.border = "1px solid black";
//SE CREA LA PARTE AUTOR
const thAutor = document.createElement("th");
thAutor.textContent = "Autor";
thAutor.style.border = "1px solid black";

encabezado.appendChild(thTitulo);
encabezado.appendChild(thAutor);
tabla.appendChild(encabezado);
//SE CREA EL CONTENIDO DE LA TABLA
libros.forEach(libro => {
    const fila = document.createElement("tr");
    
    const tdTitulo = document.createElement("td");
    tdTitulo.textContent = libro.titulo;
    tdTitulo.style.border = "1px solid black";
    
    const tdAutor = document.createElement("td");
    tdAutor.textContent = libro.autor;
    tdAutor.style.border = "1px solid black";

    fila.appendChild(tdTitulo);
    fila.appendChild(tdAutor);
    tabla.appendChild(fila);
});
document.body.appendChild(tabla);