import { Router } from 'express';
import { app } from '../classes/archivos';

const sesion = require('../classes/sesion');
const pais = require('../classes/paises');
const estados = require('../classes/estados');
const municipios = require('../classes/municipios');
const usuario = require('../classes/Usuario');
const lote = require('../classes/Lote');
const muestra = require('../classes/Muestra');
const croma = require('../classes/Croma_NN');

const router = Router();

router.get('/pais/todos', pais.todos);
router.get('/pais/:id', pais.porId);

router.get('/estado/todos/:id_pais', estados.todos);
router.get('/estado/:id', estados.porId);

router.get('/municipios/todos/:id_estado', municipios.todos);
router.get('/municipios/:id', municipios.porId);

/* USUARIO */
router.post("/login", sesion.login);
router.post('/resgistrar', sesion.crear);
router.get('/usuario/todos', usuario.todos);
router.get('/usuario/Activos', usuario.todosActivos);
router.get('/usuario/InActivos', usuario.todosInActivos);
router.get('/usuario/Eliminados', usuario.todosEliminados);
router.get('/usuario/:id', usuario.porId);
router.get('/usuario/lider/:id', usuario.porLider);
router.get('/usuario/nombre/:nombre', usuario.porNombre);
router.get('/usuario/rol/:rol', usuario.porRol);  //Admin = 1, Experto = 2, U_Rep = 3, U_Final = 4 
router.get('/usuario/nombre-y-rol/:nombre/:rol', usuario.porNombreYRol);
router.put('/usuario/:id', usuario.editar);
router.delete('/usuario/:id', usuario.eliminar);

/* LOTE */
router.post("/lote/crear", lote.crear);
router.get("/lote/todos", lote.todos);
router.get("/lote/:id", lote.porId);
router.put("/lote/:id", lote.editar);
router.delete("/lote/:id", lote.eliminar);

/* MUESTRA */
router.post("/muestra/crear", muestra.crear);
router.get("/muestra/todos", muestra.todos);
router.get("/muestra/:id", muestra.porId);
router.put("/muestra/:id", muestra.editar);
router.delete("/muestra/:id", muestra.eliminar);

/* CROMA_NN */
router.post("/croma/crear", croma.crear);
router.get("/croma/todos", croma.todos);
router.get("/croma/:id", croma.porId);
router.put("/croma/:id", croma.editar);
router.delete("/croma/:id", croma.eliminar);

/* SUBIR ARCHIVOS */
app.post('/subir', (req, res) =>{
    let EDFile = req.files.file
    EDFile.mv(`../imagenes/${EDFile.name}`,err => {
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'Imagen Guardad' })
    });
});


export default router;