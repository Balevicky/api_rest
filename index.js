const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const bodyParser = require("body-parser");
const contactRoute = require("./routes/contact.route");

const PORT = 5000;
// ========= connexion de la db
mongoose.connect("mongodb://localhost:27017/carnet-adresses");
// mongoose.connect("mongodb://localhost:27017/phototheque");
//localhost:27017/phototheque
// ========= body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//====== Routes
app.use("/contacts", contactRoute);
app.use("/contacts", contactRoute);

app.use((req, res) => {
  // res.status(404).send("Page non trouvée");
  res.status(StatusCodes.NOT_FOUND).send("Page non trouvée");
});

app.use((err, req, res, next) => {
  console.log(err);
  // res.status(500).send("Erreur interne du serveur");
  res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .send("Erreur interne du serveur");
});

app.listen(PORT, () => {
  console.log(`Le serveur lancé sur le port ${PORT}`);
});
