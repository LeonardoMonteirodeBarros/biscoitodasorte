// variaveis

const biscuit = document.querySelector("#biscuit");
const otherBiscuit = document.querySelector("#otherbiscuit");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const phrases = [
  "Quando você bate as suas asas com amor, perseverança e foco, o voo é inevitável",
  "Nunca deixe que uma dificuldade atrapalhe você de chegar ao seu êxito",
  "Se você continuar dormindo os seus sonhos não vão se realizar",
  "Em meio aos planos, desejos e sonhos, o importante é jamais desistir",
  "Faça tudo com determinação e mesmo que não tenha êxito você irá se sentir vitorioso",
  "Quando você não vença com dignidade, ganhar se torna um fracasso",
  "Quem perde de sorriso no rosto e cabeça levantada, é tão vencedor quanto quem ganha",
  "Quando obtém conhecimento, você nunca sai perdendo",
  "Só porque um sonho se mostrou ser mais difícil do que parecia, não desista dele",
  "Os sonhos acabam virando realidade, no passo a passo sem desistir",
  "Nunca desistir é a chave para o êxito profissional",
  "É a determinação para alcançar os meus sonhos, que me move",
  "A constância dos objetivos é o segredo do êxito",
  "Para alcançar o êxito, o esforço, a paciência e a persistência são um combo imbatível",
  "Para quem estuda não existe derrota. Ou aprende, ou ganha!",
  "Aprenda a ser disciplinado, pois nem sempre você estará motivado",
  "Abra-se para a coragem e vá atrás dos seus sonhos",
  "Acredite em si mesmo e tudo será possível",
  "Não desista, tudo é possível com persistência",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia",
  "A jornada de mil milhas começa com um único passo",
  "Não importa quantas vezes você cair, o importante é sempre se levantar",
  "Seja a mudança que você deseja ver no mundo",
  "A felicidade não é algo pronto, ela vem das suas próprias ações",
  "Não tenha medo de falhar, pois é na tentativa que se aprende",
  "Não deixe que o medo te impeça de alcançar seus objetivos",
  "Acredite que você pode e você já está no meio do caminho"
];

let randomPhrase = document.querySelector("#randomPhrase");
let generateRandomPhrase;

// Eventos
biscuit.addEventListener("click", generatePhrase);
document.addEventListener("keydown", pressEnterKey);

otherBiscuit.addEventListener("click", generatePhrase);
document.addEventListener("keydown", pressEnterKey);

//funções callback

function generatePhrase() {
  toggleScreen();

  generateRandomPhrase = Math.floor(Math.random() * phrases.length);

  randomPhrase.innerText = phrases[generateRandomPhrase];
}

function buttonTry(event) {
  event.preventDefault();
  toggleScreen();
}


function pressEnterKey(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    toggleScreen();
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}