export class GestionProductos {

    constructor() {
        this.productos = [
            {
                id: 1,
                nombre: 'TV Sony 32"',
                precio: 1000,
                categoria: 'Electronica'
            },
            {
                id: 2,
                nombre: 'Remera',
                precio: 2000,
                categoria: 'Ropa'
            },
            {
                id: 3,
                nombre: 'Escritorio',
                precio: 3000,
                categoria: 'Muebles'
            }
        ]
    }

    agregarProducto(producto) {
        this.productos.push(producto)
        console.log('Producto agregado');  
    }

    listarProductos() {
        const fragment = document.createDocumentFragment()
        const tbody = document.querySelector('tbody')
        tbody.innerHTML = ''
        for (let prod of this.productos) {
            const tr = this.agregarFilaProducto(prod)
            fragment.appendChild(tr)
        }
        tbody.appendChild(fragment)        
    }

    agregarFilaProducto(producto) {
        const tr = document.createElement('tr')
        tr.innerHTML = `
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.categoria}</td>
                    <td><button class="editar" id="${producto.id}">Editar</button></td>
                    <td><button class="eliminar" id="${producto.id}">Eliminar</button></td>
                    `
        return tr
    }

    eliminarProducto(id) {
       this.productos = this.productos.filter(prod => prod.id != id)
       this.listarProductos()
    }

    buscarProducto(id){
        const producto = this.productos.find(prod=>prod.id==id)
        return producto
    }

    editarProducto(id, producto){
        let prod = this.productos.find(prod=>prod.id==id)
        prod = producto
        this.productos = this.productos.map(prod => prod.id == id ? producto : prod)
        this.listarProductos()
    }
}