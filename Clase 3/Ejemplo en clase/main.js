function Producto(info) {
    this.nombre = info.nombre;
    this.precio = info.precio;
    this.stock = info.stock;
    this.vender = function () {
        if (this.stock > 0) {
            this.stock = this.stock - 1
        } else {
            console.log("No hay mas turnos")
        }
    }
}
const producto1 = new Producto(
    {
        nombre: "Service 5.000 km",
        precio: "$10.000",
        stock: 5,
    }
)

const producto2 = new Producto(
    {
        nombre: "Service 10.000 km",
        precio: "$15.000",
        stock: 2,
    }
)

console.log(producto2.stock)
producto2.vender()
console.log(producto2.stock)
producto2.vender()
console.log(producto2.stock)
producto2.vender()

