const Filme = require("../models/Filme");

async function listar(req, res) {
  const filmes = await Filme.find().sort({ createdAt: -1 });
  res.json(filmes);
}

async function obter(req, res) {
  const filme = await Filme.findById(req.params.id);
  if (!filme) return res.status(404).json({});
  res.json(filme);
}

async function criar(req, res) {
  const filme = await Filme.create(req.body);
  res.status(201).json(filme);
}

async function atualizar(req, res) {
  const filme = await Filme.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!filme) return res.status(404).json({});
  res.json(filme);
}

async function remover(req, res) {
  await Filme.findByIdAndDelete(req.params.id);
  res.json({});
}

module.exports = { listar, obter, criar, atualizar, remover };