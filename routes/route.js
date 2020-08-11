const express = require("express");
const router = new express.Router();
const mongoose = require("mongoose");

let App = require("./route");

router.get("/apps", async (req, res) => {
  // Edge case -> If there is no id or name param given
  if (req.query.by === undefined) {
    res.send("Error: 'name' or 'id' is required.");
  }
  if (req.query.by) {
    const parts = req.query.by.split(":");
    sort[parts[0]] = parts[1] === "desc" ? -1 : 1;
  }

  try {
    (await req.name) ||
      req.id
        .populate({
          path: "apps",
          options: {
            limit: parseInt(req.query.max),
            skip: parseInt(req.query.start),
            sort,
          },
        })
        .execPopulate();
    res.send(req.name || req.id);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
