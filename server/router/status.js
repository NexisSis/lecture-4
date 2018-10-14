const express = require('express');
const format = require('../utills/timeFormat');

const router = express.Router();

router.get('/status',function(req,res) {
    var uptime = process.uptime();
    res.send(format(uptime));
});

module.exports = router;