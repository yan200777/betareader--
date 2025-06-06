
const perguntas = [
  "Você sente inveja de quem ganha dinheiro fácil lendo livros?",
  "Você gostaria de ganhar até R$2.000 por mês lendo histórias?",
  "Se pudesse trabalhar do seu quarto como Beta Reader, você começaria hoje?",
  "Você se arrependeria de perder essa oportunidade?",
  "Você quer dominar um mercado que ainda poucos conhecem?",
  "Você acha que merece ganhar mais que a média com algo prazeroso?",
  "Você quer transformar seu tempo livre em renda de verdade?"
];

let index = 0;
let progresso = 0;
let dinheiro = 0;

const questionText = document.getElementById("question-text");
const progressBar = document.getElementById("progress-bar");
const moneySpan = document.getElementById("money");
const notif = document.getElementById("notif");
const cashSound = document.getElementById("cashSound");

function nextQuestion(resposta) {
  if (index < perguntas.length) {
    dinheiro += Math.floor(Math.random() * 150 + 50);
    moneySpan.textContent = dinheiro;
    cashSound.play();
    notif.style.display = "block";
    setTimeout(() => notif.style.display = "none", 1000);

    index++;
    progresso += 100 / perguntas.length;
    progressBar.style.width = progresso + "%";

    if (index < perguntas.length) {
      questionText.textContent = perguntas[index];
    } else {
      window.location.href = "https://pay.kirvano.com/r/481d9c0d-7021-47eb-83a3-02934dd97a51";
    }
  }
}

window.onload = () => {
  questionText.textContent = perguntas[index];
};
