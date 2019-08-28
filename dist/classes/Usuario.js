"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
/* INICIO PARA CREAR USUARIO */
const crear = (request, response) => {
    const { nombre, ape_pat, ape_mat, correo, rol } = request.body;
    if (nombre && ape_pat && ape_mat && correo && rol) {
        connection_1.pool.query('INSERT INTO usuario(nombre, ape_pat, ape_mat, correo, rol) VALUES($1, $2, $3, $4, $5)', [nombre, ape_pat, ape_mat, correo, rol], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Creado con Exito");
        });
    }
    else {
        response.status(200).json("se requiere nombre, ape_pat, ape_mat, correo, rol");
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
    const { nombre } = request.body;
    connection_1.pool.query('SELECT * FROM usuario WHERE nombre=$1', [nombre], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const porRol = (request, response) => {
    const { rol } = request.body;
    connection_1.pool.query('SELECT * FROM usuario WHERE rol=$1', [rol], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const porNombreYRol = (request, response) => {
    const { nombre, rol } = request.body;
    connection_1.pool.query('SELECT * FROM usuario WHERE nombre=$1 AND rol=$2', [nombre, rol], (error, results) => {
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
    const { nombre, ape_pat, ape_mat, correo, rol } = request.body;
    if (nombre && ape_pat && ape_mat && correo && rol) {
        connection_1.pool.query('UPDATE usuario SET nombre=$1, ape_pat=$2, ape_mat=$3, correo=$4, rol=$5 WHERE id=$6', [nombre, ape_pat, ape_mat, correo, rol, id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Actualizado");
        });
    }
    else {
        response.status(200).json("Se requiere nombre, ape_pat, ape_mat, correo, rol");
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
    crear,
    todos,
    porId,
    porNombre,
    porRol,
    porNombreYRol,
    editar,
    eliminar
};
