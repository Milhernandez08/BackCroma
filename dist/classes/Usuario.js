"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const login = (request, response) => {
    const { correo, contrasena } = request.body;
    if (correo && contrasena) {
        connection_1.pool.query('SELECT * FROM usuario WHERE correo = $1 AND contrasena = $2', [correo, contrasena], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json(results.rows);
        });
    }
    else {
        response.status(200).json("se requiere: correo, contrasena");
    }
};
/* INICIO PARA CREAR USUARIO */
const crear = (request, response) => {
    const { nombre, ape_pat, ape_mat, correo, rol, contrasena } = request.body;
    if (nombre && ape_pat && ape_mat && correo && rol && contrasena) {
        connection_1.pool.query('INSERT INTO usuario(nombre, ape_pat, ape_mat, correo, rol, contrasena) VALUES($1, $2, $3, $4, $5, $6)', [nombre, ape_pat, ape_mat, correo, rol, contrasena], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Creado con Exito");
        });
    }
    else {
        response.status(200).json("se requiere nombre, ape_pat, ape_mat, correo, rol, contrasena");
    }
};
/* FIN PARA CREAR USUARIO */
/* INICIO PARA OBTENER USUARIOS */
const todos = (request, response) => {
    connection_1.pool.query('SELECT * FROM usuario', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const porId = (request, response) => {
    const id = parseInt(request.params.id);
    connection_1.pool.query('SELECT * FROM usuario WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const porNombre = (request, response) => {
    const nombre = request.params.nombre;
    connection_1.pool.query('SELECT * FROM usuario WHERE nombre=$1', [nombre], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const porRol = (request, response) => {
    const rol = request.params.rol;
    connection_1.pool.query('SELECT * FROM usuario WHERE rol=$1', [rol], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const porNombreYRol = (request, response) => {
    const nombre = request.params.nombre;
    const rol = request.params.rol;
    connection_1.pool.query('SELECT * FROM usuario WHERE nombre=$1 AND rol=$2', [nombre, rol], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const informacionTotal = (request, response) => {
    const id = parseInt(request.params.id);
    console.log(id);
    connection_1.pool.query('SELECT * FROM usuario u INNER JOIN lote l ON u.id = l.userid INNER JOIN muestra m ON l.id = m.id_lote INNER JOIN croma_nn c ON m.id = c.id_muestra WHERE u.id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
/* FIN PARA OBTENER USUARIOS */
/* INICIO PARA EDITAR USUARIOS */
const editar = (request, response) => {
    const id = parseInt(request.params.id);
    const { nombre, ape_pat, ape_mat, correo, rol, contrasena } = request.body;
    if (nombre && ape_pat && ape_mat && correo && rol && contrasena) {
        connection_1.pool.query('UPDATE usuario SET nombre=$1, ape_pat=$2, ape_mat=$3, correo=$4, rol=$5, contrasena=$6 WHERE id=$7', [nombre, ape_pat, ape_mat, correo, rol, contrasena, id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Actualizado");
        });
    }
    else {
        response.status(200).json("Se requiere nombre, ape_pat, ape_mat, correo, rol, contrasena");
    }
};
/* FIN PARA EDITAR USUARIOS */
/* INICIO PARA ELIMINAR USUARIOS */
const eliminar = (request, response) => {
    const id = parseInt(request.params.id);
    connection_1.pool.query('DELETE FROM usuario WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json("Se Elimino el Usuario Correctamente");
    });
};
/* FIN PARA ELIMINAR USUARIOS */
module.exports = {
    login,
    crear,
    todos,
    porId,
    porNombre,
    porRol,
    porNombreYRol,
    informacionTotal,
    editar,
    eliminar
};
