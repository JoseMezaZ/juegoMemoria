const d = document;
let imgN1 = [
    {nombre: "madrid", url: "imagenes/atlMadrid.png"},
    {nombre: "boca", url: "imagenes/boca.png"},
    {nombre: "sevilla", url: "imagenes/sevilla.gif"},
    {nombre: "almeria", url: "imagenes/almeria.png"},
    {nombre: "brujas", url: "imagenes/brujas.png"},
    {nombre: "psg", url: "imagenes/psg.png"},    
    {nombre: "madrid", url: "imagenes/atlMadrid.png"},
    {nombre: "boca", url: "imagenes/boca.png"},
    {nombre: "sevilla", url: "imagenes/sevilla.gif"},
    {nombre: "almeria", url: "imagenes/almeria.png"},
    {nombre: "brujas", url: "imagenes/brujas.png"},
    {nombre: "psg", url: "imagenes/psg.png"}
];
let imgN2 = [
    {nombre: "madrid", url: "imagenes/atlMadrid.png"},
    {nombre: "boca", url: "imagenes/boca.png"},
    {nombre: "sevilla", url: "imagenes/sevilla.gif"},
    {nombre: "almeria", url: "imagenes/almeria.png"},
    {nombre: "brujas", url: "imagenes/brujas.png"},
    {nombre: "psg", url: "imagenes/psg.png"},
    {nombre: "milan", url: "imagenes/milan.png"},
    {nombre: "liverpool", url: "imagenes/liverpool.png"},
    {nombre: "barcelona", url: "imagenes/barcelona.png"},
    {nombre: "madrid", url: "imagenes/atlMadrid.png"},
    {nombre: "boca", url: "imagenes/boca.png"},
    {nombre: "sevilla", url: "imagenes/sevilla.gif"},
    {nombre: "almeria", url: "imagenes/almeria.png"},
    {nombre: "brujas", url: "imagenes/brujas.png"},
    {nombre: "psg", url: "imagenes/psg.png"},
    {nombre: "milan", url: "imagenes/milan.png"},
    {nombre: "liverpool", url: "imagenes/liverpool.png"},
    {nombre: "barcelona", url: "imagenes/barcelona.png"}
];
let imgN3 = [
    {nombre: "madrid", url: "imagenes/atlMadrid.png"},
    {nombre: "boca", url: "imagenes/boca.png"},
    {nombre: "sevilla", url: "imagenes/sevilla.gif"},
    {nombre: "almeria", url: "imagenes/almeria.png"},
    {nombre: "brujas", url: "imagenes/brujas.png"},
    {nombre: "psg", url: "imagenes/psg.png"},
    {nombre: "milan", url: "imagenes/milan.png"},
    {nombre: "liverpool", url: "imagenes/liverpool.png"},
    {nombre: "barcelona", url: "imagenes/barcelona.png"},
    {nombre: "real", url: "imagenes/realMadrid.jpg"},
    {nombre: "nacional", url: "imagenes/nal.jpg"},
    {nombre: "medellin", url: "imagenes/dim.jpg"},
    {nombre: "madrid", url: "imagenes/atlMadrid.png"},
    {nombre: "boca", url: "imagenes/boca.png"},
    {nombre: "sevilla", url: "imagenes/sevilla.gif"},
    {nombre: "almeria", url: "imagenes/almeria.png"},
    {nombre: "brujas", url: "imagenes/brujas.png"},
    {nombre: "psg", url: "imagenes/psg.png"},
    {nombre: "milan", url: "imagenes/milan.png"},
    {nombre: "liverpool", url: "imagenes/liverpool.png"},
    {nombre: "barcelona", url: "imagenes/barcelona.png"},
    {nombre: "real", url: "imagenes/realMadrid.jpg"},
    {nombre: "nacional", url: "imagenes/nal.jpg"},
    {nombre: "medellin", url: "imagenes/dim.jpg"}
];
let nombreImg = [] //guardar nombres
let posImg = [] // guardar posiciones
let tablero = d.querySelector(".tablero")//tablero de juego
let aciertos = 0;
let totalIntentos = 0;
let totalTiempo = 0;
let tiempoSobrante = 0;
let intentos = 0;
let tiempo = 60;
let mostrarIntentos = d.querySelector(".intentos")
let mostrarAciertos = d.querySelector(".aciertos")
let mostrarTiempo = d.querySelector(".tiempo")
let activarBtnInicio = d.querySelector(".btn-iniciar")
let tiempoTranscurrido;
let mostrarNivel = d.querySelector(".nivel")
let nivel = 1;
let imagenNivel;
let estoyJugado = false;
let mostrarJugador = d.querySelector(".jugador")
let sonidoAcierto = new Audio ("./sonidos/acierto.mp3")
let sonidoFallo = new Audio ("./sonidos/fallo.mp3")
let sonidoSeleccion = new Audio ("./sonidos/seleccionar.mp3")
let sonidoCambioNivel = new Audio ("./sonidos/cambioNivel.mp3")
let sonidoPierde = new Audio ("./sonidos/pierde.mp3")
let tabla = d.querySelector(".records tbody")


