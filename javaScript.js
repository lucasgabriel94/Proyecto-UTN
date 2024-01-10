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


