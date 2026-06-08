const musicInfo = [
  {
    musicName: "Nessas Horas - Ao Vivo",
    artistName: "Matheus & Kauan",
    musicSrc: "musicas/musica1.mp3",
    musicPoster: "capas/capa1.png"
  },

  {
    musicName: "The Only Exception",
    artistName: "Paramore",
    musicSrc: "musicas/musica2.mp3",
    musicPoster: "capas/capa2.png"
  },

  {
    musicName: "Perfect",
    artistName: "Ed Sheeran",
    musicSrc: "musicas/musica3.mp3",
    musicPoster: "capas/capa3.png"
  }
];

/* ELEMENTOS */

const audio = document.querySelector(".audio");

const bg = document.querySelector(".bg");

const musicName =
  document.querySelector(".music-name");

const artistName =
  document.querySelector(".artist-name");

const posterContainer =
  document.querySelector(".poster-container");

const playBtn =
  document.querySelector(".play-btn");

const prevBtn =
  document.querySelector(".back-btn");

const nextBtn =
  document.querySelector(".forward-btn");

const current =
  document.querySelector(".music-current-time");

const duration =
  document.querySelector(".music-duration-time");

const timebar =
  document.querySelector(".music-current-length");

const timebarCircle =
  document.querySelector(".music-current-length-circle");

const musicTimebar =
  document.querySelector(".timebar");

/* CRIA CAPAS */

musicInfo.forEach((item) => {

  let poster = document.createElement("img");

  poster.classList.add("poster");

  poster.src = item.musicPoster;

  posterContainer.appendChild(poster);

});

/* MÚSICA ATUAL */

let musicIndex = 0;

function currentMusic(index) {

  const musica = musicInfo[index];

  bg.src = musica.musicPoster;

  musicName.textContent = musica.musicName;

  artistName.textContent = musica.artistName;

  audio.src = musica.musicSrc;

  posterContainer.style.transform =
    `translateX(-${index * 100}%)`;

}

currentMusic(musicIndex);

/* PLAY E PAUSE */

let isPlaying = false;

function playMusic() {

  audio.play();

  isPlaying = true;

  playBtn.classList.replace(
    "fa-play-circle",
    "fa-pause-circle"
  );

}

function pauseMusic() {

  audio.pause();

  isPlaying = false;

  playBtn.classList.replace(
    "fa-pause-circle",
    "fa-play-circle"
  );

}

playBtn.addEventListener("click", () => {

  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }

});

/* PRÓXIMA MÚSICA */

function nextMusic() {

  musicIndex++;

  if (musicIndex >= musicInfo.length) {
    musicIndex = 0;
  }

  currentMusic(musicIndex);

  playMusic();

}

nextBtn.addEventListener("click", nextMusic);

/* MÚSICA ANTERIOR */

function prevMusic() {

  musicIndex--;

  if (musicIndex < 0) {
    musicIndex = musicInfo.length - 1;
  }

  currentMusic(musicIndex);

  playMusic();

}

prevBtn.addEventListener("click", prevMusic);

/* TEMPO DA MÚSICA */

