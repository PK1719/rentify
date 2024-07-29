const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  propertyName: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  area: { type: String, required: true },
  rent: { type: String, required: true },
  bedrooms: { type: String, required: true },
  furnishing: { type: String, required: true },
  propertyType: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

const ListingModel = mongoose.model("Listing", listingSchema);

module.exports = ListingModel;
