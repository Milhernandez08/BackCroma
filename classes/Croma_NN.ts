import { pool } from "./connection";

/* INICIO PARA CREAR CROMA */
const crear = (request, response) => {
    const { id_muestra, ind_oxg, ind_mat_org, ind_trans_sust, ind_n_elem, ind_romp, ind_mat_viva, ind_bio, ind_pro_n } = request.body;

    if (id_muestra && ind_oxg && ind_mat_org && ind_trans_sust && ind_n_elem && ind_romp && ind_mat_viva && ind_bio && ind_pro_n) {
        pool.query('INSERT INTO croma_nn(id_muestra, ind_oxg, ind_mat_org, ind_trans_sust, ind_n_elem, ind_romp, ind_mat_viva, ind_bio, ind_pro_n) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)',
        [id_muestra, ind_oxg, ind_mat_org, ind_trans_sust, ind_n_elem, ind_romp, ind_mat_viva, ind_bio, ind_pro_n], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("croma Creado con Exito");
        });
    }
    else {
        response.status(200).json("se requiere id_muestra, ind_oxg, ind_mat_org, ind_trans_sust, ind_n_elem, ind_romp, ind_mat_viva, ind_bio, ind_pro_n");
    }
}
/* FIN PARA CREAR CROMA */

/* INICIO PARA OBTENER CROMA */
const todos = (request, response) => {
    pool.query('SELECT * FROM croma_nn', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const porId = (request, response) => {
    const id = parseInt(request.params.id);
    
    pool.query('SELECT * FROM croma_nn WHERE id=$1', [id], (error, results) => {
        if (error){
            throw error;
        }
        response.status(200).json(results.rows);
    });
}
/* FIN PARA OBTENER CROMA */

/* INICIO PARA EDITAR CROMA */
const editar = (request, response) => {
    const id = parseInt(request.params.id);
    const { ind_oxg, ind_mat_org, ind_trans_sust, ind_n_elem, ind_romp, ind_mat_viva, ind_bio, ind_pro_n } = request.body;

    if (ind_oxg && ind_mat_org && ind_trans_sust && ind_n_elem && ind_romp && ind_mat_viva && ind_bio && ind_pro_n) {
        pool.query('UPDATE croma_nn SET ind_oxg=$1, ind_mat_org=$2, ind_trans_sust=$3, ind_n_elem=$4, ind_romp=$5, ind_mat_viva=$6, ind_bio=$7, ind_pro_n=$8 WHERE id=$9',
        [ind_oxg, ind_mat_org, ind_trans_sust, ind_n_elem, ind_romp, ind_mat_viva, ind_bio, ind_pro_n, id], (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).json("Croma Actualizado")
        });
    }
    else {
        response.status(200).json("Se requiere ind_oxg, ind_mat_org, ind_trans_sust, ind_n_elem, ind_romp, ind_mat_viva, ind_bio, ind_pro_n")
    }
}
/* FIN PARA EDITAR CROMA */

/* INICIO PARA ELIMINAR CROMA */
const eliminar = (request, response) => {
    const id = parseInt(request.params.id);

    pool.query('DELETE FROM croma_nn WHERE id=$1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json("Se Elimino el croma Correctamente");
    });
}
/* FIN PARA ELIMINAR CROMA */
module.exports = {
    crear,
    todos,
    porId,
    editar,
    eliminar
}