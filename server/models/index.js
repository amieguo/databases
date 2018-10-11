var db = require('../db');
var connection = require('../db/index.js');

connection.connection();

module.exports = {
  messages: {
    get: function (request, response) {
      connection.query('SELECT * FROM Messages', function (err, results) {
      if (err) {
        throw err;
      } else {
        response.send(JSON.stringify(results));
        
        console.log('The solution is: ')
      }
      }) 
    }, // a function which produces all the messages
    post: function (request, response) {
      connection.query('INSERT INTO `Messages` (Message) VALUE (?)'), function(err, message) {
        if (err) {
        throw err;
      } else {
        message = JSON.parse(message);
        response.end();
        console.log('The solution is: ')
      }
      
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

