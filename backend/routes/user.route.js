import express from "express";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import creatUser from "../controllers/user.controller.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const newUser = await User.create({
    displayName: req.body.displayName,
    username: req.body.username,
    email: req.body.email,
    hashedPassword: hashedPassword,
  });

  return res.status(201).json(newUser);
});

router.get("/fetch", async (req, res) => {
  const users = await User.find();

  return res.status(200).json(users);
});

export default router;
