export class Producto {
    constructor(nombre, precio, categoria) {
        this.id = Math.floor(Math.random() * 10000)
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }

}