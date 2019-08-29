const Pool = require('pg').Pool

export const pool = new Pool({
    user: 'admin',
    password: 'admin',
    host: 'localhost',
    database: 'cromatografia',
    port: 5432,
});