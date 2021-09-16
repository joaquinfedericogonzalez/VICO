
/* ESTO ES LO QUE GENERA LAS CARDS Y LAS MUESTRA */
class Productos { 
    constructor({id,precio, titulo, image, detalle}) {
        this.precio = precio;
        this.titulo = titulo;
        this.image = image;
        this.detalle = detalle;
        this.id = id;
    }
    card(){
        return `
            <div data-aos="zoom-out" data-aos-duration="2000" class="col-xl-4">
                <div>
                    <div class="card">
                        <img src="img/${this.image}" class="img-fluid" alt="Sweaters gato!">
                        <div class="card-body">
                            <h3 class="card-title">${this.titulo}</h3>
                            <p class="card-text">${this.detalle}</p>
                            <h5 class="card-text">$ ${this.precio}</h5>
                            <a href="#" name=${this.id} onclick="acciones(event,'agregarAlCarrito')" class="btn btn-lg">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

/* ACA SE ESTA HACIENDO EL CARRITO DE COMPRAS CON MODAL */

class Tienda{
    constructor(listadoProductos = []){
        this.cart = local.get("carrito")|| []
        this.productos = []
        this.cargarProductos(listadoProductos)
        this.render()
    }

    cargarProductos(listado){
        listado.forEach(producto=>this.productos.push(new Productos(producto)))
    }
    render(){
        this.actualizarBadge()
        this.pintarModalCarrito()
    }
    actualizarBadge(){
        $("#contadorCarrito").html(this.cart.length)
    }
    agregarAlCarrito(idProducto){
        this.cart.push(this.productos.find(item => item.id == idProducto))
        console.log (this.cart)
        this.render()
        local.save("carrito", this.cart)
    }
    total(){
        return this.cart.reduce((a,b)=> a + parseInt(b.precio),0)
    }
    vaciarCarrito(){
        console.log("etc")
        this.cart = []
        this.render()
        local.save("carrito", this.cart)
    }
    pintarModalReserva(){
        $("#tituloModal").html("Reserva")
        $("#contenidoModal").html("<div><h3>¡Reserva confirmada, te esperamos!</h3></div>")
        $("#footerModal").html(`<button type="button" class="btn" data-dismiss="modal">Cerrar</button>`)
    }
    pintarModalCarrito(){
        $("#tituloModal").html("Pedido")
        $("#footerModal").html(`<button type="button" class="btn" data-dismiss="modal">Cerrar</button>
        <button type="button" class="btn">Comprar</button>`)
        this.cart.length == 0?
        $("#contenidoModal").html("<div><h3>El carrito esta vacio</h3></div>")
        :
        $("#contenidoModal").html(
            `<div class="two columns u-pull-right tarjetaDelCarrito" id="tarjetaDelCarrito">
                <div id="carrito">
                        <table id="lista-carrito" class="u-full-width">
                            <thead>
                                <tr>
                                    <th class="izquierdaDeLaTabla">Producto</th>
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
                                    <td class="totalDeLaTabla"><b>Total</b></td>
                                    <td id="totalSuma" class="derechaDeLaTabla">${this.total()}</td>
                                    <td><a href="#" onclick="acciones(event,'vaciarCarrito')" class="button u-full-width">Vaciar Carrito</a></td>
                                </tr>
                        </table>
                    </div>
                </div>
        `)
    }
}