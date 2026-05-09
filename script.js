let storyAtual = 0;
const stories = document.querySelectorAll(".story");

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

  if (storyAtual === 0 && !clicouNoBotao) {
    return;
  }

  if (!clicouNoBotao) {
    proximoStory();
  }
});