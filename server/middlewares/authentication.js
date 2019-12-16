const jwt = require('jsonwebtoken');

//===============================
//verificar token
//================

let verificaToken = (req, res, next) => {

    let token = req.get('Authorization');
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'toekn no valido'
                }
            });
        }

        req.usuario = decoded.usuario
        next();
    });

};

//===============================
//verificar rol
//================

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;
    if (usuario.role === 'ADMIN_ROLE') {
        next();
        return;
    } else {

        return res.json({
            ok: false,
            err: {
                message: 'el usuario no es administrador'
            }
        })
    }

};

module.exports = { verificaToken, verificaAdmin_Role }