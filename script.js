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
  if (event.target.tagName !== "BUTTON") {
    proximoStory();
  }
});