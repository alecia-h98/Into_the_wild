const express = require('express');
const pool = require('../modules/pool');
//const axios = 
const rejectUnauthenticated = require('../modules/authentication-middleware');
const router = express.Router();


//FORM POST
//NEEDS WORK!!!!!
// router.post('/', (req, res) => {
//     let sqlText = `INSERT INTO "found" ("item_id","found_date", "location", "description", "user_id", ) VALUES ($1, $2, $3, $4, $5);`
//     pool.query(sqlText, [req.body.item_id, req.body.found_date, req.body.location, req.body.description, req.body.photo, req.user.id])
//     .then((results) => {
//         res.sendStatus(200);
//     }).catch((err) => {
//         console.log(err);
//         res.sendStatus(500);
//     });
// });

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

//GET FOUND LIST
//MAKE SURE THIS RETURNS A SPECIFIC PERSON'S LIST AND NOT ALL OF THE LISTS
router.get('/', (req, res) => {
    const query = `
    SELECT * FROM "found";
    `;
    pool.query(query)
     .then(result => {
        res.send(result.rows);
     })
     .catch(err =>  {
        console.log(`Error grabbing favorites`, err);
        res.sendStatus(500)
     })
});


//DELETE POST FROM FOUND LIST
router.delete('/:foundId', (req, res) => {
    console.log('req.params', req.params);
    const queryText = `DELETE FROM "found" WHERE "id" = $1;`;
    pool.query(queryText, [req.params.foundId]).then((result) => {
        res.sendStatus(204);
    }).catch(err=> {
        res.sendStatus(500);
        console.error(err);
    })
});

module.exports = router;