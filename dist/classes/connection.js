"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pool = require('pg').Pool;
exports.pool = new Pool({
    user: 'milh',
    password: 'admin',
    host: 'localhost',
    database: 'cromatografia',
    port: 5432,
});
