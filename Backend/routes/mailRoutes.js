import express from "express";
import { SEND_MAIL } from "../controllers/mailController.js";

const mailRouter = express.Router();

mailRouter.route("/").post(SEND_MAIL);

export { mailRouter as MAIL_ROUTER };
