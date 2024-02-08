async function obterNumero() {
  console.log("[Server] gerando dados para o componente");
  let numero;
  await fetch("https://...", { cache: "no-cache" })
    .catch(() => {})
    .finally(() => {
      numero = Math.random();
    });
  return numero;
}

export default async function Dinamico1() {
  let numero = await obterNumero();
  return (
    <div>
      <h1>Dinâmico #01</h1>
      <h2>{numero}</h2>
    </div>
  );
}
