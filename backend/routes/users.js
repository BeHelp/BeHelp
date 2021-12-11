const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/users");
// const User = require("../models/User");

userRoutes.post("/", userController.post);
userRoutes.get("/", userController.get);
userRoutes.get("/volunteer", userController.getAll);
userRoutes.get("/:userId", userController.get);
//userRoutes.put("/:userId", userController.put);
//userRoutes.delete("/:userId", userController.delete);

module.exports = userRoutes;
