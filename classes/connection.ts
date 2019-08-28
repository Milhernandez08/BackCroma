const Pool = require('pg').Pool

export const pool = new Pool({
    user: 'milh',
    password: 'admin',
    host: 'localhost',
    database: 'cromatografia',
    port: 5432,
});