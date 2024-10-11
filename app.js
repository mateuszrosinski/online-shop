const express = require("express");
const app = express();
const PORT = 3000;

const path = require("path");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

app.use(shopRoutes);
app.use("/admin", adminRoutes);

app.use(errorController.get404);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}.`);
});
