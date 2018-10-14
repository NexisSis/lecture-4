const express = require('express');
const path = require('path');
var fs = require('fs');

const router = express.Router();

router.get('/events',function(req,res) {
    // check if object is empty
    if(Object.keys(req.query).length !== 0){
        if(req.query.type){
            if(req.query.type == 'info'){
               fs.readFile(path.resolve('data/events.json'), 'utf8', function (err, data) {
                    if (err) {
                        console.log('Ошибка чтения!');
                        return console.log(err);
                    }
                   obj = JSON.parse(data);
                   var info = obj;
                   info.events = obj.events.filter(function(e) {
                       return e.type == "info";
                   });
                    res.send(JSON.stringify(info));
                });


            }else if(req.query.type == 'critical'){

                fs.readFile(path.resolve('data/events.json'), 'utf8', function (err, data) {
                    if (err) {
                        console.log('Ошибка чтения!');
                        return console.log(err);
                    }
                    obj = JSON.parse(data);
                    var info = obj;
                    info.events = obj.events.filter(function(e) {
                        return e.type == "critical";
                    });
                    res.send(JSON.stringify(info));

                });
            }else{
                res.send('incorrect type',400)
            }
        }else{
            res.send('incorrect parameters',400)
        }
    }else{
        res.sendFile(path.resolve('data/events.json'),200);
    }
});

module.exports = router;