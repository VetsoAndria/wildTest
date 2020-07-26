var mongoose = require("mongoose");


var userSchema = mongoose.Schema({
  name: { type: String }
});

module.exports = mongoose.model("User", userSchema);