// setTimeout(); //ejecuta una vez cuando pasa determinado tiempo
// setInterval() //esta funcion se ejecuta en determinado tiempo infinitamente
d.addEventListener("DOMContentLoaded", ()=>{
    mostrarDatosJug ();
}
)


//agregar evento al boton iniciar el juego

activarBtnInicio.addEventListener("click", function(){

    //comprobar si el juego esta activo
    if(estoyJugado == false && nivel == 1){
        ventanaModal();

    }else if(estoyJugado == false && nivel == 2){
        estoyJugado = true;
        nivelDos();
    }else if(estoyJugado == false && nivel == 3){
        estoyJugado = true;
        nivelTres();
    }
})

//funcion para agregar imagenes al tablero
function agregarImagenes(){

    if(nivel == 1){
        imagenNivel = imgN1;
        imagenNivel.sort(()=>Math.random() -0.5);
    } else if (nivel == 2){
        imagenNivel = imgN2;
        imagenNivel.sort(()=>Math.random() -0.5);
    } else if (nivel == 3){
        imagenNivel = imgN3;
        imagenNivel.sort(()=>Math.random() -0.5);
    } 


    imagenNivel.forEach((img, i)=>{
        let div = d.createElement("div"); //crear etiquetas div
        div.className = "col-3" //agregar al div la clase col-3
        let imagen = d.createElement("img")// crear la etiqueta de imagen
        imagen.className = "img-fluid altura" // agregar clase para adaptar la imagen
        imagen.src = "imagenes/portada.jpg"; //agregar ubicacion de la imagen
        imagen.id = i; //agregar id a las imagenes
        imagen.addEventListener("click", mostrarImagenes, compararImagen) //agregar evento a la imagenes 
        div.appendChild(imagen) //agregar la imagen al div
        tablero.appendChild(div) //agregar div al tablero
    })
}

//funcion para mostrar las imagenes 
function mostrarImagenes(){
    
    // obtener el id de la imagen del tablero
    let imagenID = this.getAttribute("id")
    //mostrar imagen
    this.src = imagenNivel[imagenID].url;
    nombreImg.push(imagenNivel[imagenID].nombre); //guardar nombre
    posImg.push(imagenID); //guardar posicion

    //validar si se muestran 2 imagenes
    if (nombreImg.length == 2){
        setTimeout(compararImagen, 100);
    }
}

