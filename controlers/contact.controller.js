const Contact = require("../models/contact");

const create = async (req, res) => {
  const constact = await Contact.create(req.body);
  console.log("req.body:", req.body);

  res.send(constact);
};

module.exports = { create };

// {
//         firstname:"Bi Balé Victorien",
//         lastname:"Goli",
//       email:"balevictorien@yahoo.fr",
//       phone:"0708602313"
//     }
