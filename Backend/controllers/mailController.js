import dotenv from "dotenv";
dotenv.config();
import { StatusCodes } from "http-status-codes";
import { SENDMAIL } from "../utils/mailer.js";

// CONSTANTS
const SERVER_URI = process.env.SERVER_URI;
const fields = {
  __v: 0,
  createdAt: 0,
  updatedAt: 0,
};

// DATABASE CONTROLLERS
import { CREATE_DB, READ_DB, READ_DB_ID } from "./databaseController.js";

// MODEL IMPORT
import { MAILMODEL } from "../models/mailModel.js";

import { MAILTEMPLATES } from "../utils/mails.js";

// CONTROLLERS
const createMail = async (req, res) => {
  try {
    const { user_id, username, mail_to, mailType } = req.body;

    SENDMAIL(username, mail_to, mailType);

    const record = await CREATE_DB(MAILMODEL, {
      user_id: user_id,
      mail_to: mail_to,
      mail_subject: MAILTEMPLATES[mailType].subject,
      mail_date_time: Date.now(),
    });

    if (record) {
      console.log("Product Item Created", { record });
      return res.status(StatusCodes.CREATED).send("Product Item Created");
    } else {
      console.log("Error Creating Product", { error });
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .send("Internal Server Error");
    }
  } catch (error) {
    console.log("Error Creating Product", { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Internal Server Error");
  }
};

const readMail = async (req, res) => {
  try {
    const query = req.query.userid ? { user_id: req.query.userid } : {};

    const user = await READ_DB(MAILMODEL, query, fields);

    if (user.length > 0) {
      console.log("Mail Found", { user });
      return res.status(StatusCodes.OK).send(user);
    } else {
      console.log("Mail Not Found", { user });
      return res.status(StatusCodes.NOT_FOUND).send("Mail Not Found");
    }
  } catch (error) {
    console.log("Error Reading Mail", { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Internal Server Error");
  }
};

const readMailById = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await READ_DB_ID(MAILMODEL, id, fields);

    if (user) {
      console.log("Mail Found", { user });
      return res.status(StatusCodes.OK).send(user);
    } else {
      console.log("Mail Not Found", { user });
      return res.status(StatusCodes.NOT_FOUND).send("Mail Not Found");
    }
  } catch (error) {
    console.log("Error Reading Mail", { error });
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Internal Server Error");
  }
};

export {
  createMail as CREATE_MAIL,
  readMail as READ_MAIL,
  readMailById as READ_MAIL_ID,
};
