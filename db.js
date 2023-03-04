const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://sheguey:b6HpZ9nX8NwvGT46@cluster0.tozqnmx.mongodb.net/CrudDB", (err) => {
  if (!err) console.log("MongoDB connection succeeded....");
  else
    console.log(
      "Error in DB connection : " + JSON.stringify(err, undefined, 2)
    );
});

module.exports = mongoose;
