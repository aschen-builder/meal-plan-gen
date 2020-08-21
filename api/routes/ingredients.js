const config = require('../config.json');
const { MongoClient } = require('mongodb');
const express = require('express');

const router = express.Router();

function getIngredients(uri, mdb, col, callback) {
    const mongo = new MongoClient(uri, { useUnifiedTopology: true });
  
    mongo.connect(async (err, res) => {
        if (err) throw err;
        console.log("Connected successfully to server...");
    
        const db = res.db(mdb);
        db.collection(col).find({}).project({_id: 0, "ingredients.ingredients.name": 1}).toArray((err, data) => {
            if (err) throw err;
    
            res.close();
    
            console.log(`Successfully retrieved ${data.length} recipes!`);
            return callback(data);
        });
    });
}

router.get('/', (req, res) => {
    getIngredients(config.uri, config.db, config.collection, (data) => {
        let ings = [];

        data.forEach(({ingredients}) => ingredients.forEach(({ingredients}) => ingredients.forEach(({name}) => ings.push(name))));

        ings = [ ...new Set(ings) ]

        res.send(ings);
    });
});

module.exports = router;