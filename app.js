require("dotenv").config();

const express = require("express");

const app = express();

require("./config")(app);

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

const personalTrainersRoutes = require("./routes/personalTrainers.routes");
app.use("/personal-trainers", personalTrainersRoutes);

require("./error-handling")(app);

module.exports = app;
