const productoscard = JSON.parse(localStorage.getItem("productos"))

const containerCard = document.getElementById('card-container')

pintarCards(productoscard)

function pintarCards(productos) {
    containerCard.innerHTML = ""

    productos.forEach(juego => {
        containerCard.innerHTML += `
            <article class="card-article">
                <div class="card-header">
                    <figure>
                        <img src="${juego.imagen}" alt="${juego.titulo}">
                    </figure>
                    <div class="card-img-date">${juego.fechaDeCreacion}</div>
                </div>
                <div class="card-main">
                    <h2>${juego.titulo}</h2>
                    <div class="card-description">
                        <p>${juego.descripcion}</p>
                    </div>
                    <div class="card-info-prices">
                        <div class="card-price">$${juego.precio}</div>
                    </div>
                </div>
                <div class="card-footer">
                    <button class="card-details">Ver detalles</button>
                    <button class="card-buy">Comprar</button>
                </div>
            </article>`
    });
}



const selectcategoria = document.getElementById("categoriaJuegos")

selectcategoria.addEventListener("change", option => {
    const categoria = option.target.value
    if(categoria === "todo") {
        pintarCards(productoscard)
        return
    }
        const filtroCategoria = productoscard.filter((juego) => {
            
            if(juego.categoria === categoria) {
                return true
            }
        })

        pintarCards(filtroCategoria)
})