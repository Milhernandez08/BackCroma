import { pool } from "./connection";

const todos = (request, response) => {
    pool.query('SELECT * FROM usuario', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const todosActivos = (request, response) => {
    pool.query('SELECT * FROM usuario WHERE activo=1 AND eliminado=0', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const todosInActivos = (request, response) => {
    pool.query('SELECT * FROM usuario WHERE activo=0 AND eliminado=0', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const todosEliminados = (request, response) => {
    pool.query('SELECT * FROM usuario WHERE eliminado=1', (error, results) => {
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

    pool.query('SELECT * FROM usuario WHERE nombre=$1 AND rol=$2 AND ', [nombre,rol], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}


const editar = (request, response) => {
    const id = parseInt(request.params.id);
    const { img_perfil, nombre, ape_pat, ape_mat, correo, contrasena, id_pais, id_estado, id_municipio, direccion, telefono, rol, id_lider, activo, eliminado } = request.body;

    if (img_perfil && nombre && ape_pat && ape_mat && correo && contrasena && id_pais && id_estado && id_municipio && direccion && telefono && rol && id_lider && activo && eliminado) {
        pool.query('UPDATE usuario SET img_perfil=$1, nombre=$2, ape_pat=$3, ape_mat=$4, correo=$5, contrasena=$6, id_pais=$7, id_estado=$8, id_municipio=$9, direccion=$10, telefono=$11, rol=$12, id_lider=$13, activo=$14, eliminado=$15 WHERE id=$7',
        [img_perfil, nombre, ape_pat, ape_mat, correo, contrasena, id_pais, id_estado, id_municipio, direccion, telefono, rol, id_lider, activo, eliminado, id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Usuario Actualizado")
        });
    }
    else {
        response.status(200).json("Se requiere img_perfil, nombre, ape_pat, ape_mat, correo, contrasena, id_pais, id_estado, id_municipio, direccion, telefono, rol, id_lider, activo, eliminado")
    }
}


const eliminar = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('UPDATE usuario SET activo=0, eliminado=1 WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json("Se Elimino el Usuario Correctamente");
    });
}


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
}