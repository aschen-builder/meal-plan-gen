const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    /*getData(config.uri, config.db, config.collection, {}, (res) => {
        console.log(res);
    });*/
    res.render('index', {title: 'Express Service'});
});

module.exports = router;