const mongoose = require("mongoose");
const user = "Julac";
const password = "HyQoDAmzIaotwY1N";
const db = "cluster0";
const uri = `mongodb+srv://${user}:${password}@cluster0.d23en.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => console.error(e));

module.exports = mongoose.connection;
