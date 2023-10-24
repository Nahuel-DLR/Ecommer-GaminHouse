let juegos = JSON.parse(localStorage.getItem("productos"))


let idEditar;
const btn = document.querySelector('.btn-agregarJuego')
const tableBodyHtml = document.querySelector("#table-body")

pintarProductos(juegos)

const inputFiltrarHtml = document.getElementById("filtrar")
const formularioProductoHtml = document.getElementById("formularioProducto")

formularioProductoHtml.addEventListener('submit', (eventoEjecutado) => {

    eventoEjecutado.preventDefault()

    const el = formularioProductoHtml.elements

    let id;

    if(idEditar) {
        id = idEditar
    } else {
        id = crypto.randomUUID()
    }


    const nuevoProducto = {
        id: id,
        titulo: el.titulo.value,
        precio: el.precio.valueAsNumber, 
        categoria: el.categoria.value,
        imagen: el.imagen.value,
        descripcion: el.descripcion.value,
        fechaDeCreacion: obtenerFecha()
    }


    if (idEditar) {
        const index = juegos.findIndex(juego => {
            return juego.id === idEditar
        })
        
        juegos[index] = nuevoProducto;
        idEditar = undefined;
        // Vuelvo el boton a su estado normal
        btn.innerText = "Agregar producto"
        btn.classList.remove("btn-success")
    } else {
        juegos.push(nuevoProducto)
    }
    
    Swal.fire({
        icon: 'success',
        title: 'Producto agregado/modificado correctamente',
        text: 'El producto se actualizo o modifico correctamente'
    })
    
    pintarProductos(juegos)

    localStorage.setItem("productos", JSON.stringify(juegos))

    formularioProductoHtml.reset()
    el.titulo.focus()
})

//TODO ================= PINTAR LOS PRODUCTOS ===============
function pintarProductos(arrayAPintar) {
    tableBodyHtml.innerHTML = "";
    arrayAPintar.forEach(function(juego) {
        
        tableBodyHtml.innerHTML += `
            <tr class="tbody-fila">
                <td class="table-image"><img class="image" src="${juego.imagen}" alt="${juego.titulo}"></td>
                <td class="table-title">${juego.titulo}</td>
                <td class="table-description"><div class="descripcion">${juego.descripcion}</div></td>
                <td class="table-category">${juego.categoria}</td>
                <td class="table-price">$${juego.precio}</td>
                <td class="acciones">
                    <div class="div-btn-acciones">
                        <button class="btn-delete btn btn-danger btn-sm" onclick="borrarProducto('${juego.id}')">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <button class="btn btn-success btn-sm" onclick="editarProducto('${juego.id}')">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                    </div>
                </td>
            </tr>`    
    })
}


//TODO =============== FILTRAR PRODUCTOS ==================
inputFiltrarHtml.addEventListener('keyup', (evt) => {
    const busqueda = evt.target.value.toLowerCase();

    const resultado = juegos.filter(function(producto) {
        const titulo = producto.titulo.toLowerCase()
        if (titulo.includes(busqueda)) {
            return true
        }
        return false
    })

    pintarProductos(resultado)
})

//TODO ===================== BORRAR PRODUCTO ================ 
function borrarProducto(idABuscar) {
    //! Libreria "SweetAlert"
    Swal.fire({
        title: 'Desea borrar producto',
        icon: 'error',
        text:`Realmente desea eliminar producto?`,
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText:'Borrar',
        cancelButtonText:'Cancelar'
    }).then(result => {
        if(result.isConfirmed) {
            
            const indiceEncontrado = juegos.findIndex((productoFindIndex) => {
                if(productoFindIndex.id === idABuscar) {
                    return true
                }
                return false
            })
            
            juegos.splice(indiceEncontrado, 1)
            pintarProductos(juegos)
            
            localStorage.setItem("productos", JSON.stringify(juegos))
            Swal.fire('Borrado!','Producto borrado correctamente','success')
        }
    })
}



//TODO ==================== EDITAR PRODUCTOS ======================
const editarProducto = function(idRecibido) {

    const productoEditar = juegos.find(prod => {
        if(prod.id === idRecibido) {
            return true
        }
    })

    if(!productoEditar) return

    idEditar = productoEditar.id

    const elements = formularioProductoHtml.elements;

    elements.titulo.value = productoEditar.titulo
    elements.precio.value = productoEditar.precio
    elements.descripcion.value = productoEditar.descripcion
    elements.imagen.value = productoEditar.imagen
    elements.categoria.value = productoEditar.categoria


    btn.innerText = "Editar Producto"
    btn.classList.add("btn-update")
}



function obtenerFecha() {
    const fecha = new Date()
    let mes = fecha.getMonth() + 1
    if (mes < 10) {
        mes = '0' + mes;
    }
    let dia = fecha.getDay()
    if (dia < 10) {
        dia = '0' + dia;
    }
    const year = fecha.getFullYear()
    
    const fechaFormateada = `${year}-${mes}-${dia}`

    return fechaFormateada
}