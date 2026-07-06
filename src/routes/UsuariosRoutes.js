const express = require("express");
const router = express.Router();

const {
  registrarUsuario,
  obtenerPerfilUsuario,
} = require("../controllers/UsuariosControllers");

router.post("/registro", registrarUsuario);
router.get("/perfil/:id", obtenerPerfilUsuario);

module.exports = router;