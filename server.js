const express = require("express");
const cors = require("cors");

// Imports routes
const appRouter = require("./routes/route");

const server = express();

server.use(cors());
server.use(express.json());

server.use(appRouter);

module.exports = server;
