const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const catchAsync = require("../helpers/catchAsync");
const Contact = require("../models/contact");
const { Query } = require("mongoose");
// ===========

const create = catchAsync(async (req, res) => {
  const contact = await Contact.create(req.body);
  res.send(contact);
});
// =========== tous les contact avec filtre
const getAll = catchAsync(async (req, res) => {
  const contacts = await Contact.find(req.query);
  res.send(contacts);
});
// ===========
const getById = catchAsync(async (req, res) => {
  const id = req.params.id;
  // const idContact = req.params.id;
  try {
    // new mongoose.types.ObjectId(id);
    new mongoose.Types.ObjectId(id);
  } catch (err) {
    console.log(err);
    console.log("Catch erreur conversion ObjectId");
    return res.status(StatusCodes.BAD_REQUEST).send("Format de l'ID invalide");
  }
  const contact = await Contact.findById(id);
  console.log("Contact:", contact);
  if (contact) {
    res.send(contact);
  } else {
    res.status(StatusCodes.NOT_FOUND).send("Contact introuvable!!");
  }
});
// ===========
const updateById = catchAsync(async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (contact) {
    res.send(contact);
  } else {
    res.status(StatusCodes.NOT_FOUND).send("Contact introuvable!!");
  }
});
// ===========
const deleteById = catchAsync(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (contact) {
    res.send(contact);
  } else {
    res.status(404).send("Contact introuvable!!");
  }
});

module.exports = { create, getAll, getById, updateById, deleteById };

// {
//         firstname:"Bi Balé Victorien",
//         lastname:"Goli",
//       email:"balevictorien@yahoo.fr",
//       phone:"0708602313"
//     }
