import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../api";
import FilmeForm from "../components/FilmeForm";

export default function EditFilmePage() {
  const { id } = useParams();
  const nav = useNavigate();
  const [filme, setFilme] = useState(null);

  useEffect(() => {
    api.get("/filmes/" + id).then(r => setFilme(r.data));
  }, [id]);

  function submit(dados) {
    api.put("/filmes/" + id, dados).then(() => nav("/"));
  }

  if (!filme) return null;

  return <FilmeForm onSubmit={submit} initialValues={filme} />;
}