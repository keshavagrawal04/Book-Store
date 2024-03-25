const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Index Route For Book Store" });
});

const { bookRoutes, userRoutes } = require("./routes");
app.use("/api/v1/book/", bookRoutes);
app.use("/api/v1/user/", userRoutes);

module.exports = app;
