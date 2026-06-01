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

//------------------//
//MOMENTOS DE FOTOS //
//-----------------//
const momentos = {
  viagens: [
    {
      foto: "fotos/viagem1.jpg",
      titulo: "Viagens",
      legenda: "Nossa primeira aventura juntos."
    },
    {
      foto: "fotos/viagem2.jpg",
      titulo: "Viagens",
      legenda: "Um lugar que ficou marcado na nossa história."
    },
    {
      foto: "fotos/viagem3.jpg",
      titulo: "Viagens",
      legenda: "Mais uma lembrança linda ao seu lado."
    }
  ],

  comidas: [
    {
      foto: "fotos/comida1.jpg",
      titulo: "Comidas",
      legenda: "Nossos momentos provando coisas boas."
    },
    {
      foto: "fotos/comida2.jpg",
      titulo: "Comidas",
      legenda: "Comida boa fica melhor com você."
    },
    {
      foto: "fotos/comida3.jpg",
      titulo: "Comidas",
      legenda: "Um dos nossos rolês mais gostosos."
    }
  ],

  aleatorias: [
    {
      foto: "fotos/aleatoria1.jpg",
      titulo: "Fotos aleatórias",
      legenda: "Uma das minhas fotos preferidas."
    },
    {
      foto: "fotos/aleatoria2.jpg",
      titulo: "Fotos aleatórias",
      legenda: "Esse sorriso sempre vai ser meu favorito."
    },
    {
      foto: "fotos/aleatoria3.jpg",
      titulo: "Fotos aleatórias",
      legenda: "Um momento simples, mas especial."
    }
  ]
};

let momentoAtual = [];
let fotoAtual = 0;
let storyTimer;

const storiesModal = document.getElementById("storiesModal");
const storyFoto = document.getElementById("storyFoto");
const storyTitulo = document.getElementById("storyTitulo");
const storyLegenda = document.getElementById("storyLegenda");
const storyProgress = document.getElementById("storyProgress");

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

  const item = momentoAtual[fotoAtual];

  storyFoto.src = item.foto;
  storyTitulo.textContent = item.titulo;
  storyLegenda.textContent = item.legenda;

  montarBarras();

  storyTimer = setTimeout(function() {
    proximaFotoStory();
  }, 4000);
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

storyFoto.addEventListener("click", proximaFotoStory);

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

