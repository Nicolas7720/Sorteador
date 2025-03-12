const sortear = () => {
  const inputQuantidade = parseInt(document.querySelector("#quantidade").value);
  const inputNumInicial = parseInt(document.querySelector("#de").value);
  const inputNumFinal = parseInt(document.querySelector("#ate").value);
  const textoSorteados = document.querySelector("#resultado");

  if (
    isNaN(inputQuantidade) ||
    isNaN(inputNumInicial) ||
    isNaN(inputNumFinal)
  ) {
    alert("Alguma informação está Faltando ou é Invalida. Verifique!");
    return;
  } else if (inputNumInicial > inputNumFinal) {
    alert(
      "O campo: 'Do número' deve ser maior que o campo: 'Até o número'. Verifique!"
    );
    return;
  } else {
    if (inputQuantidade > inputNumFinal - inputNumInicial + 1) {
      alert(
        "Campo 'Quantidade' deve ser menor ou igual ao intervalo informado no campo 'Do número' até o campo 'Até o número'. Verifique!"
      );
      return;
    } else {
      const sorteados = [];

      while (sorteados.length < inputQuantidade) {
        const num = obterNumAleatório(inputNumInicial, inputNumFinal);
        if (!sorteados.includes(num)) {
          sorteados.push(`${num} `);
        }
      }
      textoSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    }
  }
  alterarStatusBotao();
};
const obterNumAleatório = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const alterarStatusBotao = () => {
  const btnIniciar = document.querySelector(".container__botao-desabilitado");
  if (btnIniciar.classList.contains("container__botao-desabilitado")) {
    btnIniciar.classList.remove("container__botao-desabilitado");
    btnIniciar.classList.add("container__botao");
  }
};

const reiniciar = () => {
  const inputQuantidade = (document.querySelector("#quantidade").value = "");
  const inputNumInicial = (document.querySelector("#de").value = "");
  const inputNumFinal = (document.querySelector("#ate").value = "");
  const btnIniciarModificado =
    document.querySelectorAll(".container__botao")[1];
  if (btnIniciarModificado.classList.contains("container__botao")) {
    btnIniciarModificado.classList.remove("container__botao");
    btnIniciarModificado.classList.add("container__botao-desabilitado");
  }

  const textoSorteados = document.querySelector("#resultado");
  textoSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>`;
};
