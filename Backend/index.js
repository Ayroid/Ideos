import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import Database from "./config/database.js";

// ROUTES

import { USER_ROUTER } from "./routes/userRoutes.js";
// import { PRODUCT_CATEGORY_ROUTER } from "./routes/productCategoryRoutes.js";
// import { PRODUCT_ROUTER } from "./routes/productRoutes.js";
// import { PRODUCT_ITEM_ROUTER } from "./routes/productItemRoutes.js";
// import { PRODUCT_ITEM_REVIEW_ROUTER } from "./routes/productItemReviewRoutes.js";
// import { USER_ORDER_ROUTER } from "./routes/userOrderRoutes.js";
// import { SHOPPING_CART_ROUTER } from "./routes/shoppingCartRoutes.js";
// import { QUERY_ROUTER } from "./routes/queriesRoutes.js";
// import { MAIL_ROUTER } from "./routes/mailRoutes.js";
import { IDEOS_ROUTER } from "./routes/ideosRoutes.js";
import { VERIFYTOKEN } from "./middlewares/authentication.js";

// DOTENV CONFIG

dotenv.config();

// CONSTANTS

const PORT = process.env.PORT;
const MONGODB_URI = process.env.DEV_MONGODB_URI;

// DATABASE

const db = new Database(MONGODB_URI);
db.connect();

// APP

const app = express();

// MIDDLEWARES

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// TEST ROUTE

app.use("/api/test", (req, res) => {
  res.send("Server ✅");
});

// ROUTES

app.use("/api/user", USER_ROUTER);
// app.use("/api/queries", QUERY_ROUTER);
// app.use("/api/mail", MAIL_ROUTER);
app.use("/api/ideos", VERIFYTOKEN, IDEOS_ROUTER);

// DATABASE DISCONNECT

process.on("SIGINT", async () => {
  try {
    await db.disconnect();
    console.log("Database Disconnected ✅");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});

// SERVER LISTEN

app.listen(PORT, () => {
  console.log(`Server ${PORT} ✅`);
});
