//import express from "express";
//const express = require('express');
//const path = require('path');
interface eInterface {
    type?:string
}
import express, {Request,Response} from 'express';
import path from 'path';
import fs from 'fs';
const router = express.Router();

router.get('/events',function(req:Request,res:Response) {
    // check if object is empty
    if(Object.keys(req.query).length !== 0){
        if(req.query.type){
            if(req.query.type == 'info'){
               fs.readFile(path.resolve('data/events.json'), 'utf8', function (err:Error, data:string) {
                    if (err) {
                        console.log('Ошибка чтения!');
                        return console.log(err);
                    }
                   let obj = JSON.parse(data);
                   var info = obj;
                   info.events = obj.events.filter(function(e:eInterface) {
                       return e.type == "info";
                   });
                    res.send(JSON.stringify(info));
                });


            }else if(req.query.type == 'critical'){

                fs.readFile(path.resolve('data/events.json'), 'utf8', function (err:Error, data:string) {
                    if (err) {
                        console.log('Ошибка чтения!');
                        return console.log(err);
                    }
                    let obj = JSON.parse(data);
                    var info = obj;
                    info.events = obj.events.filter(function(e:eInterface) {
                        return e.type == "critical";
                    });
                    res.send(JSON.stringify(info));

                });
            }else{
                res.send('incorrect type')
            }
        }else{
            res.send('incorrect parameters')
        }
    }else{
        res.sendFile(path.resolve('data/events.json'));
    }
});

module.exports = router;