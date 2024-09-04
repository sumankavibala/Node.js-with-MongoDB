import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productID: Number,
  productName: String,
  productSpecs: String,
});

const cartSchema = new mongoose.Schema({
  productID: Number,
  Quantity: String,
  createdDate: Date,
  UpdatedDate: Date
})

const product = mongoose.model("productdetail", productSchema);

export { product };
