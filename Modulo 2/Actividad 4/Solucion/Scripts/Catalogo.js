class Catalogo{
    constructor(url){
        this.URLcatalogo = url
    }

    async init(){
      this.productos =await this.getInfoFormApi()
      return this.productos
    }

    getInfoFormApi() {
      return fetch(this.URLcatalogo).then((res) => {
          return res.json();
      }).then((prods)=>{
        return prods
      });
  }

    getProducto(sku){
        return this.productos["products"].find((prod)=>{
            return prod.SKU ===sku
        })
    }
}