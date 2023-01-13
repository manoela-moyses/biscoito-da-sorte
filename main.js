const selectedCookie = document.querySelector("#selected-cookie");
const btnOpenAnotherCookie = document.querySelector('button');
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

document.addEventListener('keypress', pressEnter);

selectedCookie.addEventListener('click', handleClick);
btnOpenAnotherCookie.addEventListener('click', handleBtnClick);

function handleClick() {
  screen1.classList.add("hide");
  screen2.classList.remove("hide");
}

function handleBtnClick() {
  screen2.classList.add("hide");
  screen1.classList.remove("hide");
}

function getQuote() {
  const quote = new Array();
  quote[0] = "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu";
  quote[1] = "Procure acender uma vela em vez de amaldiçoar a escuridão";
  quote[2] = "A vida trará coisas boas se tiveres paciência";
  quote[3] = "A juventude não é uma época da vida, é um estado de espírito";
  quote[4] = "Não compense na ira o que lhe falta na razão";
  quote[5] = "Defeitos e virtudes são apenas dois lados da mesma moeda";
  quote[6] = "Não há que ser forte. Há que ser flexível";
  quote[7] = "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos";
  quote[8] = "Quem quer colher rosas deve suportar os espinhos";
  quote[9] = "A adversidade é um espelho que reflete o verdadeiro eu";
  const i = Math.floor(10 * Math.random())
  document.getElementById("sorte").innerHTML = quote[i];
}

function pressEnter(event) {
  if (event.key == 'Enter' && screen1.classList.contains("hide")) {
    handleBtnClick();
    getQuote();
  }
  else {
    handleClick();
    getQuote();
  }
}