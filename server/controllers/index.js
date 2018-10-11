var models = require('../models');
// var utils = require('./utils');
var objectIdCounter = 1;
var msgs = [{
    text: 'hello world',
    username: 'fred',
    objectId: objectIdCounter
  }];

module.exports = {
  messages: {
    get: function (req, res, statusCode) {
      statusCode = statusCode || 200;
      response.writeHead(statusCode, {'Content-Type': 'application/json'});
      response.end(JSON.stringify({results: msgs}));
      }
    }, // a function which handles a get request for all messages
    post: function (req, callback) {
      var data = '';
      request.on('data', function(chunk) {
        data += chunk;
      });
      // request.on('end' function() {
      //   message = JSON.parse(message);        
      // })      
    }, 
   // a function which handles posting a message to the database
  

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

