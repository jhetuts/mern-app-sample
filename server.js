const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const app = express();

app.use(
  cors({
    origin: process.env.URL_ORIGIN || "*",
  })
);

app.use(helmet());
app.use(express.json());

app.use("/v1/api/logs", (req, res) => {
  res.json({
    message: "Hello word",
  });
});

// Server static assets if in production
app.use("/", express.static(path.join(`${__dirname}/client/build`)));

const port = process.env.PORT || 1000;
app.listen(port, () => {
  console.log(`Listening to por ${port}`);
});
