const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const spotSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  skaters: [{ type: mongoose.Types.ObjectId, ref: "skater" }],
  image: { type: String, required: false },
});

const Spot = mongoose.model("spot", spotSchema);
module.exports = Spot;
