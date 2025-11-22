const productos = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 }
];

const boton = document.getElementById("generarTabla");
const contenedor = document.getElementById("contenedorTabla");

boton.addEventListener("click", ()=> {
    //SE CREA LA TABLA
    const tabla = document.createElement("table");
    tabla.style.border = "1px solid black";
    const encabezado = document.createElement("tr");
    //SE CREA LOS ENCABEZADOS
    const thNombre = document.createElement("th");
    thNombre.textContent = "Producto";
    thNombre.style.border = "1px solid black";
    const thPrecio = document.createElement("th");
    thPrecio.textContent = "Precio";
    thPrecio.style.border = "1px solid black";
    //SE UNE TODO
    encabezado.appendChild(thNombre);
    encabezado.appendChild(thPrecio);
    tabla.appendChild(encabezado);
    //SE CREA UNA CASILLA POR CADA ITEM
    for (let producto of productos) {
        const fila = document.createElement("tr");
        
        const tdNombre = document.createElement("td");
        tdNombre.textContent = producto.nombre;
        tdNombre.style.border = "1px solid black";
        
        const tdPrecio = document.createElement("td");
        tdPrecio.textContent = "S/"+producto.precio;
        tdPrecio.style.border = "1px solid black";
        
        fila.appendChild(tdNombre);
        fila.appendChild(tdPrecio);
        tabla.appendChild(fila);
    }
    
    contenedor.appendChild(tabla);
});