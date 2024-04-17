import express from "express";
import {
  CREATE_USER,
  READ_USER,
  READ_USER_ID,
  UPDATE_USER_ID,
  DELETE_USER_ID,
  LOGIN_USER,
  VERIFY_TOKEN,
  REFRESH_TOKEN,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.route("/").get(READ_USER).post(CREATE_USER);

userRouter
  .route("/:id")
  .get(READ_USER_ID)
  .put(UPDATE_USER_ID)
  .delete(DELETE_USER_ID);

userRouter.route("/login").post(LOGIN_USER);

userRouter.route("/signup").post(CREATE_USER);

userRouter.route("/verify").post(VERIFY_TOKEN);

userRouter.route("/refresh").post(REFRESH_TOKEN);

export { userRouter as USER_ROUTER };
