import { useState, useEffect } from "react";

export default function FilmeForm({ onSubmit, valoresIniciais }) {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [urlImagem, setUrlImagem] = useState("");
  const [ano, setAno] = useState("");

  useEffect(() => {
    if (valoresIniciais) {
      setTitulo(valoresIniciais.titulo);
      setDescricao(valoresIniciais.descricao);
      setUrlImagem(valoresIniciais.imagem);
      setAno(valoresIniciais.ano);
    }
  }, [valoresIniciais]);

  function enviar(e) {
    e.preventDefault();
    onSubmit({
      titulo,
      descricao,
      imagem: urlImagem,
      ano: Number(ano)
    });
  }

  return (
    <form onSubmit={enviar}>
      <input placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)} />
      <input placeholder="Descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
      <input placeholder="URL da imagem" value={urlImagem} onChange={e => setUrlImagem(e.target.value)} />
      <input type="number" placeholder="Ano" value={ano} onChange={e => setAno(e.target.value)} />
      <button type="submit">Salvar</button>
    </form>
  );
}
