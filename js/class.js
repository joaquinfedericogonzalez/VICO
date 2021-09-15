class Productos { 
    constructor({id,precio, titulo, image, detalle}) {
    this.precio = precio;
    this.titulo = titulo;
    this.image = image;
    this.detalle = detalle;
    this.id = id;
    }
    card(){
    return `<div class="col-xl-4">
              <div>
                  <div class="card border-0">
                      <img src="img/${this.image}" class="img-fluid" alt="Sweaters gato!">
                      <div class="card-body">
                          <h3 class="card-title">${this.titulo}</h3>
                          <p class="card-text">${this.detalle}</p>
                          <h5 class="card-text">$ ${this.precio}</h5>
                          <a href="#" name=${this.id} onclick="acciones(event,'agregarAlCarrito')" class="btn btn-lg">Agregar al carrito</a>
                      </div>
                  </div>
              </div>
            </div>`
    }
}

class Tienda{
constructor(){
this.cart = []
}
actualizarBadge(){
$("#contadorCarrito").html(this.cart.length)
}
agregarAlCarrito(idProducto){
this.cart.push(listadoProductos.find(item => item.id == idProducto))
console.log (this.cart)
this.actualizarBadge()
}
vaciarCarrito(){
console.log("etc")
this.cart = []
this.pintarModalCarrito()
this.actualizarBadge()
}
pintarModalCarrito(){
$("#contenidoModal").html(
`<div class="two columns u-pull-right tarjetaDelCarrito" id="tarjetaDelCarrito">
        <div id="carrito">
                <table id="lista-carrito" class="u-full-width">
                    <thead>
                        <tr>
                            <th class="izquierdaDeLaTabla">Imagen</th>
                            <th class="medioDeLaTabla">Nombre</th>
                            <th class="derechaDeLaTabla">Precio</th>
                        </tr>
                    </thead>
                    <tbody id="cuerpoDelCarrito">
                        
                      ${this.cart.map(item =>`<tr>
                      <td><img src="img/${item.image}" class="vino img-fluid" alt="Producto"></td>

                      <td>${item.titulo}</td>
                      <td>${item.precio}</td>
                      </tr>`).join("")}
                    </tbody>
                        <tr>
                            <td></td>
                            <td class="totalDeLaTabla"><b>Total</b></td>
                            <td id="totalSuma" class="derechaDeLaTabla"></td>
                            <td><a href="#" onclick="acciones(event,'vaciarCarrito')" class="button u-full-width">Vaciar Carrito</a></td>
                        </tr>
                </table>
                

            </div>
        </div>
`)
}
}