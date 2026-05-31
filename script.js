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