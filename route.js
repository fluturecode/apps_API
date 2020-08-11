const router = require("express").Router();
let App = require("./route");

router.route("/apps").get((req, res) => {
  App.find()
    .then((apps) => res.json(apps))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