//funcion para comparar    
function compararImagen(){
    let imagenesTablero = document.querySelectorAll(".tablero div img")
    //validar si la imagen se llama igual

    if (nombreImg[0] == nombreImg[1]){
        if(posImg[0] != posImg[1]){
            sonidoAcierto.play();
            imagenesTablero[posImg[0]].src = "imagenes/check.png"; 
            imagenesTablero[posImg[1]].src = "imagenes/check.png";
            imagenesTablero[posImg[0]].removeEventListener("click", mostrarImagenes); 
            imagenesTablero[posImg[1]].removeEventListener("click", mostrarImagenes);

            aciertos++; 
            mostrarAciertos.textContent = aciertos;

        }else{
            alert("No es correcto, escoger otra imagen");
            imagenesTablero[posImg[0]].src = "imagenes/portada.jpg";

            intentos++;
            mostrarIntentos.textContent = intentos;
        }

    } else {
        // alert("Sigue intentando. ")
        sonidoFallo.play();
        imagenesTablero[posImg[0]].src = "imagenes/portada.jpg"
        imagenesTablero[posImg[1]].src = "imagenes/portada.jpg"
        
        intentos++;
        mostrarIntentos.textContent = intentos;
    }

    //reiniciar las variables
    nombreImg = [];
    posImg = [];

    //comprobar si todas las imagenes se adivinaron
    if (nivel == 1 && aciertos == 6) {
        alert("¡Felicidades, pasaste de nivel!"); 
        // totalIntentos += tiempo;
        // totalTiempo += tiempo;
        // tiempoSobrante += (60 - tiempo);

        // obtenerDatos()
        sonidoCambioNivel.play();
        nivel ++;
        mostrarNivel.textContent = nivel; 
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 50;
        mostrarTiempo.textContent = tiempo;
        estoyJugado = false;
        quitarImagenes()
    } else if (nivel == 2 && aciertos == 9){
        alert("¡Felicidades, pasaste de nivel!"); 
        sonidoCambioNivel.play();
        nivel ++;
        mostrarNivel.textContent = nivel; 
        intentos = 0;
        mostrarIntentos.textContent = intentos;
        aciertos = 0;
        mostrarAciertos.textContent = aciertos;
        clearInterval(tiempoTranscurrido);
        tiempo = 30;
        mostrarTiempo.textContent = tiempo;
        estoyJugado = false;
        quitarImagenes()
    } else if (nivel == 3 && aciertos == 9){
        alert("¡Felicidades, ganaste el juego!"); 
        sonidoCambioNivel.play();
        location.reload();
    }

}

// FUNCION PARA REINICIAR EL JUEGO 
function reiniciarJuego() { 
    tablero.innerHTML = ""; // Limpiar el tablero 
    imagenNivel.sort(() => Math.random() - 0.5); // Reordenar las imágenes aleatoriamente 
    agregarImagenes(); // Volver a agregar las imágenes al tablero
}

function tiempoJuego(){
    tiempoTranscurrido = setInterval(()=>{
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if(tiempo == 20){
            alert("El tiempo se agota. ")
            mostrarTiempo.style.color = "red"
            mostrarTiempo.style.fontSize = "20px"
        } else if (tiempo == 0){
            alert("Tiempo agotado. Perdiste.")
            sonidoPierde
            nivel = 1;
            mostrarNivel.textContent = nivel; 
            intentos = 0;
            mostrarIntentos.textContent = intentos;
            aciertos = 0;
            mostrarAciertos.textContent = aciertos;
            estoyJugado = false;
            clearInterval(tiempoTranscurrido);
            location.reload();
        }
    }, 1000)   
}

function nivelUno(){
        //agregar las imagenes al tablero
        agregarImagenes();
        mostrarNivel.textContent = nivel; 
        tiempoJuego();
}

function nivelDos(){
    //agregar las imagenes al tablero
    agregarImagenes();
    tiempoJuego();
}

function nivelTres(){
    //agregar las imagenes al tablero
    agregarImagenes();
    tiempoJuego();
}

function quitarImagenes(){
    let imgQuitar = d.querySelectorAll(".tablero div")
    imgQuitar.forEach ((img)=>{
        img.remove();
    })
}

function ventanaModal(){
    let mostrarModal = d.querySelector("#exampleModal")
    let cerrarModal = d.querySelectorAll(".cerrar")
    let inputJugador = d.querySelector(".nombreJugador ")
    let btnJugador = d.querySelector(".registrarJugador")


    cerrarModal.forEach((btn)=>{
        btn.addEventListener("click", ()=>{
            mostrarModal.classList.remove("show")
            mostrarModal.style.display = "none"
        })
    })
    mostrarModal.classList.add("show")
    mostrarModal.style.display = "block"
    btnJugador.addEventListener("click", ()=>{
        mostrarJugador.textContent = inputJugador.value;
        //cerrar ventana modal
            mostrarModal.classList.remove("show")
            mostrarModal.style.display = "none"

            //Iniciar nivel 1
            estoyJugado = true;
            nivelUno();
    })
}

