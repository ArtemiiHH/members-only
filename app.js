const express = require("express");
const app = express();
const path = require("node:path");

const indexRouter = require("./routes/index");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running on localhost:${PORT}`);
});
