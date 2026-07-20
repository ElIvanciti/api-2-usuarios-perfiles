const jwt = require ("jsonwebtoken");

const generateToken = () => {
    return jwt.sign(
        {
           application: "api-2-usuarios-perfiles" 
        },
        process.env.JWT_SECRET,
    );
};

module.exports = generateToken;