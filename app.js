if (process.env.NODE_ENV !== "production") require("dotenv").config();

//import database
require("./database/mongoose");

const express = require("express"),
  cors = require("cors");

//import route
const appRouter = require("./routes/route");

const app = express();
app.use(cors());

//parse incoming JSON
app.use(express.json());

//call route
app.use(appRouter);
