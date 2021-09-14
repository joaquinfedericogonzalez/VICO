

  let productos = []


  function cargaProductos(){



    class Productos { 
        constructor(codigo, precio, titulo, antiguedad, image, detalle) {
        this.precio = precio;
        this.titulo = titulo;
        this.image = image;
        this.detalle = detalle;
        }
    }
        let precio = $("precio").val()
        let titulo = $("producto").val()
        let image = $("image").val()
        let detalle = $("detalle").val()

        let producto = new Productos(precio, titulo, image, detalle);
        productos.push(producto)
    
    
    }

  productos = [{
    precio:1200,
    titulo: "Cune Crianza",
    image: "cune.jpg",
    detalle: "Vino tinto proviniente de La Rioja - Argentina, cosecha 2017."
  },
  {
    precio:3200,
    titulo: "Concha y Toro",
    image: "cabernet.jpg",
    detalle: "Es un Cabernet Sauvignon con origen chileno, cosecha 1972."
  },
  {
    precio:2700,
    titulo: "Vizcarra Ribera Duero",
    image: "vizcara.jpg",
    detalle: "Vino Malbec oriundo de Burgos - España, cosecha 1995."
  },
  {
    precio:1700,
    titulo: "Anton Elance",
    image: "blanco.jpg",
    detalle: "Vino Blanco importado desde Paris, cosecha 2019."
  },
  {
    precio:1800,
    titulo: "Navarro Correa",
    image: "navarro correa.jpg",
    detalle: "Vino tinto proviniente de Mendoza - Argentina, cosecha 2016."
  },
  {
    precio:1500,
    titulo: "Tagonius Blanc",
    image: "tagonius.jpg",
    detalle: "Vino Blanco de Madrid - España, cosecha 2020."
  },
]
for(const vino of productos){

  let card = `<div class="col-xl-4">
  <div>
      <div class="card border-0">
          <img src="img/${vino.image}" class="img-fluid" alt="Sweaters gato!">
          <div class="card-body">
              <h3 class="card-title">${vino.titulo}</h3>
              <p class="card-text">${vino.detalle}</p>
              <h5 class="card-text">$ ${vino.precio}</h5>
              <a href="#" class="btn btn-lg">Agregar al carrito</a>
          </div>
      </div>
  </div>
</div>`
console.log (card)
document.querySelector("#contenedorCard").innerHTML += card


}


function leerMesas(){ 
  const consulta= new XMLHttpRequest() 
  consulta.open('GET','mesas.json', true)
  consulta.send()
  consulta.onreadystatechange= function(){
    if(consulta.readyState==4 && consulta.status==200){
      console.log("Consulta correcta")
      console.log(consulta.responseText)
      let mesas= JSON.parse(consulta.responseText)
      for(let mesa of mesas){
        console.log(mesa.mesa)
        console.log(mesa.capacidad)
        let check = `
        <option id=${mesa.mesa} value=${mesa.mesa}>${mesa.mesa}</option>
        `
        let check2 = `
        <option id=${mesa.mozo} value=${mesa.mozo}>${mesa.mozo}</option>
        `
        document.getElementById("mesa").innerHTML += check
        document.getElementById("mozo").innerHTML += check2
      }
    }
  }
}
leerMesas()







localStorage.clear();

elementosCarrito = [];

function clickearBotonYGuardarEnLocalStorage(id, imagen, nombre, precio) {
    let contador = elementosCarrito.length + 1;
    $("#contadorCarrito").html(contador);
    elementosCarrito.push({id, imagen, nombre, precio});
    $("#cuerpoDelCarrito").append(`
                                        <tr class="filaDelCarrito">
                                            <td class="izquierdaDeLaTabla">
                                                <img src="assets/img/${imagen}" class= "imagenDelCarrito">
                                            </td>
                                            <td class="medioDeLaTabla">
                                                ${nombre}
                                            </td>
                                            <td class="derechaDeLaTabla">
                                                ${precio}
                                            </td>
                                            <td>
                                                <a id="${elementosCarrito.indexOf(id)}" href="#" onclick="eliminarItem(this)" >Eliminar</a>
                                            </td>
                                        </tr>
                                        <hr class="rayaSeparadora">
                                  `);

/* En esta parte me quedan dudas de por qué el <hr> del final no se dibuja... Lo tenia incluso al principio pero lo tuve
que retirar porque sino no se dibujaba la fila de la tabla(lo puse abajo y no se dibuja)
-Otra duda en esta parte es que cuando le pongo class="filaDelCarrito" al primer <tr> y le doy estilo de de padding-top
, padding-bottom o border-top o border-bottom no se aplican esos estilos...*/

    //funcionSuma();
    localStorage.setItem("elementosCarrito", JSON.stringify(elementosCarrito));
}



$("#vaciarCarrito").on("click", function vaciarCarrito(){
    console.log("click");
    localStorage.removeItem("elementosCarrito");
    $("#cuerpoDelCarrito").html("") ;
    let contador = 0;
    $("#contadorCarrito").html(contador);
});





