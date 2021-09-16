
/* ESTO ES LO QUE GENERA LA TIENDA */ 

const vico = new Tienda(productos)

vico.productos.forEach(vino=>{
  document.querySelector("#contenedorCard").innerHTML += vino.card()
})

function acciones(event, accion){
  event.preventDefault()
  console.log(event, accion)
  vico[accion](event.target.name)
}


/* FUNCION PARA EL RESERVADO DE MESAS Y MOZOS */
function leerMesas(){ 
  const consulta= new XMLHttpRequest() 
  consulta.open('GET','mesas.json', true)
  consulta.send()
  consulta.onreadystatechange= function(){
    if(consulta.readyState==4 && consulta.status==200){
     //console.log("Consulta correcta")
      //console.log(consulta.responseText)
      let mesas= JSON.parse(consulta.responseText)
      for(let mesa of mesas){
        //console.log(mesa.mesa)
        //console.log(mesa.capacidad)
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












// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  });













