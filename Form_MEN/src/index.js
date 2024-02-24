const express = require('express');
const path = require("path")
const bcrypt = require('bcrypt');


const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("home");
})

app.get("/signup", (req, res) => {
    res.render("signup");
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