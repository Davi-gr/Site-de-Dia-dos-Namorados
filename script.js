const botaoMusica = document.getElementById("botaoMusica");
const musica = document.getElementById("musica");

let tocando = false;

botaoMusica.addEventListener("click", function() {
  if (tocando === false) {
    musica.play();
    botaoMusica.textContent = "Pausar música";
    tocando = true;
  } else {
    musica.pause();
    botaoMusica.textContent = "Tocar nossa música";
    tocando = false;
  }
});