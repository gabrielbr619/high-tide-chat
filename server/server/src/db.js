const { Client, Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '123',
    host: 'localhost',
    port: '5432',
    database: 'postgres',
  });

(async () => {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM users');
    console.log(result.rows);
    client.release();
})

module.exports = pool
