const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const helmet = require("helmet");

dotenv.config();

const app = express();

app.use(express.json());
app.use(helmet());

app.get("/", (req, res) => {
    res.send("Hello World");
});

const PORT = process.env.PORT || 5100;

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});