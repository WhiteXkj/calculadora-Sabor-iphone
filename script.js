function tocarSom() {
  const som = new Audio("./click.wav");
  som.volume = 0.3;
  som.play();
}

function adicionar(valor) {
  tocarSom();

  let display = document.getElementById("display");
  let ultimo = display.value.slice(-1);

  let operadores = ["+", "-", "×", "÷"];

  // não deixa começar com operador
  if (operadores.includes(valor) && display.value === "") return;

  // substitui operador
  if (operadores.includes(valor) && operadores.includes(ultimo)) {
    display.value = display.value.slice(0, -1) + valor;
    return;
  }

  display.value += valor;
}

function limpar() {
  tocarSom();
  document.getElementById("display").value = "";
}

function apagar() {
  tocarSom();

  let display = document.getElementById("display");

  if (display.value.length > 0) {
    display.value = display.value.substring(0, display.value.length - 1);
  }
}

function inverter() {
  tocarSom();
  let display = document.getElementById("display");

  if (display.value) {
    display.value = String(-Number(display.value));
  }
}

function porcentagem() {
  tocarSom();
  let display = document.getElementById("display");

  if (display.value) {
    display.value = Number(display.value) / 100;
  }
}

function calcular() {
  tocarSom();

  let display = document.getElementById("display");
  let expressao = display.value;

  let ultimo = expressao.slice(-1);
  let operadores = ["+", "-", "×", "÷"];

  // evita erro
  if (expressao === "" || operadores.includes(ultimo)) return;

  try {
    // converte símbolos visuais para JS
    expressao = expressao
      .replace(/×/g, "*")
      .replace(/÷/g, "/");

    let resultado = eval(expressao);
    display.value = resultado;

  } catch {
    display.value = "";
  }
}
