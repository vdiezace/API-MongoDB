const router = require("express").Router();

const inmueble = require("../../model/inmueble.model");

router.get("/", (req, res) => {
  res.send("Prueba");
});

router.post("/", (req, res) => {
  res.send("Otra Prueba");
});

router.put("/:inmuebleId", (req, res) => {
  res.send("Actualiza");
});

router.delete("/:inmuebleId", (req, res) => {
  res.send("Borra");
});

module.exports = router;
