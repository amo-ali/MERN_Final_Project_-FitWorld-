const express = require("express");
const router = express.Router();
// const userModal = require("../Modal/userModal");
const actModal = require("../Modal/activityModal");

//To post Data
router.post("/", async (req, res) => {
  try {
    const act = await actModal(req.body);
    act.save();
    res.send(act);
  } catch {
    console.log("errror");
  }
});

//Get all data
router.get("/", async (req, res) => {
  // let date = req.params.date;
  const act = await actModal.find();
  res.send(act);
});

// for delete data
router.delete("/", async (req, res) => {
  // let getid = req.params.id;
  const act = await actModal.deleteMany({});
  res.send(act);
});
module.exports = router;
