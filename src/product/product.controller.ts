import Express from "express";

// Code for inserting product into DB
import { addProduct, insertCart } from "./product.service";
const addProductRouter = Express.Router();
addProductRouter
  .route("/insertProduct")
  .post((req: any, res: any) => addProduct(req, res));

// Code for view all product in the DB
import { viewAllProduct } from "./product.service";
const viewAllProductRouter = Express.Router();
viewAllProductRouter
  .route("/viewAllProducts")
  .get((req: any, res: any) => viewAllProduct(req, res));

// Code for view product by ID in the DB
import { viewProductByID } from "./product.service";
const viewProductByIDRouter = Express.Router();
viewProductByIDRouter
  .route("/viewProductByID/:productID")
  .get((req: any, res: any) => viewProductByID(req, res));

// Code for update product by ID in the DB
import { updateProduct } from "./product.service";
const updateProductByIDRouter = Express.Router();
updateProductByIDRouter
  .route("/updateProductByID/:productID")
  .put((req: any, res: any) => updateProduct(req, res));

// Code for delete product by ID in the DB
import { deleteProduct } from "./product.service";
const deleteproductByIDRouter = Express.Router();
deleteproductByIDRouter
  .route("/deleteProductbyID/:productID")
  .delete((req: any, res: any) => deleteProduct(req, res));

export const insertCartByIDRouter = Express.Router();
insertCartByIDRouter
  .route("/insertCartByID/:productID")
  .post((req:any,res:any)=>insertCart(req,res));

export {
  addProductRouter,
  viewAllProductRouter,
  viewProductByIDRouter,
  updateProductByIDRouter,
  deleteproductByIDRouter,
};
