const express = require("express");
const {
  getUser,
  updateUser,
  addUser
} = require("../Controllers/userController");
const router = express.Router();
const Login = require("../Models/schema");

console.log("--------------------->");


router.get("/read/:email", getUser);
router.post('/add',addUser)

module.exports = router;
