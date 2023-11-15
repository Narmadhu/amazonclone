import express from "express";
import { User } from "../models/userModal.js";

const router = express.Router();
router.post("/signup", async (req, res) => {
  try {
    // if (!req.body.username || !req.body.password) {
    //   return res.status(400).send({ message: "Please fill all fields" });
    // }
    const { username, password } = req.body;
    const findUser = await User.find({ username, password });
    if (findUser.length) {
      res.status(500).send({ message: "Already Registered. Please login!" });
    } else {
      await User.create({ username, password });
      res.status(200).send({ message: "Successfully Registered" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const findUser = await User.find({ username });
    if (!username || !password) {
      return res.status(400).send({ message: "Please fill all details" });
    } else if (findUser.length && findUser[0].password !== password) {
      res.status(500).send({ message: "Invalid credentials!" });
    } else if (
      findUser.length &&
      findUser[0].username === username &&
      findUser[0].password === password
    ) {
      return res.status(200).send({ message: "Successfully logged in!" });
    } else {
      res.status(500).send({ message: "Not yet signed up. Please signup!" });
    }

    // return res.redirect("/signup");
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
