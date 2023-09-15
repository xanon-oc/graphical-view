const morgan = require("morgan");
const express = require("express");
const corsOptions = require("../config/corsOptions");
const credentials = require("../middleware/credentials");
const cors = require("cors");

const middlewares = [
  morgan("dev"),
  credentials,
  cors(corsOptions),
  express.json(),
  express.urlencoded({ extended: false }),
  express.static("public"),
];

module.exports = middlewares;
