const express = require("express");
const app = express();
const mongoose = require("mongoose");
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
app.use("/", contactRoute);

app.use((req, res) => {
  res.status(404).send("Page non trouvée");
});
app.listen(PORT, () => {
  console.log(`Le serveur lancé sur le port ${PORT}`);
});
