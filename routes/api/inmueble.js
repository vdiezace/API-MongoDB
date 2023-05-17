const router = require("express").Router();

const Inmueble = require("../../model/inmueble.model");

router.get("/", async (req, res) => {
  //res.send("Prueba");
  try {
    const inmueble = await Inmueble.find();
    if (inmueble.length === 0) {
      return res.json({ fatal: "No hay ningún inmueble" });
    }
    res.json(inmueble);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.post("/", async (req, res) => {
  //res.send("Otra Prueba");
  try {
    const result = await Inmueble.create(req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.put("/:inmuebleId", async (req, res) => {
  //res.send("Actualiza");
  const { inmuebleId } = req.params;
  try {
    const result = await Inmueble.findByIdAndUpdate(inmuebleId, req.body, {
      new: true,
    });
    if (!result) {
      return res.json({ fatal: "El id del inmueble no existe" });
    }
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.delete("/:inmuebleId", async (req, res) => {
  //res.send("Borra");
  const { inmuebleId } = req.params;
  try {
    const result = await Inmueble.findByIdAndDelete(inmuebleId);
    if (!result) {
      return res.json({ fatal: "el id del inmueble no existe" });
    }
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;
