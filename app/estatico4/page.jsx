async function obterProdutos() {
  const response = await fetch("http://localhost:3000/api/produtos");
  const produtos = await response.json();
  return produtos;
}

export default async function Estatico4() {
  const produtos = await obterProdutos();

  return (
    <div>
      <h1>Estático #04</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>{produto.nome} tem preço de R${produto.preco}</li>
        ))}
      </ul>
    </div>
  );
}
