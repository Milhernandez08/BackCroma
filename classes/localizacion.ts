import { pool } from "./connection";

//id_user, id_lote, nombre, latitud, longitud, eliminado

const crear = (request, response) => {
    const { id_user, id_lote, nombre, latitud, longitud, eliminado } = request.body;

    if (id_user && id_lote && nombre && latitud && longitud && eliminado) {
        pool.query('INSERT INTO localizacion(id_user, id_lote, nombre, latitud, longitud, eliminado) VALUES($1, $2, $3, $4, $5, $6)',
        [id_user, id_lote, nombre, latitud, longitud, eliminado], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("lote Creado con Exito");
        });
    }
    else {
        response.status(200).json("se requiere id_user, id_lote, nombre, latitud, longitud, eliminado");
    }
}

const todos = (request, response) => {
    pool.query('SELECT * FROM localizacion WHERE eliminado=0', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const porId = (request, response) => {
    const id = parseInt(request.params.id);
    
    pool.query('SELECT * FROM localizacion WHERE id=$1', [id], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

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

