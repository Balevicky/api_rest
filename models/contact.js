const mongoose = require("mongoose");
const Schama = mongoose.Schema;

const contactSchema = new Schama({
  firstname: String,
  lastname: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model("Contact", contactSchema);
