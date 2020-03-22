const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/", async (req,res)=>{
    const { usuario, pass } = req.body;
    const result = await User.findOne({usuario: usuario});

    if(result.length == 0) return res.status(400).send("Usuario o contraseña incorrectos");
    try {
        if(await bcrypt.compare(pass, result.pass)) {
            const token = jwt.sign(result.usuario, process.env.JWT_SECRET);
            res.status(200).json({
                status: "logged",
                token
            });
        } else { console.log(2); }
    } catch(e) {
        res.status(400).send("Usuario o contraseña incorrecto");
    }
});

module.exports = router;