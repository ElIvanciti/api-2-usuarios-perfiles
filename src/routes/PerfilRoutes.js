const express = require("express");
const router = express.Router();

const {
  crearPerfil,
  obtenerPerfil,
  actualizarPerfil,
  eliminarPerfil,
} = require("../controllers/PerfilController");

router.post("/", crearPerfil);
router.get("/:id", obtenerPerfil);
router.put("/:id", actualizarPerfil);
router.delete("/:id", eliminarPerfil);

module.exports = router;