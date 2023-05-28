const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today = new Date();
  console.log(today.getDate());
  if (today.getDate === 1) {
    res.send("sunday");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port 3000`);
});
