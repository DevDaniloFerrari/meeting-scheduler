export async function getStaticPaths() {
  const response = await fetch("http://localhost:3000/api/alunos/tutores");
  const ids = await response.json();

  const paths = ids.map((id) => {
    return { params: { id: `${id}` } };
  });

  return {
    fallback: false,
    paths: paths,
  };
}

async function obterAlunoPorId(id) {
  const response = await fetch(`http://localhost:3000/api/alunos/${id}`);
  return await response.json();
}

export default async function AlunoPorId(props) {
  const id = props.params.id;
  const aluno = await obterAlunoPorId(id);
  return (
    <div>
      <h1>Detalhes do Aluno</h1>
      <ul>
        <li>{aluno?.id}</li>
        <li>{aluno?.nome}</li>
        <li>{aluno?.email}</li>
      </ul>
    </div>
  );
}
