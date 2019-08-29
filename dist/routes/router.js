"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario = require('../classes/Usuario');
const lote = require('../classes/Lote');
const router = express_1.Router();
/* USUARIO */
router.post('/usuario/nuevo', usuario.crear);
router.get('/usuario/todos', usuario.todos);
router.get('/usuario/por/:id', usuario.porId);
router.get('/usuario/por/nombre', usuario.porNombre);
router.get('/usuario/por/rol', usuario.porRol); /* Admin = 1, Experto = 2, U_Rep = 3, U_Final = 4 */
router.get('/usuario/por/nombreyrol', usuario.porNombreYRol);
router.put('/usuario/:id', usuario.editar);
router.delete('/usuario/:id', usuario.eliminar);
/* LOTE */
router.post('/lote/nuevo', lote.crear);
exports.default = router;
