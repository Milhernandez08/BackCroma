import { pool } from "./connection";

/* INICIO PARA OBTENER USUARIOS */
const todos = (request, response) => {
    pool.query('SELECT * FROM usuario', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const porId = (request, response) => {
    const id = parseInt(request.params.id);
    
    pool.query('SELECT * FROM usuario WHERE id=$1', [id], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const porNombre = (request, response) => {
    const nombre = request.params.nombre;
    
    pool.query('SELECT * FROM usuario WHERE nombre=$1', [nombre], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const porRol = (request, response) => {
    const rol = request.params.rol;
    
    pool.query('SELECT * FROM usuario WHERE rol=$1', [rol], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const porNombreYRol = (request, response) => {
    const nombre = request.params.nombre;
    const rol = request.params.rol;

    pool.query('SELECT * FROM usuario WHERE nombre=$1 AND rol=$2', [nombre,rol], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}
/* FIN PARA OBTENER USUARIOS */

/* INICIO PARA EDITAR USUARIOS */
const editar = (request, response) => {
    const id = parseInt(request.params.id);
    const { nombre, ape_pat, ape_mat, correo, rol, contrasena } = request.body;

    if (nombre && ape_pat && ape_mat && correo && rol && contrasena) {
        pool.query('UPDATE usuario SET nombre=$1, ape_pat=$2, ape_mat=$3, correo=$4, rol=$5, contrasena=$6 WHERE id=$7',
        [nombre, ape_pat, ape_mat, correo, rol, contrasena, id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Actualizado")
        });
    }
    else {
        response.status(200).json("Se requiere nombre, ape_pat, ape_mat, correo, rol, contrasena")
    }
}
/* FIN PARA EDITAR USUARIOS */

/* INICIO PARA ELIMINAR USUARIOS */
const eliminar = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM usuario WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json("Se Elimino el Usuario Correctamente");
    });
}
/* FIN PARA ELIMINAR USUARIOS */
module.exports = {
    todos,
    porId,
    porNombre,
    porRol,
    porNombreYRol,
    editar,
    eliminar
}