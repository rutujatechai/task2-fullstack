const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/submit", (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.send("All fields are required!");
    }

    res.render("success", {
        name,
        email
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});