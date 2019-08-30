import { pool } from "./connection";

/* INICIO PARA CREAR LOTE */
const crear = (request, response) => {
    const { id_usuario, pais, estado, municipio, nombre } = request.body;

    if (id_usuario && pais && estado && municipio && nombre) {
        pool.query('INSERT INTO lote(id_usuario, pais, estado, municipio, nombre) VALUES($1, $2, $3, $4)',
        [id_usuario, pais, estado, municipio, nombre], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("lote Creado con Exito");
        });
    }
    else {
        response.status(200).json("se requiere id_usuario, pais, estado, municipio, nombre");
    }
}
/* FIN PARA CREAR LOTE */

/* INICIO PARA OBTENER LOTE */
const todos = (request, response) => {
    pool.query('SELECT * FROM lote', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const porId = (request, response) => {
    const id = parseInt(request.params.id);
    
    pool.query('SELECT * FROM lote WHERE id=$1', [id], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}
/* FIN PARA OBTENER LOTE */

/* INICIO PARA EDITAR LOTE */
const editar = (request, response) => {
    const id = parseInt(request.params.id);
    const { pais, estado, municipio, nombre_lugar } = request.body;

    if (pais && estado && municipio && nombre_lugar) {
        pool.query('UPDATE lote SET pais=$1, estado=$2, municipio=$3, nombre_lugar=$4 WHERE id=$5',
        [pais, estado, municipio, nombre_lugar, id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Actualizado")
        });
    }
    else {
        response.status(200).json("Se requiere pais, estado, municipio, nombre_lugar")
    }
}
/* FIN PARA EDITAR LOTE */

/* INICIO PARA ELIMINAR LOTE */
const eliminar = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM lote WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json("Se Elimino el lote Correctamente");
    });
}
/* FIN PARA ELIMINAR LOTE */
module.exports = {
    crear,
    todos,
    porId,
    editar,
    eliminar
}