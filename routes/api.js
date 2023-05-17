const router = require("express").Router();

router.use("/inmueble", require("./api/inmueble"));

module.exports = router;
