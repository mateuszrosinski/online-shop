const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const errorController = require("./controllers/error");

app.use(errorController.get404);

app.listen(3000);
