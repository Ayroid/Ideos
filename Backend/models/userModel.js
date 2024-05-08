import mongoose from "mongoose";

// SCHEMA

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    ideosArray: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ideos",
      },
    ],
  },
  { timestamps: true }
);

// MODEL

const userModel = mongoose.model("users", userSchema);

export { userModel as USERMODEL };
