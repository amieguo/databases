var db = require('../db');
// var connection = require('../db/index.js');

// connection.connection();
//console.log(connection)
module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (callback) {
      var queryStr = 'select messages.id, messages.text, messages.roomname, users.username \
        from messages left outer join users on (messages.userid = users.id) \
        order by messages.id desc';
      db.query(queryStr, function (err, results) {
        callback(err, results);         
      }); 
    }, 
    // a function which can be used to insert a message into the database
    post: function (params, callback) {
      var queryStr = 'insert into messages(text, userid, roomname) \
                      value (?, (select id from users where username = ? limit 1), ?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      }); 
    }        
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      var queryStr = 'SELECT * FROM Users'
      db.query(queryStr, function (err, results) {
        callback(err, results);         
      });
    },
    post: function (params, callback) {
      var queryStr = 'INSERT INTO `users` (username) VALUE (?)';
      db.query(queryStr, params, function(err, results) {
        callback(err, results);
      });        
    } 
  }
};


