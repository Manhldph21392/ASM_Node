import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
  },
  quality: {
    type: Number,
  },
});

export default mongoose.model("Product", productSchema);
