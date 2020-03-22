const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/", async(req,res)=>{
    try {
        const { usuario, pass } = req.body;
        const hashedPassword = await bcrypt.hash(pass, 10);
        const user = new User({
            usuario: usuario,
            pass: hashedPassword,
        });
        
        await user.save();
        res.status(201).json({status:"success"});
    } catch (err) {
        res.status(404).json({status:"error"});
    }
});

module.exports = router;