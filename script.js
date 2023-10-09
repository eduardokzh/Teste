const listaDeLivros = [
  {
    titulo: "Dom Casmurro",
    genero: "Romance",
    autor: "Machado de Assis",
  },
  {
    titulo: "1984",
    genero: "Ficção Científica",
    autor: "George Orwell",
  },
  {
    titulo: "O Pequeno Príncipe",
    genero: "Infantil",
    autor: "Antoine de Saint-Exupéry",
  },
  {
    titulo: "A Revolução dos Bichos",
    genero: "Ficção Científica",
    autor: "George Orwell",
  },
];

function realizarPesquisa() {
  const generoInput = document.getElementById("genre").value.toLowerCase();
  const tituloInput = document.getElementById("title").value.toLowerCase();
  const autorInput = document.getElementById("author").value.toLowerCase();
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = "";

  const resultados = [];

  for (const livro of listaDeLivros) {
    const genero = livro.genero.toLowerCase();
    const titulo = livro.titulo.toLowerCase();
    const autor = livro.autor.toLowerCase();

    if (
      (generoInput === "" || genero.includes(generoInput)) &&
      (tituloInput === "" || titulo.includes(tituloInput)) &&
      (autorInput === "" || autor.includes(autorInput))
    ) {
      resultados.push(
        `<li>Título: ${livro.titulo}<br>Gênero: ${livro.genero}<br>Autor: ${livro.autor}</li>`,
      );
    }
  }

  if (resultados.length > 0) {
    resultsContainer.innerHTML = "<ul>" + resultados.join("") + "</ul>";
  } else {
    resultsContainer.innerHTML = "<p>Nenhum resultado encontrado.</p>";
  }
}

const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
  realizarPesquisa();
});
