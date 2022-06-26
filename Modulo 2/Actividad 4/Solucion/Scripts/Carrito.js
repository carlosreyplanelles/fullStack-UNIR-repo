class Carrito {

  #catalogo
  #total
  #currency
  constructor(urlCatalogo, total = 0, currency = "€") {
    this.#catalogo = new Catalogo(urlCatalogo);
    this.#total = total;
    this.#currency = currency;
    this.prodUnidades = [];
  }


  /*GETTERS AND SETTERS*/
  get catalogo(){
    return this.#catalogo
  }

  get total(){
    return this.#total
  }

  set total(updatedTotal){
    this.#total = updatedTotal
  }

  get currency(){
    return this.#currency
  }
  
  actualizarProductoCarrito(sku, unidades) {
    this.prodUnidades[sku] = unidades;
  }

  obtenerInformacionProducto(sku) {
    let res = this.prodUnidades[sku];
    return res;
  }

  calcularSubtotal(sku){
    const prod = this.catalogo.getProducto(sku);
    const prodCant = this.prodUnidades[sku]
    let res = 0
    if(typeof prodCant !=='undefined'){
      res = prodCant * prod.price
    }
    return Math.round(res * 100) / 100;
  }

  calcularTotal() {
    let total = 0
    Object.keys(this.prodUnidades).forEach((key)=>{
      const prod = this.catalogo.getProducto(key);
      total += this.prodUnidades[key] * prod.price;
      })
      return Math.round(total * 100) / 100
  }

  actualizarCarrito() {
    this.total = Math.round(this.calcularTotal() * 100) / 100;
  }
}