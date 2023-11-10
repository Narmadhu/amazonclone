import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./router/userRouter.js";

const app = express();

// middleware for parsing the req.body
app.use(express.json());

// middleware for CORS
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Hello");
});

app.use("/", userRouter);

mongoose
  .connect(
    "mongodb+srv://narmadhu:04je2uSxCNhVqJYy@logincredentials.jqmkqxl.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(8000, () => {
      console.log("server running");
    });
  });
