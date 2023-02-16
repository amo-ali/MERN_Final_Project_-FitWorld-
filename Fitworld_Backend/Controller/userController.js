const express = require("express");
const router = express.Router();
const userModal = require("../Modal/userModal");
// const actModal = require("../Modal/activityModal");

//To post Data
router.post("/", async (req, res) => {
  try {
    const user = await userModal(req.body);
    user.save();
    res.send(user);
  } catch {
    console.log("errror");
  }
});

//Get all data
router.get("/", async (req, res) => {
  const user = await userModal.find();
  res.send(user);
});

// for delete data
router.delete("/", async (req, res) => {
  const user = await userModal.deleteMany({});
  res.send(user);
});
module.exports = router;
