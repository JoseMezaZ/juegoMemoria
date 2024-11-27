//variables

let nombreJugador = d.querySelector(".jugador")
let listaJugadores = "jugadores";

//para tomar los datos
function obtenerDatos(){
    //crear objeto

    let datosJugador = {
        "nombre" : nombreJugador.textContent,
        "intentos": totalTiempo,
        "tiempototal" : totalTiempo,
        "tiemposobrante" : tiempoSobrante
    }

    guardarDatos(datosJugador)

}
//guardar en LS

function guardarDatos(datosJugador){
    //array para todos los datos antiguos y nuevos
    let jugadores = [];
    //tomar datos LS
    let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores))
    if (datosPrevios != null) {
        jugadores = datosPrevios;
    }

    jugadores.push(datos);
    localStorage.setItem(listaJugadores, JSON.stringify(jugadores))
}

function mostrarDatosJug (){
    
        //array para todos los datos antiguos y nuevos
        let jugadores = [];
        //tomar datos LS
        let datosPrevios = JSON.parse(localStorage.getItem(listaJugadores))
        if (datosPrevios != null) {
            jugadores = datosPrevios;
        }

        //mostrar datos en la tabla
        jugadores.forEach((jugadores,i) => {
            //crear fila
            let fila = d.createElement("tr");
            fila.innerHTML = `
                <td> ${i+1} </td>
                <td> ${jugadores.nombre} </td>
                <td> ${jugadores.tiempototal} </td>
                <td> ${jugadores.intentos} </td>
                <td> ${jugadores.tiemposobrante} </td>
            
            `
        });
}