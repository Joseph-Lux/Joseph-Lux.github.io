const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  id: Number,
  link: String,
  title: String,
  shortDesc: String,
  thumbnail: String,
  image: String,
  price: Number,
  fullDesc: String,
  stock: Number,
  category: String,
});

mongoose.model("products", productSchema);
