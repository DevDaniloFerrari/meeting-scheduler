async function obterRandomNumber() {
  let random;
    await fetch("https://...", { next: { revalidate: 7 } })
    .catch(() => {})
    .finally(() => {
      random = Math.random();
    });
  return random;
}

export default async function Estatico3() {
  const numero = await obterRandomNumber();
  return (
    <div>
      <h1>Estático #03</h1>
      <h2>{numero}</h2>
    </div>
  );
}
