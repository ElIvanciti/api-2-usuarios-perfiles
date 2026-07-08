const express = require("express");
const connectDB = require("./src/models/db");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");
const usuariosRoutes = require("./src/routes/UsuariosRoutes");
const perfilRoutes = require("./src/routes/PerfilRoutes");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(helmet());
app.use("/usuarios", usuariosRoutes);
app.use("/perfiles", perfilRoutes);

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});