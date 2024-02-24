const express = require('express');
const path = require("path")
const bcrypt = require('bcrypt');
const User = require("./config")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/signup", (req, res) => {
    res.render("signup");
})

app.post("/signup", async (req, res) => {
    const user = {
        email: req.body.email,
        passwrod: req.body.passwrod
    }
    const userData = User.create(user)
    console.log(userData);
    res.redirect("login");
})

app.get("/login", (req, res) => {
    res.render("login")
})

const port = 3000;

app.listen(port, () => {
    try {
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console.log(error);
    }
})