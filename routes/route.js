const express = require("express");
const { Schema } = require("mongoose");
const router = new express.Router();
const App = require("../app.model");

router.get("/apps/:key", async (req, res) => {
  const sort = {};

  if (req.query.by === undefined) {
    res.send("Error: 'name' or 'id' is required.");
  }

  if (req.query.by) {
    const parts = req.query.by.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  try {
    const apps = await App.find({ id: req.params.key }, null, {
      limit: parseInt(req.query.max),
      skip: parseInt(req.query.start),
      end: parseInt(req.query.end),
      sort,
    });
    res.send(apps);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
