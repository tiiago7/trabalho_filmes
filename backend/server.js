const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const filmeRoutes = require("./src/routes/filmeRoutes");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/trabalho_filmes";
const port = process.env.PORT || 5000;

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("MongoDB conectado");
  })
  .catch(error => {
    console.error("Erro ao conectar no MongoDB", error);
  });

app.use("/api/filmes", filmeRoutes);

app.listen(port, () => {
  console.log(`Servidor backend rodando na porta ${port}`);
});
