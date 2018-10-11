var db = require('../db');
// var connection = require('../db/index.js');

// connection.connection();
console.log(connection)
module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      db.connection.query('SELECT * FROM Messages', function (err, results) {
      if (err) {
        throw err;
      } else {
        callback(null, results);
        
      }
      }) 
    }, 
    // a function which can be used to insert a message into the database
    post: function (callback) {
      db.connection.query('INSERT INTO `Messages` (Message) VALUE (?)'), function(err, message) {
        if (err) {
        throw err;
      } else {
        
      }
      
      
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
}
}

console.log(module.exports.get);