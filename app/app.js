const express = require("express");
const app = express();
const { notFoundHandler, errorHandler } = require("./error");

const middlewares = require("./middlewares");
const v1Routes = require("./v1.routes");

app.use(middlewares);
app.set("view engine", "ejs");

app.get("/health", (_, res) => res.status(200).json({ message: "ok" }));
app.use(v1Routes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
