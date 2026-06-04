const musicInfo = [
  {
    musicName: "Perfect",
    artistName: "Ed Sheeran",
    musicSrc: "musicas/musica1.mp3",
    musicPoster: "capas/capa1.jpg"
  },

  {
    musicName: "Until I Found You",
    artistName: "Stephen Sanchez",
    musicSrc: "musicas/musica2.mp3",
    musicPoster: "capa2.jpg"
  },

  {
    musicName: "Photograph",
    artistName: "Ed Sheeran",
    musicSrc: "musicas/musica3.mp3",
    musicPoster: "capas/capa3.jpg"
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
      src: "fotos/viagem1.jpg",
      titulo: "Viagens",
      legenda: "Nossa primeira aventura juntos."
    },
    { 
      tipo: "foto",
      src: "fotos/viagem2.jpg",
      titulo: "Viagens",
      legenda: "Um lugar que ficou marcado na nossa história."
    },
    { 
      tipo: "foto",
      src: "fotos/viagem3.jpg",
      titulo: "Viagens",
      legenda: "Mais uma lembrança linda ao seu lado."
    }
  ],

  comidas: [
    {
      tipo: "foto",
      src: "fotos/comida1.jpg",
      titulo: "Comidas",
      legenda: "Nossos momentos provando coisas boas."
    },
    {
      tipo: "foto",
      src: "fotos/comida2.jpg",
      titulo: "Comidas",
      legenda: "Comida boa fica melhor com você."
    },
    {
      tipo: "foto",
      src: "fotos/comida3.jpg",
      titulo: "Comidas",
      legenda: "Um dos nossos rolês mais gostosos."
    }
  ],

  aleatorias: [
    {
      tipo: "foto",
      src: "fotos/aleatoria1.jpg",
      titulo: "Fotos aleatórias",
      legenda: "Uma das minhas fotos preferidas."
    },
    {
      tipo: "foto",
      src: "fotos/aleatoria2.jpg",
      titulo: "Fotos aleatórias",
      legenda: "Esse sorriso sempre vai ser meu favorito."
    },
    {
      tipo: "foto",
      src: "fotos/aleatoria3.jpg",
      titulo: "Fotos aleatórias",
      legenda: "Um momento simples, mas especial."
    }
    
  ],
  romanticas: [
  {
    tipo: "foto",
    src: "fotos/romantica1.jpg",
    titulo: "Fotos românticas",
    legenda: "Um dos nossos momentos mais especiais."
  },
  {
    tipo: "video",
    src: "videos/romantico1.mp4",
    titulo: "Fotos românticas",
    legenda: "Um pedacinho desse momento."
  },
  {
    tipo: "foto",
    src: "fotos/romantica2.jpg",
    titulo: "Fotos românticas",
    legenda: "Você sempre deixa tudo mais bonito."
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
const storyVideo = document.getElementById("storyVideo");
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

  storyTitulo.textContent = item.titulo;
  storyLegenda.textContent = item.legenda;

  montarBarras();

  if (item.tipo === "video") {
    storyFoto.style.display = "none";
    storyVideo.style.display = "block";

    storyVideo.src = item.src;
    storyVideo.currentTime = 0;
    storyVideo.play().catch(() => {});

    storyVideo.onended = function() {
      proximaFotoStory();
    };

  } else {
    storyVideo.pause();
    storyVideo.style.display = "none";
    storyFoto.style.display = "block";

    storyFoto.src = item.src;

    inicioStory = Date.now();

    storyTimer = setTimeout(function() {
      proximaFotoStory();
    }, tempoRestante);
  }
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

  storyVideo.pause();
  storyVideo.currentTime = 0;

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

  if (storyVideo.style.display === "block") {
    storyVideo.pause();
  } else {
    tempoRestante -= Date.now() - inicioStory;

    if (tempoRestante < 0) {
      tempoRestante = 0;
    }
  }
}
function continuarStory() {
  storiesModal.classList.remove("pausado");

  if (storyVideo.style.display === "block") {
    storyVideo.play().catch(() => {});
  } else {
    inicioStory = Date.now();

    storyTimer = setTimeout(function() {
      proximaFotoStory();
    }, tempoRestante);
  }
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

