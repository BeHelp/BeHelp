const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/users");
// const User = require("../models/User");

userRoutes.post("/", userController.post);
userRoutes.get("/", userController.get);
userRoutes.get("/volunteer", userController.getAll);
userRoutes.get("/:userId", userController.get);
userRoutes.put("/:userId", userController.put);
userRoutes.delete("/:userId", userController.delete);

// userRoutes.get("/volunteer", async (req, res, next) => {
//   try {
//     const vol = await User.find({ volunteer: false });
//     console.log("*******");
//     res.send(vol);
//   } catch (error) {
//     console.log(error.message);
//   }
// });
module.exports = userRoutes;
