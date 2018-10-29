// const express = require('express');
//const format = require('../utills/timeFormat');

import express, {Request, Response} from 'express';
import format from '../utills/timeFormat';

const router = express.Router();

router.get('/status',function(req:Request,res:Response) {
    var uptime = process.uptime();
    res.send(format(uptime));
});

module.exports = router;