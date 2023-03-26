
const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')

const precioTotal = document.getElementById('precioTotal')

const cantidadTotal = document.getElementById('cantidadTotal')

const comprarCarrito = document.getElementById('comprar-carrito')

var carrito = []



document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `

    contenedorProductos.appendChild(div)
    const boton = document.getElementById(`agregar${producto.id}`)
    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id),
        Toast.fire({
        icon: 'success',
        title: `Agregaste ${producto.nombre}`
})
  
    })

})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId) 
    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
    actualizarCarrito() 
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    contadorCarrito.innerText = carrito.length 
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)

}

comprarCarrito.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
    
    carrito = []
    localStorage.setItem('carrito', JSON.stringify(carrito))
    

    Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Gracias por tu compra!',
  showConfirmButton: false,
  timer: 1000
})
})

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

// function get_random_dog_image() {

//   let primario = Math.floor(Math.random()*10)
//   let secundario = 0

//   url = "https://best-manga-anime-wallpapers.p.rapidapi.com/";

//   const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1e5ae9bd51msh436f2fa6e1d2eb4p1ee695jsn2b23bdf6c1bb',
// 		'X-RapidAPI-Host': 'best-manga-anime-wallpapers.p.rapidapi.com'
// 	}
// };

// fetch('https://best-manga-anime-wallpapers.p.rapidapi.com/', options)
// 	.then(response => response.json())
// 	.then(response => {
//         display_image(response[0].manga_anime[primario].thumbnail)
//   })
// 	.catch(err => console.error(err));
// }

// function display_image(image_url){
//   document.getElementById("image").src = image_url;
// }

// get_random_dog_image()














