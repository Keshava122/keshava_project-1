let messageIndex = 0;

const messages = [
  "No",
  "Are you sure?",
  "Think again 😏",
  "Really?",
  "Last chance 😜",
  "Okay okay… YES ❤️"
];

const noButton = document.querySelector(".no-button");
const yesButton = document.querySelector(".yes-button");
const music = document.getElementById("bg-music");

// Play music on first click (browser rule)
document.addEventListener("click", () => {
  if (music.paused) {
    music.volume = 0.4;
    music.play();
  }
});

function handleNoClick() {
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  const currentSize = parseFloat(
    window.getComputedStyle(yesButton).fontSize
  );
  yesButton.style.fontSize = `${currentSize + 8}px`;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}

noButton.addEventListener("click", handleNoClick);
yesButton.addEventListener("click", handleYesClick);
