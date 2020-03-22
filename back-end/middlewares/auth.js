
const express = require('express');
const app = express();

app.use(function (req, res, next) {
    const authToken = req.header("authorization");
    if(typeof authToken !== "undefined") {
        const token = authToken.split(" ");
		const bearerToken = token[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(401);
    }
});

module.exports = app;
