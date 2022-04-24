const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
    });

    const createdUser = newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email });
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      userInfo.password = null;
      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email,
        },
        req.app.get("secretKey"),
        { expiresIn: "1h" }
      );
      return res.json({
        status: 200,
        message: "User created",
        data: { user: userInfo, token: token },
      });
    }
  } catch (error) {
    return next(error);
  }
});

router.post("/logout", (req, res, next) => {
  try {
    req.headers.authorization = null;
    return res.json({
      status: 200,
      message: "Logout OK",
      token: null,
    });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
