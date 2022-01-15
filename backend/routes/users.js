const express = require("express");
const userRoutes = express.Router();
const userController = require("../controllers/users");
const { authCheck } = require("../middleware/auth");

// userRoutes.post('/', userController.post);
userRoutes.post("/", userController.get);
userRoutes.get("/volunteers", userController.getAll);
userRoutes.get("/:userId", userController.getById);
userRoutes.delete("/:userId", userController.delete);
userRoutes.put("/:userId", userController.put);

// auth route for getting user email
userRoutes.get("/contactinfo/:userId", authCheck, userController.getEmailById);
// auth route for user logout
userRoutes.get("/logout/:userId", authCheck, userController.logout);

module.exports = userRoutes;
