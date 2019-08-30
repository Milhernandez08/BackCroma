import { Router } from 'express';

const usuario = require('../classes/Usuario');
const lote = require('../classes/Lote');
const muestra = require('../classes/Muestra');
const croma = require('../classes/Croma_NN');

const router = Router();

/* USUARIO */
router.post("/login", usuario.login);
router.post('/usuario/nuevo', usuario.crear);
router.get('/usuario/todos', usuario.todos);
router.get('/usuario/:id', usuario.porId);
router.get('/usuario/nombre/:nombre', usuario.porNombre);
router.get('/usuario/rol/:rol', usuario.porRol); /* Admin = 1, Experto = 2, U_Rep = 3, U_Final = 4 */
router.get('/usuario/nombre-y-rol/:nombre/:rol', usuario.porNombreYRol);
router.get('/usuario/informacion/:id', usuario.informacionTotal);
router.put('/usuario/:id', usuario.editar);
router.delete('/usuario/:id', usuario.eliminar);

/* LOTE */
router.post('/lote/nuevo', lote.crear);
router.get('/lote/todos', lote.todos);
router.get('/lote/:id', lote.porId);
router.put('/lote/:id', lote.editar);
router.delete('/lote/:id', lote.eliminar);

/* MUESTRA */
router.post('/muestra/nuevo', muestra.crear);
router.get('/muestra/todos', muestra.todos);
router.get('/muestra/:id', muestra.porId);
router.put('/muestra/:id', muestra.editar);
router.delete('/muestra/:id', muestra.eliminar);

/* CROMA */
router.post('/croma/nuevo', croma.crear);
router.get('/croma/todos', croma.todos);
router.get('/croma/:id', croma.porId);
router.put('/croma/:id', croma.editar);
router.delete('/croma/:id', croma.eliminar);

export default router;