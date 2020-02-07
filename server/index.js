const express = require("express");

const PORT = process.env.APP_SERVER_PORT;
const HOST = "0.0.0.0";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, HOST);
