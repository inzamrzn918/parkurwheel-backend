const mongoose = require("mongoose")

module.exports = mongoose
  .connect("MONGO_URI", {
    useNewUrlParser: true
  })
  .then(() => console.log("connected to database"))
  .catch(err => console.error("could not connect to database", err));
