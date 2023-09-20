import "./styles.css";

const suits = ["hearts", "spades", "clubs", "diamonds"];
const values = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A"
];

function getRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];
  return { suit: randomSuit, value: randomValue };
}

function updateCard() {
  const card = document.querySelector(".card");
  const { suit, value } = getRandomCard();

  card.classList.add(suit);

  const numberElement = card.querySelector(".number");
  numberElement.textContent = value;
}

window.onload = updateCard();

document.addEventListener("keydown", function(event) {
  if (event.key === "F5") {
    updateCard();
  }
});
