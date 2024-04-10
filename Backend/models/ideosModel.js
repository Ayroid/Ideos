import mongoose from "mongoose";

// SCHEMA

const ideosSchema = new mongoose.Schema(
  {
    ideosCategory: {
      type: String,
      required: true,
    },
    ideosTitle: {
      type: String,
      required: true,
    },
    ideosDescription: {
      type: String,
      required: true,
    },
    ideosPriority: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// MODEL

const ideosModel = mongoose.model("ideos", ideosSchema);

export { ideosModel as IDEOSMODEL };
