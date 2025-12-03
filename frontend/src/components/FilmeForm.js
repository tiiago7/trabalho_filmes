import { useState, useEffect } from "react";

export default function FilmeForm({ onSubmit, initialValues }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");
  const [ano, setAno] = useState("");

  useEffect(() => {
    if (initialValues) {
      setTitulo(initialValues.titulo);
      setDescricao(initialValues.descricao);
      setImagemUrl(initialValues.imagemUrl);
      setAno(initialValues.ano);
    }
  }, [initialValues]);

  function submit(e) {
    e.preventDefault();
    onSubmit({ titulo, descricao, imagemUrl, ano: Number(ano) });
  }

  return (
    <form onSubmit={submit}>
      <input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
      <textarea placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
      <input placeholder="URL da imagem" value={imagemUrl} onChange={e => setImagemUrl(e.target.value)} />
      <input type="number" placeholder="Ano" value={ano} onChange={e => setAno(e.target.value)} />
      <button type="submit">Salvar</button>
    </form>
  );
}