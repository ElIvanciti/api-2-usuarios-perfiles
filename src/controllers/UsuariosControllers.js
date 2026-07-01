const bcrypt = require("bcryptjs");
const Usuario = require("../models/Usuarios");

const registrarUsuario = async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;

    const passwordSeguro =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{10,}$/;

    if (!passwordSeguro.test(password)) {
      return res.status(400).json({
        mensaje:
          "La contraseña debe tener mínimo 10 caracteres, mayúscula, minúscula, número y carácter especial",
      });
    }

    const existeUsuario = await Usuario.findOne({ correo });

    if (existeUsuario) {
      return res.status(400).json({
        mensaje: "No se pudo completar el registro",
      });
    }

    const salt = await bcrypt.genSalt(12);
    const passwordHasheado = await bcrypt.hash(password, salt);

    const usuario = await Usuario.create({
      nombre,
      correo,
      password: passwordHasheado,
    });

    res.status(201).json({
      mensaje: "Usuario registrado correctamente",
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        correo: usuario.correo,
      },
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al registrar usuario",
    });
  }
};

const obtenerPerfilUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findById(req.params.id);

    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado",
      });
    }

    res.json({
      id: usuario._id,
      nombre: usuario.nombre,
      correo: usuario.correo,
      creado: usuario.createdAt,
      actualizado: usuario.updatedAt,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener perfil",
    });
  }
};

module.exports = {
  registrarUsuario,
  obtenerPerfilUsuario,
};