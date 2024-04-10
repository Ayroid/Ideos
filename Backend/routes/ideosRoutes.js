import express from "express";
import {
  CREATE_IDEOS,
  READ_IDEOS,
  READ_IDEOS_ID,
  UPDATE_IDEOS_ID,
  DELETE_IDEOS_ID,
} from "../controllers/ideosController.js";

const ideosRouter = express.Router();

ideosRouter.route("/").get(READ_IDEOS).post(CREATE_IDEOS);

ideosRouter
  .route("/:id")
  .get(READ_IDEOS_ID)
  .put(UPDATE_IDEOS_ID)
  .delete(DELETE_IDEOS_ID);

export { ideosRouter as IDEOS_ROUTER };
