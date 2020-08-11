const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  versionKey: false,
});

const App = mongoose.model("App", appSchema);

module.exports = App;
