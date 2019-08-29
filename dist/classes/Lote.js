"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
/* INICIO PARA CREAR LOTE */
const crear = (request, response) => {
    const { id_usuario, pais, estado, municipio, nombre } = request.body;
    if (id_usuario && pais && estado && municipio && nombre) {
        connection_1.pool.query('INSERT INTO usuario(id_usuario, pais, estado, municipio, nombre) VALUES($1, $2, $3, $4)', [id_usuario, pais, estado, municipio, nombre], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Creado con Exito");
        });
    }
    else {
        response.status(200).json("se requiere id_usuario, pais, estado, municipio, nombre");
    }
};
/* FIN PARA CREAR LOTE */
module.exports = {
    crear
};