audio.addEventListener("timeupdate", () => {

  const currentTime = audio.currentTime;

  const durationTime = audio.duration;

  /* BARRA */

  const progress =
    (currentTime / durationTime) * 100;

  timebar.style.width = progress + "%";

  timebarCircle.style.left = progress + "%";

  /* TEMPO ATUAL */

  let minutes = Math.floor(currentTime / 60);

  let seconds = Math.floor(currentTime % 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  current.textContent =
    minutes + ":" + seconds;

  /* DURAÇÃO */

  let durationMinutes =
    Math.floor(durationTime / 60);

  let durationSeconds =
    Math.floor(durationTime % 60);

  if (durationSeconds < 10) {
    durationSeconds = "0" + durationSeconds;
  }

  if (!isNaN(durationTime)) {

    duration.textContent =
      durationMinutes + ":" + durationSeconds;

  }

});

/* CLICAR NA BARRA */

musicTimebar.addEventListener("click", (e) => {

  const largura = musicTimebar.clientWidth;

  const cliqueX = e.offsetX;

  audio.currentTime =
    (cliqueX / largura) * audio.duration;

});

/* AUTO NEXT */

audio.addEventListener("ended", () => {

  nextMusic();

});

//--------------//
//MENSAGEM EM CARTA
//--------------//

function abrirCarta() {
  const carta = document.getElementById("cartaAberta");
  carta.classList.add("active");
}

function fecharCarta() {
  const carta = document.getElementById("cartaAberta");
  carta.classList.remove("active");
}


/* LINHA DO TEMPO */
const timelineItems = document.querySelectorAll(".timeline-item");

function mostrarTimeline() {
  timelineItems.forEach(function(item) {
    const posicao = item.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 120) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", mostrarTimeline);
mostrarTimeline();

/* CONTADOR DE TEMPO */

function atualizarContadorAmor() {
  const inicioNamoro = new Date(2025, 5, 12, 0, 0, 0);
  const agora = new Date();

  let anos = agora.getFullYear() - inicioNamoro.getFullYear();
  let meses = agora.getMonth() - inicioNamoro.getMonth();
  let dias = agora.getDate() - inicioNamoro.getDate();

  if (dias < 0) {
    meses--;

    const ultimoMes = new Date(
      agora.getFullYear(),
      agora.getMonth(),
      0
    ).getDate();

    dias += ultimoMes;
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  const diferenca = agora - inicioNamoro;

  const horas = Math.floor(diferenca / (1000 * 60 * 60)) % 24;
  const minutos = Math.floor(diferenca / (1000 * 60)) % 60;
  const segundos = Math.floor(diferenca / 1000) % 60;

  document.getElementById("anos").textContent = anos;
  document.getElementById("meses").textContent = meses;
  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContadorAmor, 1000);
atualizarContadorAmor();


//------------------//
//MOMENTOS DE FOTOS //
//-----------------//
const momentos = {
  viagens: [
    {
      tipo: "foto",
      src: "imagens/Viagens/foto1.jpg",
      titulo: "Viagens",
      legenda: "Nossa primeira viagem juntos"
    },
    { 
      tipo: "foto",
      src: "imagens/Viagens/foto2.JPG",
      titulo: "Viagens",
      legenda: "Foto com mais sentimento impossível"
    },
    { 
      tipo: "foto",
      src: "imagens/Viagens/foto3.jpg",
      titulo: "Viagens",
      legenda: "Enfrentando seus medos"
    },
    { 
      tipo: "foto",
      src: "imagens/Viagens/foto4.jpg",
      titulo: "Viagens",
    },
    { 
      tipo: "foto",
      src: "imagens/Viagens/foto5.jpg",
      titulo: "Viagens",
    },
    { 
      tipo: "foto",
      src: "imagens/Viagens/foto6.jpg",
      titulo: "Viagens",
    }
  ],

  comidas: [
    {
      tipo: "foto",
      src: "imagens/Comidas/foto1.jpg",
      titulo: "Comidas",
      legenda: "Nossos momentos provando coisas boas."
    },
    {
      tipo: "foto",
      src: "imagens/Comidas/foto2.jpg",
      titulo: "Comidas",
      legenda: "chiquinho"
    },
    {
      tipo: "foto",
      src: "imagens/Comidas/foto3.JPG",
      titulo: "Comidas",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/Comidas/foto4.jpg",
      titulo: "Comidas",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/Comidas/foto5.jpg",
      titulo: "Comidas",
      legenda: "Comendo o Lula Molusco"
    },
    {
      tipo: "foto",
      src: "imagens/Comidas/foto6.jpg",
      titulo: "Comidas",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/Comidas/foto7.jpg",
      titulo: "Comidas",
      legenda: "Janta top no parrilha"
    },
    {
      tipo: "foto",
      src: "imagens/Comidas/foto8.jpg",
      titulo: "Comidas",
      legenda: "Beirutezão de lei"
    },
    {
      tipo: "foto",
      src: "imagens/Comidas/foto9.jpg",
      titulo: "Comidas",
      legenda: "Quando a comida é boa eu como até a cozinheira"
    }
  ],

  aleatorias: [
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto1.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto2.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto3.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto5.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto6.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto7.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto8.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto9.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto10.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto11.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto12.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto13.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto14.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto15.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto16.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto17.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto4.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    },
    {
      tipo: "foto",
      src: "imagens/FotosAleatorias/foto18.jpg",
      titulo: "Fotos aleatórias",
      legenda: ""
    }
    
  ],
  romanticas: [
  {
    tipo: "foto",
    src: "imagens/nossas/foto1.jpg",
    titulo: "Fotos preferidas",
    legenda: "Dia que você conheceu meus pais"
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto2.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto3.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto4.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto5.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto6.JPG",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto7.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto8.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto9.JPG",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto10.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto11.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto12.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto13.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto14.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto15.jpg",
    titulo: "Fotos preferidas",
    legenda: "Só pq ta gostosa"
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto16.jpg",
    titulo: "Fotos preferidas",
  },
  {
    tipo: "foto",
    src: "imagens/nossas/foto17.JPG",
    titulo: "Fotos preferidas",
  }
  
]
};

let momentoAtual = [];
let fotoAtual = 0;
let storyTimer;
let inicioStory;
let tempoRestante = 4000;
let segurandoStory = false;

const storiesModal = document.getElementById("storiesModal");
const storyFoto = document.getElementById("storyFoto");
const storyTitulo = document.getElementById("storyTitulo");
const storyLegenda = document.getElementById("storyLegenda");
const storyProgress = document.getElementById("storyProgress");
const storyClickLeft = document.querySelector(".story-click-left");
const storyClickRight = document.querySelector(".story-click-right");

function abrirMomento(tipo) {
  momentoAtual = momentos[tipo];
  fotoAtual = 0;

  storiesModal.style.display = "flex";

  setTimeout(function() {
    storiesModal.classList.add("active");
  }, 10);

  mostrarFotoStory();
}

function mostrarFotoStory() {
  clearTimeout(storyTimer);
  tempoRestante = 4000;

  const item = momentoAtual[fotoAtual];

  storyFoto.src = item.src;
  storyTitulo.textContent = item.titulo;
  storyLegenda.textContent = item.legenda || "";

  montarBarras();

  inicioStory = Date.now();

  storyTimer = setTimeout(function() {
    proximaFotoStory();
  }, tempoRestante);
}

function montarBarras() {
  storyProgress.innerHTML = "";

  momentoAtual.forEach(function(_, index) {
    const barra = document.createElement("span");

    if (index < fotoAtual) {
      barra.classList.add("done");
    }

    if (index === fotoAtual) {
      barra.classList.add("active");
    }

    storyProgress.appendChild(barra);
  });
}

function proximaFotoStory() {
  fotoAtual++;

  if (fotoAtual >= momentoAtual.length) {
    fecharMomento();
    return;
  }

  mostrarFotoStory();
}

function fotoAnteriorStory() {
  fotoAtual--;

  if (fotoAtual < 0) {
    fotoAtual = 0;
    return;
  }

  mostrarFotoStory();
}

function fecharMomento() {
  clearTimeout(storyTimer);

  storiesModal.classList.remove("active");

  setTimeout(function() {
    storiesModal.style.display = "none";
  }, 250);
}

let pressionouEm = 0;
let pressTimer;
let storyPausado = false;

function pausarStory() {
  clearTimeout(storyTimer);
  storiesModal.classList.add("pausado");

  tempoRestante -= Date.now() - inicioStory;

  if (tempoRestante < 0) {
    tempoRestante = 0;
  }
}
function continuarStory() {
  clearTimeout(storyTimer);
  storiesModal.classList.remove("pausado");

  inicioStory = Date.now();

  storyTimer = setTimeout(function() {
    proximaFotoStory();
  }, tempoRestante);
}

function iniciarPressao() {
  storyPausado = false;
  pressionouEm = Date.now();

  pressTimer = setTimeout(function() {
    storyPausado = true;
    pausarStory();
  }, 300);
}

function finalizarPressao(event) {
  clearTimeout(pressTimer);

  const tempoPressionado = Date.now() - pressionouEm;

  if (storyPausado || tempoPressionado >= 300) {
    continuarStory();
    return;
  }

  const posicaoClique = event.clientX;
  const metadeTela = window.innerWidth / 2;

  if (posicaoClique < metadeTela) {
    fotoAnteriorStory();
  } else {
    proximaFotoStory();
  }
}

storyClickLeft.addEventListener("pointerdown", iniciarPressao);
storyClickLeft.addEventListener("pointerup", finalizarPressao);

storyClickRight.addEventListener("pointerdown", iniciarPressao);
storyClickRight.addEventListener("pointerup", finalizarPressao);




//---------------//
//ÚLTIMO PRESENTE//
//---------------//

function abrirCeuEspecial() {
  const ceuModal = document.getElementById("ceuModal");

  ceuModal.style.display = "flex";

  setTimeout(function() {
    ceuModal.classList.add("active");
  }, 10);
}

function fecharCeuEspecial() {
  const ceuModal = document.getElementById("ceuModal");

  ceuModal.classList.remove("active");

  setTimeout(function() {
    ceuModal.style.display = "none";
  }, 350);
}

