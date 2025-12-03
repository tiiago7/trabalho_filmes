import { useEffect, useState } from "react";
import api from "../api";
import FilmeList from "../components/FilmeList";

export default function HomePage() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    api.get("/filmes").then(r => setFilmes(r.data));
  }, []);

  return <FilmeList filmes={filmes} />;
}