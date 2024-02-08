export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      { params: { id: "107" } },
      { params: { id: "203" } },
      { params: { id: "1345" } },
    ],
  };
}

async function obterAlunoPorId(id) {
  const response = await fetch(`http://localhost:3000/api/alunos/${id}`);
  const alunos = await response.json();
  return alunos[0]
}

export default async function AlunoPorId(props) {
  const id = props.params.id;
  const aluno = await obterAlunoPorId(id);
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      <ul>
        <li>{aluno.id}</li>
        <li>{aluno.nome}</li>
        <li>{aluno.email}</li>
      </ul>
    </div>
  );
}
