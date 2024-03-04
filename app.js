require("dotenv").config();

const cors = require("cors");
const express = require("express");
const app = express();

require("./config")(app);

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://wolf-nave.vercel.app",
      "https://www.wolfnave.com/",
    ],
  })
);

const personalTrainersRoutes = require("./routes/personalTrainers.routes");
app.use("/personal-trainers", personalTrainersRoutes);

const cityRoutes = require("./routes/city.routes");
app.use("/cities", cityRoutes);

const specialitiesRoutes = require("./routes/specialities.routes");
app.use("/specialities", specialitiesRoutes);

require("./error-handling")(app);

module.exports = app;
