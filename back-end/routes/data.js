const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const authToken = require("../middlewares/auth");

const data = [
    {user: "ronald"},
    {user: "leo"},
    {user: "seba"},
    {user: "claudia"}
]

router.get("/", authToken, async (req, res)=> {
    try {
        const result = await jwt.verify(req.token,  process.env.JWT_SECRET);
        if(result) {
            res.json({
                text: "protected Response!",
                data
            });
        } else {
            res.sendStatus(403);
        }
    } catch(e) {
       res.status(500).send("error");
    }
    
});

module.exports = router;