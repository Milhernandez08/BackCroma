import { pool } from "./connection";

/* INICIO PARA CREAR LOTE */
const crear = (request, response) => {
    const { pais, estado, municipio, nombre } = request.body;

    if (pais && estado && municipio && nombre) {
        pool.query('INSERT INTO usuario(pais, estado, municipio, nombre) VALUES($1, $2, $3, $4)',
        [pais, estado, municipio, nombre], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Creado con Exito");
        });
    }
    else {
        response.status(200).json("se requiere pais, estado, municipio, nombre");
    }
}
/* FIN PARA CREAR LOTE */

module.exports = {
    crear
}