const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//getting all categories - main category page
router.get('/', (req, res) => {
    const query = `
    SELECT * FROM "category";
    `;
    pool.query(query)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: cannot render item list', err);
        res.sendStatus(500);
    })
})

module.exports = router;