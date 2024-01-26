const Speciality = require("../models/Speciality.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const specialities = await Speciality.find();

    res.status(200).json(specialities);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
