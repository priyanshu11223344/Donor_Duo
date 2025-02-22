const express = require("express");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const Bank = require("../models/Bank");

dotenv.config();

const router = express.Router();

router.post("/newdonor", async (req, res) => {
    try {
       const {name,image,age,bloodGroup,city,certificate,description,hospital}=req.body;
       const donor= new Bank({
        name,image,age,bloodGroup,city,certificate,description,hospital
       })
      await donor.save();
      res.status(200).json(donor);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;