const listaDeMoedas = document.querySelector("#lista-moedas");
const input = document.querySelector("#input-busca");

let TodasAsCriptos = [];

async function api() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=brl&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  try {
    const resposta = await fetch(url);
    if (!resposta.ok) {
      throw new Error("ERROOOO");
    }

    const dados = await resposta.json();
    console.log(dados);

    TodasAsCriptos = dados;

    // Passamos a lista inteira para renderizar
    renderizar(TodasAsCriptos);

    input.value = "";
  } catch (error) {
    console.log(error);
  }
}

api();

// Adicionando o parâmetro 'lista' para ela desenhar o que a gente mandar
function renderizar(lista) {
  listaDeMoedas.innerHTML = "";

  // O loop agora roda na 'lista' que ela recebeu
  lista.forEach((moeda) => {
    const tr = document.createElement("tr");

    // Lógica para cor: verde se for maior que zero, vermelho se for menor
    let classeCor = "";
    if (moeda.price_change_percentage_24h > 0) {
      classeCor = "positivo";
    } else {
      classeCor = "negativo";
    }

    tr.innerHTML = `
            <td>${moeda.market_cap_rank}</td>
            
            <td>
                <div class="moeda-info">
                    <img src="${moeda.image}" alt="${moeda.name}">
                    <span>${moeda.name} <small>${moeda.symbol}</small></span>
                </div>
            </td>
            
            <td>R$ ${moeda.current_price}</td>
            
            <td class="${classeCor}">${moeda.price_change_percentage_24h}%</td>
            
            <td>R$ ${moeda.market_cap}</td>
        `;

    listaDeMoedas.appendChild(tr);
  });
}

input.addEventListener("input", function (event) {
  // Pega o que foi digitado e passa para minúsculo
  const textoDigitado = event.target.value.toLowerCase();

  // Filtra o nosso "cofre" original
  const moedasFiltradas = TodasAsCriptos.filter((moeda) => {
    const nomeDaMoeda = moeda.name.toLowerCase();
    // Retorna verdadeiro se o nome da moeda tiver o texto digitado
    return nomeDaMoeda.includes(textoDigitado);
  });

  // Manda o pintor desenhar só as moedas filtradas
  renderizar(moedasFiltradas);
});
