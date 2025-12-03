const express = require("express");
const { listar, obter, criar, atualizar, remover } = require("../controllers/filmeController");
const router = express.Router();

router.get("/", listar);
router.get("/:id", obter);
router.post("/", criar);
router.put("/:id", atualizar);
router.delete("/:id", remover);

module.exports = router;