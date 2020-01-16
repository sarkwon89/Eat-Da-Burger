// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm");

var burgerdb = {
  selectAll: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },

}

// Export the database functions for the controller (catsController.js).
module.exports = burgerdb;
