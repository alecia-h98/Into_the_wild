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

//this does not work.
//DONE
// PUT ROUTE TO SWITCH AN ITEM'S FAVORITE KEY
router.put('/:favId', rejectUnauthenticated, (req, res) => {
    const sqlText = `
    UPDATE "user_item" 
SET "is_favorited" = NOT "is_favorited" 
WHERE "user_item"."id" = $1;
    `;
    pool.query(sqlText, [req.params.favId]).then((result) => {
        res.send(result.rows);
    }).catch(err => {
        res.sendStatus(500);
        console.error(err);
    })
});


// this is a mess. Check it once it is on the frontend
//adding the users's favorites
router.post('/favorites', (req,res) => {
    const query = `
    INSERT INTO "user_item" ("user_id", "item_id")
    VALUES
        ($1, $2);
    `;
    pool.query(query, [req.user.id, req.item.id])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500)
      });
    });
//example post
// router.post('/', (req, res) => {
//     const { description, file_url, file_type } = req.body;
//     const queryText = 'INSERT INTO "uploads" (description, file_url, file_type) VALUES ($1, $2, $3);';
//     pool.query(queryText, [description, file_url, file_type])
//       .then(() => res.sendStatus(201))
//       .catch((err) => {
//         console.log(err);
//         res.sendStatus(500)
//       });
//   });

module.exports = router;