const e = require("express");
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
const secretKey = "secret123";

app.get("/", (req, res) => {
    res.json({
        message: "simple message"
    });
});

app.post("/login", (req, res) => {
    const user = {
        id: 1,
        username: "potato",
        email: "potato@email.com"
    }
    jwt.sign({ user }, secretKey, { expiresIn: '300s' }, (err, token) => {
        res.json({token, user});   
    });
});

app.post("/profile", verifyToken, (req, res) => {
    jwt.verify(req.token, secretKey, (err, authData) => {
        if (err) {
            res.send({ result: "Invalid Token." });
        } else {
            res.json({ message: "Profile Succeeded.", authData });
        }
    });
});

function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    } else {
        res.send({ result: "Token is not valid." });
    }
}

app.listen(3000);