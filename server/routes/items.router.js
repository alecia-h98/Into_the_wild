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


//getting a specific item from the specified category list
// router.get('/:itemId', (req, res) => {
//     const query = `
//     SELECT "id", "name", "description", "found", "season", "uses", "photo", "nutrition", "shelf_life", "harvesting", "imposters"    FROM "item"
//     WHERE "id" = $1;
//     `;
//     pool.query(query,[req.params.itemId])
//     .then(result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('Error:', err);
//       res.sendStatus(500);
//     })
// });

//UPDATE THESE ONCE THE NEW TABLE IS INCLUDED INTO SQL.


//DONE
//GRABBING THE FAVORITES LIST
//MAKE SURE IT IS PULLING THE LOG IN USER'S FAVORITE ITEMS
router.get('/favorites', (req, res) => {
    const query = `
SELECT "user_item"."is_favorited", "user_item"."user_id", "user_item"."item_id", "item"."name", "user_item"."id"
from "item"
join "user_item" on "item"."id" = "user_item"."item_id"
JOIN "user" on "user_item"."user_id" = "user"."id"
WHERE "user_item"."user_id" = $1 AND "user_item"."is_favorited" = TRUE;
    `;
    pool.query(query,[req.user.id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('Error:', err);
      res.sendStatus(500);
    })
});

// PUT ROUTE TO SWITCH AN ITEM'S FAVORITE KEY
// MAKE SURE TO INCLUDE THE REQ.USER WHEN WRITING THIS
router.put('/favorites/:favId', rejectUnauthenticated, (req, res) => {
    const sqlText = `
    UPDATE "user_item" 
SET "is_favorited" = FALSE 
WHERE "is_favorited" = TRUE 
AND "user_item"."id" = $1;
    `;
    pool.query(sqlText, [req.params.favId]).then((result) => {
        res.send(result.rows);
    }).catch(err => {
        res.sendStatus(500);
        console.error(err);
    })
});

module.exports = router;