async function obterProdutos() {
  console.log('[Server] gerando dados no servidor')
  const response = await fetch("http://localhost:3000/api/produtos", {
    cache: "no-store",
  });
  return response.json();
}

export default async function Dinamico2() {
  const produtos = await obterProdutos();
  return (
    <div>
      <h1>Dinâmico #02</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.id} - {produto.nome} tem preço de R${produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}
