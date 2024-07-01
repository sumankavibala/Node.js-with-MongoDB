import { number } from "joi";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productID: Number,
  productName: String,
  productSpecs: String,
});

const product = mongoose.model("productdetail", productSchema);

export { product };
