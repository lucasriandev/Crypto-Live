const input = document.querySelector("#input-busca");

async function Api() {
  const moeda = input.value;
  if (moeda === "") return;
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${moeda}&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error("ERROOOOO");
    }

    const dados = await resposta.json();
    console.log(dados);
  } catch (error) {
    console.log(error);
    alert("Api deu erro!");
  }
}
