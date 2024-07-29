import { Request, Response } from "express";
import Joi, { any, number } from "joi";
import { product } from "./product.model";
import { validateProductDetails } from "./product.dto";
import mongoose, { Mongoose } from "mongoose";

// code for inserting new product into DB
const addProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const validateRepsonse = validateProductDetails.validate(payload);
    if (validateRepsonse.error?.details) {
      throw new Error(validateRepsonse.error.details[0].message);
    }
    const productinsertRepo = product.create(payload);
    res.status(200).send({
      Result: "Product added successfully",
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      Result: error.message,
    });
  }
};

// code for view all product in the DB
const viewAllProduct = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const productViewRepo = await product.find();
    console.log(productViewRepo);
    res.status(200).send({
      Result: productViewRepo,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      Result: error.message,
    });
  }
};

// code for view product by ID in the DB
const viewProductByID = async (req: Request, res: Response) => {
  try {
    const payload = req.params.productID;
    const productViewByIDRepo = await product.find({ productID: payload });
    console.log(productViewByIDRepo);
    res.status(200).send({
      Result: productViewByIDRepo,
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      Result: error.message,
    });
  }
};

// code for update product in the DB
const updateProduct = async (req: Request, res: Response) => {
  try {
    const product_ID = req.params.productID;
    const payload = req.body;
    const productViewByIDRepoforupdate = await product.find({ productID: product_ID});
    const validateRepsonse = validateProductDetails.validate(payload);
    if (validateRepsonse.error?.details) {
      throw new Error(validateRepsonse.error.details[0].message);
    }

    const productupdateRepo = await product.findByIdAndUpdate(
      productViewByIDRepoforupdate || payload,
      payload
    );
    console.log(productupdateRepo);
    res.status(200).send({
      Result: "Product updated successfully",
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      Result: error.message,
    });
  }
};

// Code for delete product  in the DB
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const product_ID = req.params.productID;
    const productViewByIDRepofordelete = await product.find({ productID: product_ID});
    const deleteProductByIDRepo = await product.findByIdAndDelete(productViewByIDRepofordelete);
    if(!deleteProductByIDRepo){
      throw new Error("product not found");
    }
    res.status(200).send({
      Result: "Product deleted successfully",
    });
  } catch (error: any) {
    console.log(error);
    res.status(400).send({
      Result: error.message,
    });
  }
};

export {
  addProduct,
  viewAllProduct,
  viewProductByID,
  updateProduct,
  deleteProduct,
};
