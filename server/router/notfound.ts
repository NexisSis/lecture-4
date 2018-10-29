
//const express = require('express');

import express, {Request,Response} from 'express';

const router = express.Router();

router.get('*', function(req:Request, res:Response){
    res.send('<h1>Page not found</h1>');
});

module.exports = router;