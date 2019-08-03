const message = document.querySelector("#message");
const saldo = document.querySelector("#saldo");
const lucro = document.querySelector("#lucro");
let c = 0;
saldo.value = 300;

let unique = [];
let premiado = [];

//botao
document.querySelector("form").addEventListener("submit", function(e) {
  fazTudo(e);
  e.preventDefault();
});

//botao 10x
document.querySelector(".btn-secondary").addEventListener("click", function(e) {
  e.preventDefault();
  for (i = 0; i < 10; i++) {
    fazTudo(e);
  }
});

//shuffle
function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));

    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

//pega numeros digitados.
// e valida
function cartela(c) {
  y = document.querySelectorAll("#n1");
  a = [];
  y.forEach(function(yn, index) {
    x = yn.value;
    a.push(x);
  });

  validaCartela(a);

  return a;
}

//embaralha, e imprime numeros na tablea
function fazTudo(e) {
  jogador = cartela().map(Number);

  let a = Array.from(Array(60), (x, index) => index + 1);

  a = shuffle(a);

  premiado = a.splice(0, 6).map(Number);

  itemsTabela = document.querySelectorAll("td");

  itemsTabela.forEach(function(itemTabela, index) {
    itemTabela.textContent = premiado[index];
  });

  e.preventDefault();
}

//checa se esta entre 0 e 60
function check(v) {
  return v > 0 && v <= 60;
}

function validaCartela(a) {
  let unique = [...new Set(a)];

  if (unique.every(check) && unique.length == 6) {
    resultadoCartela();
    console.log("test");
  } else {
    console.log("fail");
    message.textContent = `Por favor verifique os numeros`;
    message.style.color = "red";
  }
}

function resultadoCartela() {
  console.log("Success");
  message.textContent = ``;
  message.style.color = "black";
  saldo.value = saldo.value - 3.5;
  p = document.querySelector("p");
  c = c + 1;
  p.textContent = `Jogadas: ${c}`;
}
