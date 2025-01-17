const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authentication");
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/profile");

router.get("/users", getAllUsers);
router.get("/profile/view", auth, getUser);
router.put("/user", auth, updateUser);
router.delete("/user", auth, deleteUser);
module.exports = router;
