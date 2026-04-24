# 🚀 CryptoLive

Uma aplicação web dinâmica que exibe as cotações das principais criptomoedas em tempo real. Desenvolvido com um design moderno em *Glassmorphism*, o projeto consome dados reais para manter os investidores sempre atualizados.

## 🔗 Demonstração
Acesse o projeto online aqui: **[CryptoLive](https://lucasriandev.github.io/Crypto-Live/)**

![Preview do Projeto](https://github.com/user-attachments/assets/70ac77f2-173c-402d-9f27-d4f0663531d0)

## 📋 Sobre o Projeto
O CryptoLive foi criado para exercitar o consumo de APIs externas (CoinGecko), manipulação dinâmica de arrays no JavaScript e criação de interfaces limpas e responsivas. Ele lista as 100 principais moedas do mercado com seus respectivos preços, variações diárias e capitalização de mercado.

### 🛠️ Tecnologias Utilizadas
* **HTML5**: Estruturação de dados tabulares utilizando `<table>`, `<thead>` e `<tbody>`.
* **CSS3**: 
  * Interface sofisticada com efeito **Glassmorphism** (fundo desfocado translúcido) usando `backdrop-filter`.
  * Estilização condicional baseada em classes (`.positivo` e `.negativo`) para indicar lucro ou perda.
  * Responsividade aplicada à tabela com `overflow-x: auto`, garantindo legibilidade em dispositivos móveis.
* **JavaScript (ES6+)**:
  * Requisições assíncronas utilizando `fetch` e `async/await` para a API pública do **CoinGecko**.
  * Renderização dinâmica de elementos do DOM através de iterações com `.forEach()`.
  * Filtro de busca em tempo real utilizando o método `.filter()` e manipulação de strings com `.toLowerCase()`.

## ✨ Funcionalidades
* **Cotação em Tempo Real**: Os dados são consumidos diretamente da API, exibindo valores atualizados em Reais (BRL).
* **Busca Inteligente**: Barra de pesquisa interativa que filtra as moedas instantaneamente enquanto o usuário digita.
* **Feedback Visual de Mercado**: Os valores da coluna "24h %" ficam verdes caso a moeda esteja em alta, ou vermelhos caso esteja em queda, através de lógica condicional no script.
* **Layout Adaptável**: A tabela permite rolagem horizontal suave em smartphones, mantendo o design do aplicativo intacto.

## 📂 Estrutura de Arquivos
```text
├── index.html   # Estrutura principal com a tabela de cotações
├── styles.css   # Regras de design, UI (Glassmorphism) e responsividade
├── script.js    # Lógica de integração com a API CoinGecko e Filtros de Busca
└── README.md    # Documentação do projeto
