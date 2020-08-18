const config = require('../config.json');
const { MongoClient } = require('mongodb');
const express = require('express');

const router = express.Router();

function getData(uri, mdb, col, filters, callback) {
    const mongo = new MongoClient(uri, { useUnifiedTopology: true });
  
    mongo.connect(async (err, res) => {
        if (err) throw err;
        console.log("Connected successfully to server...");
    
        const db = res.db(mdb);
        db.collection(col).find(filters).toArray((err, data) => {
            if (err) throw err;
    
            res.close();
    
            console.log(`Successfully retrieved ${data.length} recipes!`);
            return callback(data);
        });
    });
}

router.get('/', (req, res) => {
    getData(config.uri, config.db, config.collection, {}, (res) => {
        console.log(res);
    });
    res.send('Server landing...');
});

module.exports = router;