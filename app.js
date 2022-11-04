const textarea = document.querySelector("textarea");
const tagsContainer = document.querySelector(".tags-container");

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  let arr = e.target.value.split(",");
  tagsContainer.innerHTML = "";
  arr.forEach((tag) => {
    if (tag.trim() !== " " && tag.trim() !== "") {
      let span = `<span class="choice">${tag}</span>`;
      tagsContainer.innerHTML += span;
    }
  });

  // Make Highlight Effect
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 20);
    makeHighLightEffect();
  }
});

function makeHighLightEffect() {
  const allTags = document.querySelectorAll(".choice");
  const times = 20;

  // Make the Highlight Effect Without Selecting Any Tag
  const interval = setInterval(() => {
    const randomTag = allTags[Math.floor(Math.random() * allTags.length)];
    highlight(randomTag);
    setTimeout(() => {
      unHighlight(randomTag);
    }, 100);
  }, 100);

  // Stop Highlight Effect And Select A Random Tag
  setTimeout(() => {
    const randomTag = allTags[Math.floor(Math.random() * allTags.length)];
    clearInterval(interval);
    highlight(randomTag);
  }, times * 100);
}

function highlight(tag) {
  tag.classList.add("highlight");
}

function unHighlight(tag) {
  tag.classList.remove("highlight");
}
