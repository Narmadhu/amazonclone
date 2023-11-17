import express from "express";
import { User } from "../models/userModal.js";

const router = express.Router();
router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.find({ username });
    if (existingUser.length) {
      res.status(500).send({
        message: "Already Registered. Please login!",
        userType: "existingUser",
      });
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

  // try {
  const existingUser = await User.find({ username });
  /*  if (!username || !password) {
      return res.status(400).send({ message: "Please fill all details" });
    }  */
  if (existingUser.length && existingUser[0].password !== password) {
    res.status(500).send({ message: "Invalid credentials!" });
  } else if (
    existingUser.length &&
    existingUser[0].username === username &&
    existingUser[0].password === password
  ) {
    return res.status(200).send({ message: "Successfully logged in!" });
  } else {
    res
      .status(500)
      .send({
        message: "Not yet signed up. Please signup!",
        userType: "newUser",
      });
  }

  // return res.redirect("/signup");
  // } catch (error) {
  //   res.status(500).send(error.message);
  // }
});

export default router;
