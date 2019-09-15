"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const crear = (request, response) => {
    const { id_usuario, pais, estado, municipio, nombre } = request.body;
    if (id_usuario && pais && estado && municipio && nombre) {
        connection_1.pool.query('INSERT INTO lote(id_usuario, pais, estado, municipio, nombre) VALUES($1, $2, $3, $4)', [id_usuario, pais, estado, municipio, nombre], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("lote Creado con Exito");
        });
    }
    else {
        response.status(200).json("se requiere id_usuario, pais, estado, municipio, nombre");
    }
};
const todos = (request, response) => {
    connection_1.pool.query('SELECT * FROM lote', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const porId = (request, response) => {
    const id = parseInt(request.params.id);
    connection_1.pool.query('SELECT * FROM lote WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};
const editar = (request, response) => {
    const id = parseInt(request.params.id);
    const { pais, estado, municipio, nombre_lugar } = request.body;
    if (pais && estado && municipio && nombre_lugar) {
        connection_1.pool.query('UPDATE lote SET pais=$1, estado=$2, municipio=$3, nombre_lugar=$4 WHERE id=$5', [pais, estado, municipio, nombre_lugar, id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Actualizado");
        });
    }
    else {
        response.status(200).json("Se requiere pais, estado, municipio, nombre_lugar");
    }
};
const eliminar = (request, response) => {
    const id = parseInt(request.params.id);
    connection_1.pool.query('DELETE FROM lote WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json("Se Elimino el lote Correctamente");
    });
};
module.exports = {
    crear,
    todos,
    porId,
    editar,
    eliminar
};
