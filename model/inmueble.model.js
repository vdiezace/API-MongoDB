const { model, Schema } = require("mongoose");

const inmuebleSchema = new Schema({
  floor: Number,
  letter: String,
  extension: Number,
  number_rooms: Number,
  rented: Boolean,
  owner_name: String,
  contact_email: String,
});

module.exports = model("inmueble", inmuebleSchema);
