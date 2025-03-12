const sortear = () => {
  const inputQuantidade = parseInt(document.querySelector("#quantidade").value);
  const inputNumInicial = parseInt(document.querySelector("#de").value);
  const inputNumFinal = parseInt(document.querySelector("#ate").value);
  const textoSorteados = document.querySelector("#resultado");

  const sorteados = [];

  while (sorteados.length < inputQuantidade) {
    const num = obterNumAleatório(inputNumInicial, inputNumFinal);
    if (!sorteados.includes(num)) {
      sorteados.push(num);
    }
  }

  textoSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
};
const obterNumAleatório = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const reiniciar = () => {
  const inputQuantidade = (document.querySelector("#quantidade").value = "");
  const inputNumInicial = (document.querySelector("#de").value = "");
  const inputNumFinal = (document.querySelector("#ate").value = "");
  const textoSorteados = document.querySelector("#resultado");
  textoSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
};
