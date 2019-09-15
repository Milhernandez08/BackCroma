"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const todos = (request, response) => {
    connection_1.pool.query('SELECT * FROM usuario', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const todosActivos = (request, response) => {
    connection_1.pool.query('SELECT * FROM usuario WHERE activo=1 AND eliminado=0', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const todosInActivos = (request, response) => {
    connection_1.pool.query('SELECT * FROM usuario WHERE activo=0 AND eliminado=0', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const todosEliminados = (request, response) => {
    connection_1.pool.query('SELECT * FROM usuario WHERE eliminado=1', (error, results) => {
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
    connection_1.pool.query('SELECT * FROM usuario WHERE nombre=$1 AND rol=$2 AND ', [nombre, rol], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const editar = (request, response) => {
    const id = parseInt(request.params.id);
    const { img_perfil, nombre, ape_pat, ape_mat, correo, contrasena, id_pais, id_estado, id_municipio, direccion, telefono, rol, id_lider, activo, eliminado } = request.body;
    if (img_perfil && nombre && ape_pat && ape_mat && correo && contrasena && id_pais && id_estado && id_municipio && direccion && telefono && rol && id_lider && activo && eliminado) {
        connection_1.pool.query('UPDATE usuario SET img_perfil=$1, nombre=$2, ape_pat=$3, ape_mat=$4, correo=$5, contrasena=$6, id_pais=$7, id_estado=$8, id_municipio=$9, direccion=$10, telefono=$11, rol=$12, id_lider=$13, activo=$14, eliminado=$15 WHERE id=$7', [img_perfil, nombre, ape_pat, ape_mat, correo, contrasena, id_pais, id_estado, id_municipio, direccion, telefono, rol, id_lider, activo, eliminado, id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Actualizado");
        });
    }
    else {
        response.status(200).json("Se requiere img_perfil, nombre, ape_pat, ape_mat, correo, contrasena, id_pais, id_estado, id_municipio, direccion, telefono, rol, id_lider, activo, eliminado");
    }
};
const eliminar = (request, response) => {
    const id = parseInt(request.params.id);
    connection_1.pool.query('UPDATE usuario SET activo=0, eliminado=1 WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json("Se Elimino el Usuario Correctamente");
    });
};
module.exports = {
    todos,
    todosActivos,
    todosInActivos,
    todosEliminados,
    porId,
    porNombre,
    porRol,
    porNombreYRol,
    editar,
    eliminar
};
