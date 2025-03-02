const express = require('express');
const pool = require('../modules/pool');
const {rejectUnauthenticated} = require('../modules/authentication-middleware');

const router = express.Router();

//DONE
//getting all items
router.get('/', (req, res) => {
    const query = `
    SELECT * FROM "item";
    `;
    pool.query(query)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: cannot render item list', err);
        res.sendStatus(500);
    })
});

//DONE
//getting a specific item from the specified category list
router.get('/:itemId', (req, res) => {
    const query = `
    SELECT "item"."id", "item"."name", "item"."description", "item"."found", "item"."season", "item"."uses", "item"."photo", "item"."nutrition", "item"."shelf_life", "item"."harvesting", "item"."imposters"
    FROM "item"
    WHERE "id" = $1;
    `;
    pool.query(query,[req.params.itemId])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error:', err);
      res.sendStatus(500);
    })
});






module.exports = router;