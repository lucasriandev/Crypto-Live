const listaDeMoedas = document.querySelector("#lista-moedas");

let TodasAsCriptos = [];
let moedaAtual = null;

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

    moedaAtual = dados;
  } catch (error) {
    console.log(error);
  }
}

api();

function renderizar() {
  listaDeMoedas.innerHTML = "";

  listaDeMoedas.forEach((moeda) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <td>${moeda.market_cap_rank}</td>
            
            <td>
                <div class="moeda-info">
                    <img src="${moeda.image}" alt="${moeda.name}">
                    <span>${moeda.name} <small>${moeda.symbol}</small></span>
                </div>
            </td>
            
            <td>R$ ${moeda.current_price}</td>
            
            <td>${moeda.price_change_percentage_24h}%</td>
            
            <td>R$ ${moeda.market_cap}</td>
        `;

    listaDeMoedas.appendChild(tr);
  });
}
