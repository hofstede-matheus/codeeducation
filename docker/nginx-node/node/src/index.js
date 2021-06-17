const express = require("express");
const app = express();
// const { getAllModules } = require("./repository/ModulesRepository");
require('dotenv').config()

const API_PORT = process.env.API_PORT


app.get("/", (_, res) => {
  res.status(200).send("<h1>Full Cycle Rocks!</h1>");
});

app.listen(API_PORT, () => {
  console.log(`Running on port ${API_PORT}`);
});