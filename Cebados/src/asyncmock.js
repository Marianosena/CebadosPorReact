const productos = [
    { id: "1", nombre: "Termo Stanley", precio: 105000, img: "../public/img/termo stanley.png", idCat: "3", stock: 100 },
    { id: "2", nombre: "Termo Argentino", precio: 35000, img: "../public/img/termo argentino.webp", idCat: "3", stock: 100 },
    { id: "3", nombre: "Mate Calabaza", precio: 15000, img: "../public/img/mate calabaza.jpg", idCat: "2", stock: 100 },
    { id: "4", nombre: "Mate Camionero", precio: 25000, img: "../public/img/mate camionero.jpeg", idCat: "2", stock: 100 },
    { id: "5", nombre: "Mate Imperial", precio: 20000, img: "../public/img/mate imperial.jpeg", idCat: "2", stock: 100 },
    { id: "6", nombre: "Mate Scaloneta", precio: 16000, img: "../public/img/mate scaloneta.jpg", idCat: "2", stock: 100 },
    { id: "7", nombre: "Termo Contigo", precio: 80000, img: "../public/img/termo contigo.jpg", idCat: "3", stock: 100 },
    { id: "8", nombre: "Termo Uruguayo", precio: 85000, img: "../public/img/termo uruguayo.webp", idCat: "3", stock: 100 },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}