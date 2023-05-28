const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT || port, () => {
  console.log(`Server is running on port ${port}`);
});
