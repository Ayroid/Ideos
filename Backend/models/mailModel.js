import mongoose from "mongoose";

// SCHEMA

const mailSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    mail_to: {
      type: String,
      required: true,
    },
    mail_subject: {
      type: String,
      required: true,
    },
    mail_date_time: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// MODEL

const mailModel = mongoose.model("productCategories", mailSchema);

export { mailModel as MAILMODEL };
