"use strict";

//console.log("Lets start the program");

var http = require('http');
var request = require('request');
var ioredis = require('ioredis');
console.log("Lets start the program");

var a = "a name";
console.log("Lets print variable a",a);
let option = {
    "url" : "http://localhost:3000/getRandomData",
    "method" : "GET",
    "timeout" : 5000,
    "json" : true
};
request(option, function(err, resp, body) {
  if(err) {
    console.log("Error occurred");
  } else {
    console.log("Successfully received data " + JSON.stringify(body));
  }
});



