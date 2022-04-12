const mongoose = require("mongoose")

module.exports = mongoose
  .connect("mongodb+srv://inzam918:inzam918@cluster0.ew83k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true
  })
  .then(() => console.log("connected to database"))
  .catch(err => console.error("could not connect to database", err));