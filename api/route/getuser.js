const express = require('express');
const sql = require('mssql');
const config = require('../config');
const router = express.Router();

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => {
        console.error('Database connection failed:', err);
        process.exit(1);
    });

router.get('/getUserList', async (req, res) => {
    try {
        const pool = await poolPromise;
        let request = pool.request();
        const result = await request.query("select * from tbl_users");
        res.json({ msg: "Fetch data success", data: result.recordsets });
        // res.send("Hello World")
    } catch (err) {
        console.error('SQL error:', err);
        res.status(200).json({ error: 'Database error' });
    }
});
module.exports = router;