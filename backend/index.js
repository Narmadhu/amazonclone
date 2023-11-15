import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Stripe } from "stripe";
import userRouter from "./router/userRouter.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const stripe = new Stripe(process.env.SECRETKEY, {
  apiVersion: "2020-08-27",
});

// middleware for CORS
app.use(cors());
app.use(express.static("public"));
// middleware for parsing the req.body
app.use(express.json());
// routers
app.use("/", userRouter);

app.get("/payment/success", (req, res) => {
  res.send("Your payment is successful");
});

app.post("/payment", async (req, res) => {
  const productItems = req.body;
  let newProducts = productItems.map((item) => {
    return {
      price: item.id,
      quantity: item.noOfProducts,
    };
  });
  const session = await stripe.checkout.sessions.create({
    line_items: newProducts,
    mode: "payment",
    success_url: "http://localhost:8000/payment/success",
    cancel_url: "http://localhost:8000/payment/cancel",
  });
  console.log({ session });
  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

mongoose
  .connect(
    "mongodb+srv://" +
      process.env.NAME +
      ":" +
      process.env.MONGODB_PASSWORD +
      "@logincredentials.jqmkqxl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8000, () => {
      console.log("server running");
    });
  });
