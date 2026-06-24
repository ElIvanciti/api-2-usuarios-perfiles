const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true,
        unique: true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);