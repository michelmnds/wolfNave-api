const City = require("../models/City.model");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const cityList = await City.find();

    res.status(200).json(cityList);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
