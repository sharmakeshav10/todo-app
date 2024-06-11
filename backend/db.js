const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://sharmakeshav0708:4HVnsM4LbaGY6eKO@cluster0.gpkznbo.mongodb.net/"
);

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = {
  Todo,
};
