const router = require("express").Router();

const Inmueble = require("../../model/inmueble.model");

router.get("/", async (req, res) => {
  //res.send("Prueba");
  try {
    const inmueble = await Inmueble.find();
    res.json(inmueble);
  } catch (error) {
    res.json({ fatal: error.message });
  }
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
