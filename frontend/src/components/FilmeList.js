import { useNavigate } from "react-router-dom";
import api from "../api";

export default function FilmeList({ filmes }) {
  const nav = useNavigate();

  function remove(id) {
    api.delete("/filmes/" + id).then(() => nav(0));
  }

  return (
    <ul>
      {filmes.map(f => (
        <li key={f._id}>
          <img src={f.imagemUrl} width="120" />
          <p>{f.titulo}</p>
          <button onClick={() => nav("/editar/" + f._id)}>Editar</button>
          <button onClick={() => remove(f._id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
}