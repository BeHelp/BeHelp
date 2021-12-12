const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/users");

userRoutes.post("/", userController.post);
userRoutes.get("/", userController.get);

userRoutes.get("/volunteers", userController.getAll);
userRoutes.get("/:userId", userController.get);

module.exports = userRoutes;
