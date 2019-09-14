"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sesion = require('../classes/sesion');
const pais = require('../classes/paises');
const estados = require('../classes/estados');
const municipios = require('../classes/municipios');
const usuario = require('../classes/Usuario');
const lote = require('../classes/Lote');
const muestra = require('../classes/Muestra');
const croma = require('../classes/Croma_NN');
const router = express_1.Router();
router.get('/pais/todos', pais.todos);
router.get('/pais/:id', pais.porId);
router.get('/estado/todos/:id_pais', estados.todos);
router.get('/estado/:id', estados.porId);
router.get('/municipios/todos/:id_estado', municipios.todos);
router.get('/municipios/:id', municipios.porId);
/* USUARIO */
router.get('/usuario/todos', usuario.todos);
router.get('/usuario/:id', usuario.porId);
router.get('/usuario/nombre/:nombre', usuario.porNombre);
router.get('/usuario/rol/:rol', usuario.porRol); /* Admin = 1, Experto = 2, U_Rep = 3, U_Final = 4 */
router.get('/usuario/nombre-y-rol/:nombre/:rol', usuario.porNombreYRol);
router.get('/usuario/informacion/:id', usuario.informacionTotal);
router.post("/login", sesion.login);
router.post('/resgistrar', sesion.crear);
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
exports.default = router;
