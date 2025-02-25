const express = require('express');
const pool = require('../modules/pool');
//const axios = 

const router = express.Router();


//FORM POST
router.post('/', (req, res) => {
    let sqlText = `INSERT INTO "found" ("item_id","found_date", "location", "description", "user_id", ) VALUES ($1, $2, $3, $4, $5);`
    pool.query(sqlText, [req.body.item_id, req.body.found_date, req.body.location, req.body.description, req.body.photo, req.user.id])
    .then((results) => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});



module.exports = router;