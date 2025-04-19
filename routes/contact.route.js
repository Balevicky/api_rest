const express = require("express");
const router = express.Router();
const contactControllers = require("../controlers/contact.controller");

router.post("/contacts", contactControllers.create);
module.exports = router;
