let storyAtual = 0;
const stories = document.querySelectorAll(".story");

const formPresente = document.getElementById("formPresente");

if (formPresente) {
  formPresente.addEventListener("submit", function(event) {
    event.preventDefault();

    const dadosPresente = {
      nomeCasal: document.getElementById("nomeCasal").value,
      historia: document.getElementById("historia").value,
      musica: document.getElementById("musica").value,
      momento: document.getElementById("momento").value
    };

    localStorage.setItem("presenteCasal", JSON.stringify(dadosPresente));

    window.location.href = "presente.html";
  });
}

function carregarPresente() {
  const dadosSalvos = localStorage.getItem("presenteCasal");

  if (!dadosSalvos) {
    return;
  }

  const dados = JSON.parse(dadosSalvos);

  const storyNomeCasal = document.getElementById("storyNomeCasal");
  const storyHistoria = document.getElementById("storyHistoria");
  const storyMusica = document.getElementById("storyMusica");
  const storyMomento = document.getElementById("storyMomento");

  if (storyNomeCasal) {
    storyNomeCasal.textContent = dados.nomeCasal;
    storyHistoria.textContent = dados.historia;
    storyMusica.textContent = dados.musica || "A música de vocês ainda será escolhida ❤️";
    storyMomento.textContent = dados.momento || "Um momento especial que ficará guardado para sempre.";
  }
}

function proximoStory() {
  stories[storyAtual].classList.remove("active");

  storyAtual++;

  if (storyAtual >= stories.length) {
    storyAtual = 0;
  }

  stories[storyAtual].classList.add("active");
}

document.addEventListener("click", function(event) {
  const clicouNoBotao = event.target.tagName === "BUTTON";

  if (stories.length === 0) {
    return;
  }

  if (storyAtual === 0 && !clicouNoBotao) {
    return;
  }

  if (!clicouNoBotao) {
    proximoStory();
  }
});

carregarPresente();