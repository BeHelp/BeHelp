const userManager = require('../business-logic/users');
const User=require('../models/User')

module.exports = userController = {
  post: async (req, res) => {
    try {
      const userData = req.body;
      console.log(userData);
      const result = await userManager.postUser(userData);
      res.status(201).send(result);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  get: async (req, res) => {
    User.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving user.",
      });
    });
},
put:async (req, res) => {

  try {

     const userId= req.params.userId;
    const userData = req.body;
 
    const result = await userManager.putUser(userId, userData);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send(error);
  }
  
  // await User.findByIdAndUpdate(
  //   req.params.userId,
  //   {
  //     body: req.body,
  //   },
  //   { new: true }
  // )
  //   .then((data) => {
  //     if (!data) {
  //       return res.status(404).send({
  //         message: "Message not found with id " + req.params.userId,
    //     });
    //   }
    //   res.send(data);
    // })
    // .catch((err) => {
    //   if (err.kind === "ObjectId") {
    //     return res.status(404).send({
    //       message: "Message not found with id " + req.params.userId,
    //     });
    //   }
    //   return res.status(500).send({
    //     message: "Error updating message with id " + req.params.userId,
    //   });
    // });
},
delete: async (req, res) => {
  await User.findByIdAndRemove(req.params.userId)
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "user not found with id " + req.params.userId,
        });
      }
      res.send({ message: "user deleted successfully!" });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "user not found with id " + req.params.userId,
        });
      }
      return res.status(500).send({
        message: "Could not delete message with id " + req.params.userId,
      });
    });
}}


module.exports = userController;
