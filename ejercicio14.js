const productos = [
    { nombre: "Laptop",precio: 3000},
    { nombre: "Mouse", precio: 100},
    { nombre: "Teclado", precio: 100}
];

const productosConvertidos = JSON.parse(JSON.stringify(productos));

const ul = document.createElement("ul");
productosConvertidos.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.nombre;
    ul.appendChild(li);
});
document.body.appendChild(ul);