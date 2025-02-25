const express = require('express');
const pool = require('../modules/pool');
//const axios = 

const router = express.Router();

//getting all items by catagory - main category page
router.get('/', (req, res) => {
    const query = `
    SELECT * FROM "item"
    ORDER BY "category";
    `;
    pool.query(query)
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR: items not selected based off of their catagory(backend)', err);
        res.sendStatus(500);
    })
});

//
router.get('/:category', (req,res) => {
    const query = `
    SELECT "name", "description", "is_favorite", "found", "season", "uses", "photo", "nutrition", "shelf_life", "harvesting", "imposters", "category"
    FROM "item"
    WHERE "category" = $1;
    `;
    pool.query(query,[req.params.category])
        .then(result => {
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR GRABBING CATEGORY', err);
            res.sendStatus(500);
        })
})

//getting a specific item description
router.get('/')


module.exports = router;