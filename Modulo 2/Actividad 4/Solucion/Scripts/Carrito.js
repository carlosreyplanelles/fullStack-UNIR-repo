class Carrito {
  constructor(productos=[], total = 0, currency = "€") {
    const productos = productos;
    this.total = total;
    this.currency = currency;
    this.prodUnidades = [];
  }

  actualizarUnidades(sku, unidades) {
    const prod = this.obtenerInformacionProducto(sku);
    prodUnidades[sku] = unidades;
    this.actualizarPrecio();
  }

  existeProducto(prod) {
    return !typeof prod === "undefined";
  }

  obtenerInformacionProducto(sku) {
    let res = this.prodUnidades[sku];
    return res;
  }

  obtenerCarrito() {
    const carrito = {};
    carrito["total"] = this.total;
    carrito["currency"] = this.currency;
    carrito["productos"] = this.productos;

    return carrito;
  }

  calcularTotal() {
    return this.productos.reduce((acc, p) => {
      return (acc += p.price * p.quantity);
    });
  }

  actualizarCarrito(prod) {
    this.total = this.calcularTotal();
  }
}
