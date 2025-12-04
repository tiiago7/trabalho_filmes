import api from "../api";
import { useNavigate } from "react-router-dom";
import FilmeForm from "../components/FilmeForm";

export default function NewFilmePage() {
  const navigate = useNavigate();

  function submit(dados) {
    api.post("/filmes", novofilme).then(() => navigate("/"));
  }

  return <FilmeForm onSubmit={submit} />;
}
