// Dependencies
const express = require("express");
const app = express();
const path = require("node:path");

// Routers
const indexRouter = require("./routes/indexRouter");
const authRouter = require("./routes/authRouter");
const postRouter = require("./routes/postRouter");

// Set EJS as template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Read static files
app.use(express.static("public"));
// Parse URL form data
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/post", postRouter);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }

  console.log(`Server running on localhost:${PORT}`);
});
