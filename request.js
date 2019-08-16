'use strict'
module.exports= function(app){

const accepts = require('accepts');
//load accepts module to parse accept-language string req http header
//.languages methods returns an array in the order of clients preferences

const uaParser = require('ua-parser');
//load ua-parser module that uses regex library to parse user agent strings in req http header
//Added app.enable('trust proxy') to server.js app intialization code to maket this work

app.get('/',(req,res)=>{

const ip = req.ip;

const lang = accepts(req).languages()[0];
//get an array of preferred languages from http req headers, and take the first one, which is most preferred language

const uaHeader = req.header['user-agent'];
    //get user-agent string 

    const agent = uaParser.parseOS(uaHeader).toString();
    //parse OS part of user-agent string to a string    
    
     res.json({"ipaddress": ip, "language": lang, "software": agent});
})   
}
