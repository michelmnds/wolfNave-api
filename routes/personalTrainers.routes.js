const router = require("express").Router();
const PersonalTrainer = require("../models/PersonalTrainer.model");

router.get("/", async (req, res) => {
  try {
    const personalList = await PersonalTrainer.find();

    res.status(200).json(personalList);
  } catch (error) {
    console.log(error);
  }
});
router.get("/:ptId", async (req, res) => {
  const ptId = req.params.ptId;

  try {
    const personalTrainer = await PersonalTrainer.findById(ptId);

    res.status(200).json(personalTrainer);
  } catch (error) {
    console.log(error);
  }
});
router.post("/", async (req, res) => {
  try {
    const newPt = await PersonalTrainer.create(req.body);
    res.status(201).json(newPt);
  } catch (error) {
    console.log(error);
  }
});
router.put("/:ptId", async (req, res) => {
  const ptId = req.params.ptId;
  try {
    const editedPt = await PersonalTrainer.findByIdAndUpdate(ptId, req.body, {
      new: true,
    });
    res.status(204).json(editedPt);
  } catch (error) {
    console.log(error);
  }
});
router.delete("/:ptId", async (req, res) => {
  const ptId = req.params.ptId;

  try {
    await PersonalTrainer.findByIdAndDelete(ptId);

    res.status(200).send();
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
