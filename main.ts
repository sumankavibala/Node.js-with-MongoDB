import Express from "express";

import dotenv from "dotenv";

import mongoose from "mongoose";
import cors from 'cors';

import {
  addProductRouter,
  deleteproductByIDRouter,
  updateProductByIDRouter,
  viewAllProductRouter,
  viewProductByIDRouter,
} from "./src/product/product.controller";

dotenv.config();

const port = process.env.PORT;

const app = Express();

app.use(Express.json());

app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/nosql_db")
  .then(() => console.log("mongodb connected successfully"))
  .catch((error) => console.log(error));

app.listen(port, () => {
  console.log("App running successfully on port:" + port);
});

app.use("/insertNewProduct", addProductRouter);

app.use("/viewProducts", viewAllProductRouter);

app.use("/viewProductById", viewProductByIDRouter);

app.use("/updateproduct", updateProductByIDRouter);

app.use("/deleteproduct", deleteproductByIDRouter);
