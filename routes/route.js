const express = require("express");
const { Schema } = require("mongoose");
const router = new express.Router();
const App = require("../app.model");

// router.get("/apps/:by", async (req, res) => {
router.get("/apps", async (req, res) => {
  const sort = {};
  // Set max, and if there is no max param, default to 50
  const max = req.query.max || 50;
  // Set start, and if there is no start param, default to 1
  const start = req.query.start || 1;
  // Send end and if there is no end param, set the end to be the max
  const end = req.query.end || max;
  // Edge case
  if (req.query.by === undefined) {
    res.send("Error: 'name' or 'id' is required.");
  }
  if (req.query.by) {
    const parts = req.query.by.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  try {
    const apps = await App.find(req.apps);
    // Determine pagination of page based on query params and index
    const startIndex = (start - 1) * end;
    const endIndex = start * end;
    const result = apps.slice(startIndex, endIndex);

    res.send(result);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
