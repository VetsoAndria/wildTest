var mongoose = require("mongoose");

var conn = mongoose
  .connect(
    "mongodb+srv://userAdmin:Admin@clusterwild.s7by6.mongodb.net/wildtest?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

global.mongoose = conn;
module.exports.conn = conn;
