let answers = [];
questions = [
"What is your name?",
"What is your last name?",
"How old are you?",
];
for (let i = 0; i < questions.length; i++) {
answers[i] = prompt(questions[i], "");
console.log(questions);
}
const emailInput = document.querySelector('.main__inp[type="email"]');
const buttonBtn = document.querySelector(".b-2");
const headingName = document.querySelector("h1");
const buttonBtnHead = document.querySelector(".b-1");
const myImg = document.getElementsByTagName("img")[1];
const footerBtn = document.querySelector(".b-3");
const buttonCard = document.querySelector(".block-form");
const nameInput = document.querySelector(".contactform__name");
const text = document.getElementsByName("message")[0];
const closeBtn = document.querySelector(".close-btn");
const imgHand = document.querySelector(".block-img");
const imgCard = document.querySelector(".img-card");
const imgCd = document.querySelector(".img__card");

buttonBtnHead.addEventListener("mouseenter", () => {
  headingName.textContent = "Qubit.";
});

buttonBtnHead.addEventListener("mouseleave", () => {
  headingName.textContent = "Make ecommerce More personal.";
});

nameInput.addEventListener("input", () => {
  text.value = `Hello, my name ${nameInput.value}!`;
});

footerBtn.addEventListener("click", () => {
  buttonCard.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  buttonCard.style.display = "none";
});

const img = document.querySelector(".img");
img.addEventListener("mouseenter", () => {
  img.style.transform = "scale(1.2)";
});

img.addEventListener("mouseleave", () => {
  img.style.transform = "scale(1)";
});
