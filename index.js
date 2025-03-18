require("dotenv").config();
const express = require("express");
const mongoDBConnection = require("./config/mongoDB-connection.js");
const app = express();
const port = 3000;
const upload = require("./multer-setup.js");

mongoDBConnection();

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send("File uploaded successfully");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
