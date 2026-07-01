const Perfil = require("../models/Perfil");

const crearPerfil = async (req, res) => {
  try {
    const { usuario, descripcion } = req.body;

    const perfil = await Perfil.create({
      usuario,
      descripcion,
    });

    res.status(201).json({
      mensaje: "Perfil creado correctamente",
      perfil,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al crear el perfil",
    });
  }
};

const obtenerPerfil = async (req, res) => {
  try {
    const perfil = await Perfil.findById(req.params.id).populate("usuario", "nombre correo");

    if (!perfil) {
      return res.status(404).json({
        mensaje: "Perfil no encontrado",
      });
    }

    res.json(perfil);
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al obtener el perfil",
    });
  }
};

const actualizarPerfil = async (req, res) => {
  try {
    const { descripcion } = req.body;

    const perfil = await Perfil.findByIdAndUpdate(
      req.params.id,
      { descripcion },
      { new: true }
    );

    if (!perfil) {
      return res.status(404).json({
        mensaje: "Perfil no encontrado",
      });
    }

    res.json({
      mensaje: "Perfil actualizado correctamente",
      perfil,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al actualizar el perfil",
    });
  }
};

const eliminarPerfil = async (req, res) => {
  try {
    const perfil = await Perfil.findByIdAndDelete(req.params.id);

    if (!perfil) {
      return res.status(404).json({
        mensaje: "Perfil no encontrado",
      });
    }

    res.json({
      mensaje: "Perfil eliminado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "Error al eliminar el perfil",
    });
  }
};

module.exports = {
  crearPerfil,
  obtenerPerfil,
  actualizarPerfil,
  eliminarPerfil,
};