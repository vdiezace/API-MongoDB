const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Prueba");
});

module.exports = router;
