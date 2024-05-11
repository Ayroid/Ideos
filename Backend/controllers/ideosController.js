import dotenv from "dotenv";
dotenv.config();
import { StatusCodes } from "http-status-codes";

// CONSTANTS
const SERVER_URI = process.env.SERVER_URI;
const fields = {
  __v: 0,
  createdAt: 0,
  updatedAt: 0,
};

// DATABASE CONTROLLERS
import {
  CREATE_DB,
  READ_DB,
  READ_DB_ID,
  UPDATE_DB_ID,
  DELETE_DB_ID,
} from "./databaseController.js";

// MODEL IMPORT
import { IDEOSMODEL } from "../models/ideosModel.js";

// CONTROLLERS
const createIdeos = async (req, res) => {
  try {
    console.log("Creating Ideos", { body: req.body });
    const { ideosCategory, ideosTitle, ideosDescription, ideosPriority } =
      req.body;
    const query = { ideosTitle };

    let record = await READ_DB(IDEOSMODEL, query);
    if (record.length > 0) {
      return res.status(StatusCodes.CONFLICT).send("Ideos already exists");
    }

    record = await CREATE_DB(IDEOSMODEL, {
      userId: req.user._id,
      ideosCategory,
      ideosTitle,
      ideosDescription,
      ideosPriority,
    });

    if (record) {
      console.log("Ideos Created", { record });

      //   const productCategoryRecord = await READ_DB_ID(
      //     PRODUCTCATEGORYMODEL,
      //     product_category_id
      //   );

      //   if (!productCategoryRecord) {
      //     console.log("Ideos Category Not Found", { productCategoryRecord });
      //     await DELETE_DB_ID(IDEOSMODEL, { _id: record._id });
      //     return res
      //       .status(StatusCodes.NOT_FOUND)
      //       .send("Ideos Category Not Found");
      //   }

      //   const products = productCategoryRecord.products;
      //   const productStockQuantity = productCategoryRecord.product_stock_quantity;

      //   products.push(record._id);

      //   const updatedProductCategoryRecord = await UPDATE_DB_ID(
      //     PRODUCTCATEGORYMODEL,
      //     product_category_id,
      //     {
      //       products: products,
      //       product_stock_quantity:
      //         parseInt(productStockQuantity, 10) +
      //         parseInt(product_stock_quantity, 10),
      //     },
      //     fields
      //   );

      //   if (updatedProductCategoryRecord) {
      //     console.log("Ideos Category Updated", {
      //       updatedProductCategoryRecord,
      //     });
      //   } else {
      //     console.log("Ideos Category Not Updated", {
      //       updatedProductCategoryRecord,
      //     });
      //   }

      return res.status(StatusCodes.CREATED).send("Ideos Created");
    } else {
      console.log("Error Creating Ideos");
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Internal Server Error");
    }
  } catch (error) {
    console.log("Error Creating Ideos", { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Internal Server Error");
  }
};

const readIdeos = async (req, res) => {
  try {
    const query = req.query.id ? { _id: req.query.id } : {};

    const record = await READ_DB(IDEOSMODEL, query);

    if (record.length > 0) {
      console.log("Ideos Found", { record });
      return res.status(StatusCodes.OK).send(record);
    } else {
      console.log("Ideos Not Found", { record });
      return res.status(StatusCodes.NOT_FOUND).send("Ideos Not Found");
    }
  } catch (error) {
    console.log("Error Reading Ideos", { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Internal Server Error");
  }
};

const readIdeosById = async (req, res) => {
  try {
    const id = req.params.id;

    const record = await READ_DB_ID(IDEOSMODEL, id, fields);
    if (record) {
      console.log("Ideos Found", { record });
      return res.status(StatusCodes.OK).send(record);
    } else {
      console.log("Ideos Not Found", { record });
      return res.status(StatusCodes.NOT_FOUND).send("Ideos Not Found");
    }
  } catch (error) {
    console.log("Error Reading Ideos", { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Internal Server Error");
  }
};

const updateIdeosById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const record = await UPDATE_DB_ID(IDEOSMODEL, id, data, fields);
    if (record) {
      console.log("Ideos Updated", { record });
      return res.status(StatusCodes.OK).send(record);
    } else {
      console.log("Ideos Not Updated", { record });
      return res.status(StatusCodes.NOT_FOUND).send("Ideos Not Updated");
    }
  } catch (error) {
    console.log("Error Updating Ideos", { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Internal Server Error");
  }
};

const deleteIdeosById = async (req, res) => {
  try {
    const id = req.params.id;
    const record = await DELETE_DB_ID(IDEOSMODEL, id);
    if (record) {
      console.log("Ideos Deleted", { record });
      return res.status(StatusCodes.OK).send("Ideos Deleted");
    } else {
      console.log("Ideos Not Deleted", { record });
      return res.status(StatusCodes.NOT_FOUND).send("Ideos Not Deleted");
    }
  } catch (error) {
    console.log("Error Deleting Ideos", { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Internal Server Error");
  }
};

export {
  createIdeos as CREATE_IDEOS,
  readIdeos as READ_IDEOS,
  readIdeosById as READ_IDEOS_ID,
  updateIdeosById as UPDATE_IDEOS_ID,
  deleteIdeosById as DELETE_IDEOS_ID,
};
