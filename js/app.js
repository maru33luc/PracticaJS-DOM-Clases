

// CATALOGO DE PRODUCTOS

// Requisitos:
// Interfaz de usuario:

// Un formulario para agregar productos con los siguientes campos:
// Nombre del producto (texto).
// Precio (número).
// Categoría (desplegable con opciones como "Electrónica", "Ropa", "Hogar").
// Un botón para agregar productos.
// Una lista que muestre todos los productos agregados.
// Un boton para editar productos de la lista.
// Un botón para eliminar productos de la lista.
// Funcionalidades:

// Agregar producto: Completar el formulario para agregar un producto a la lista.
// Eliminar producto: Cada producto en la lista debe tener un botón para eliminarlo.
// Editar producto: Cada producto en la lista tendrá un botón "Editar". Al hacer clic, los datos del producto se cargarán en el formulario para ser modificados. Luego de editar, el usuario podrá guardar los cambios.

import { GestionProductos } from "../js/gestionProductos.class.js";
import { Producto } from "../js/producto.class.js";  

const form = document.querySelector('form')
const nombre = document.querySelector('#nombre')
const precio = document.querySelector('#precio')
const categoria = document.querySelector('#categoria')


const gestionProd = new GestionProductos()
const tbody = document.querySelector('tbody')
const submitButton = document.querySelector('button[type="submit"]')

submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    if(submitButton.textContent == 'Editar'){
        const producto = new Producto(nombre.value, precio.value, categoria.value)
        gestionProd.editarProducto(submitButton.id, producto)
        submitButton.textContent = 'Agregar'
        submitButton.id = ''
        form.reset()
        gestionProd.listarProductos()
    }
    else{
        const producto = new Producto(nombre.value, precio.value, categoria.value)
        gestionProd.agregarProducto(producto)
        form.reset()
        gestionProd.listarProductos()
    }
})

document.addEventListener('DOMContentLoaded', ()=>{
    gestionProd.listarProductos()
})

tbody.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
        const id = e.target.id;
        gestionProd.eliminarProducto(id);
        gestionProd.listarProductos(); 
    }
    else if(e.target.classList.contains('editar')){
        const id = e.target.id;
        const producto = gestionProd.productos.find(prod => prod.id == id)
        nombre.value = producto.nombre
        precio.value = producto.precio
        categoria.value = producto.categoria
        submitButton.textContent = 'Guardar'
        submitButton.id = id   
    }
});




