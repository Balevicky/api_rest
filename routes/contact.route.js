const express = require("express");
const router = express.Router();
const contactControllers = require("../controlers/contact.controller");

router.post("/", contactControllers.create);
router.get("/", contactControllers.getAll);
router.get("/:id", contactControllers.getById);
router.patch("/:id", contactControllers.updateById);
router.delete("/:id", contactControllers.deleteById);
module.exports = router;
