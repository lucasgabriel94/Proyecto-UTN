// VIDEO

let btnPlay = document.querySelector('#play');
let btnPause = document.querySelector('#pause');
let btnMute = document.getElementById('mute');
let video = document.querySelector('#video');
let timeVideo = document.querySelector('#timeVideo');
let realTime = document.querySelector('#tiempoReal');
let muestraDurAcutual;


// PAUSE
const clickPause=()=>{
video.pause();
}

// MUTE
const muted=()=>{
    video.muted = !video.muted;
    btnMute.textContent = video.muted ? "Muted" : "Mute";
}


const mostrarDur=()=>{
let dur = transformarTiempo(video.duration);   
duracion.textContent = dur;

}

const transformarTiempo=(tiempo)=>{

    if(tiempo < 60){
        return `00:${tiempo.tofixed(0)}`
    }
    else{
       
        let minutos = Math.floor(tiempo / 60);
        let segundos = Math.floor(tiempo % 60);
        return `${minutos}:${segundos}`;

    }
}

// PLAY
const clickPlay=()=>{
    video.play();
    muestraDurAcutual = setInterval(()=>{
        realTime.textContent = `Tiempo actual: ${transformarTiempo(video.currentTime)}`;
    },1000);
   
};


// JUEGO
let imagen= document.querySelectorAll("#img1");
let juego = document.querySelectorAll("#imgJuego")
let primera = document.querySelector(".primera");
let segunda = document.querySelector(".segunda");

console.log(segunda);


console.log(juego);
console.log(parrafo);
 


inicio=(e)=>{
    
    let contenido = (e.target.id);
    console.log(e.target);
    e.dataTransfer.setData("Text",contenido);
   
    console.log("se inicio el arrastre");
}

soltar=(e)=>{
    e.preventDefault();
    
}

dropear=(e)=>{
    let id = e.dataTransfer.getData("Text");
    let elemento = document.querySelector("#"+ id)
    primera.innerHTML = elemento.outerHTML;

    elemento.style.display= "none";


    console.log("se termino")
   
}





