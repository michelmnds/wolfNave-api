require("dotenv").config();

const express = require("express");

const app = express();

require("./config")(app);

const personalTrainersRoutes = require("./routes/personalTrainers.routes");
app.use("/personal-trainers", personalTrainersRoutes);

require("./error-handling")(app);

module.exports = app;
