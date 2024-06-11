const express = require("express");
const cors = require("cors");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
  },
  info: {
    title: "Your API Title",
    version: "1.0.0",
    description: "A description of your API",
  },
  servers: [{ url: "http://localhost:3000" }],
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Index Route For Book Store" });
});

const { bookRoutes, userRoutes } = require("./routes");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/api/v1/book/", bookRoutes);
app.use("/api/v1/user/", userRoutes);

module.exports = app;
