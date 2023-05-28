const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//set up ejs
app.get("/", (req, res) => {
  let day = new Date().getDay();
  // first template
  if (day === 6 || day === 0) {
    day = "Weekend";
    res.render("list", { days: day });
  } else {
    day = "weekday";
    res.render("list", { days: day });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port 3000`);
});
