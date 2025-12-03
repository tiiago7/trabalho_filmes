const mongoose = require("mongoose");

const FilmeSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    descricao: { type: String, required: true },
    imagemUrl: { type: String, required: true },
    ano: { type: Number, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Filme", FilmeSchema);