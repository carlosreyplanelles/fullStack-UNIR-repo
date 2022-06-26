

document.addEventListener('DOMContentLoaded',()=>{
    const carrito = new Carrito("https://jsonblob.com/api/jsonBlob/989200875591581696");
    const prodListEl = document.querySelector('#products')

    


    function createQuantityField(element){
        let newInput = document.createElement('input')
        newInput.setAttribute("type", "number")
        newInput.id="inputQuantity"
        newInput.classList.add('inputEl')
        newInput.setAttribute("min", 0)
        const prodCarritoInfo = carrito.obtenerInformacionProducto(element.SKU)
        newInput.value = typeof prodCarritoInfo === "undefined" ? 0:prodCarritoInfo;
        newInput.addEventListener('change', () => {
            const subTotalEl = document.querySelector(`#${element.SKU} .subTotal`)
            carrito.actualizarProductoCarrito(element.SKU, Number.parseInt(newInput.value))
            subTotalEl.innerText = carrito.calcularSubtotal(element.SKU) + carrito.currency
            actualizarSumario()
        })
        return newInput
    }

    async function loadProducts(){
        let prods = await carrito.catalogo.init()
        prods['products'].forEach(element => {
            const containerTitleEl = document.createElement('div')
            containerTitleEl.classList.add('productTitle_text-position')
            let pTitle = document.createElement('p')
            pTitle.innerText = element.title
            containerTitleEl.appendChild(pTitle)

            const containerQuantityInputEl = document.createElement('div')
            containerQuantityInputEl.appendChild(createQuantityField(element))
            
            const containerPriceEl = document.createElement('div')
            let newSpanPrice = document.createElement('span')
            newSpanPrice.innerText = element.price + carrito.currency
            containerPriceEl.appendChild(newSpanPrice)

            const containerSubTotalEl = document.createElement('div')
            containerSubTotalEl.classList.add('Subtotal_text-position')
            let newSpanSubTotal = document.createElement('span')
            newSpanSubTotal.classList.add('subTotal')
            newSpanSubTotal.innerText = carrito.calcularSubtotal(element.SKU) + carrito.currency
            containerSubTotalEl.appendChild(newSpanSubTotal)

            let divProduct = buildProductRow(element, containerTitleEl, containerQuantityInputEl, containerPriceEl, containerSubTotalEl)

            prodListEl.appendChild(divProduct)
        });
    }

    function buildProductRow(element, containerTitleEl, containerQuantityInputEl, containerPriceEl, containerSubTotalEl){
        
        let divProduct = document.createElement('div')
        divProduct.setAttribute("id", element.SKU)
        divProduct.appendChild(containerTitleEl)
        divProduct.appendChild(containerQuantityInputEl)
        divProduct.append(containerPriceEl)
        divProduct.append(containerSubTotalEl)
        divProduct.classList.add('productTile')

        return divProduct;
    }
    loadProducts()

    const summaryProductsEl = document.createElement('div')
    const summaryWrapperEl = document.querySelector('#summaryWrapper')
    const summaryTotalDiv =document.createElement('div')
    summaryTotalDiv.classList.add('summaryRow-style')
    function calcularSumario(){
        SummaryProducts(summaryProductsEl)
        summaryWrapperEl.appendChild(summaryProductsEl)

        
        
        const divTitle = document.createElement('div')
        const divTotalPrice = document.createElement('div')
        divTitle.innerHTML=`<span>Total</span>`
        divTotalPrice.innerHTML = `<span>${carrito.calcularTotal()} ${carrito.currency}</span>`
        summaryTotalDiv.appendChild(divTitle)
        summaryTotalDiv.appendChild(divTotalPrice)
        summaryWrapperEl.appendChild(summaryTotalDiv)

    }

    function actualizarSumario(){
        summaryProductsEl.innerHTML=''
        SummaryProducts(summaryProductsEl)
        summaryTotalDiv.childNodes[1].innerHTML = `<span>${carrito.calcularTotal()} ${carrito.currency}</span>`
    }

    function SummaryProducts(summaryProductsEl){
        const catalogo = carrito.catalogo
        summaryProductsEl.classList.add('productSummaryList-Style')
        Object.keys(carrito.prodUnidades).forEach((key) => {
            const producto = catalogo.getProducto(key)
            if(carrito.prodUnidades[key] > 0){
                const summaryProductDiv =document.createElement('div')
                summaryProductDiv.classList.add('summaryRow-style')
                const divTitle = document.createElement('div')
                const divSubTotal = document.createElement('div')
                divTitle.innerHTML=`<span>${producto.title}</span>`
                divSubTotal.innerHTML = `<span>${carrito.calcularSubtotal(key)} ${carrito.currency}</span>`
                summaryProductDiv.appendChild(divTitle)
                summaryProductDiv.appendChild(divSubTotal)
                
                summaryProductsEl.appendChild(summaryProductDiv)
            }
        })
    }
    calcularSumario()


})