const Listing = require("../models/ListingModel");

exports.addListing = async (req, res) => {
  try {
    const newListing = new Listing({
      propertyName: req.body.propertyName,
      street: req.body.street,
      city: req.body.city,
      postalCode: req.body.postalCode,
      state: req.body.state,
      country: req.body.country,
      area: req.body.area,
      rent: req.body.rent,
      bedrooms: req.body.bedrooms,
      furnishing: req.body.furnishing,
      propertyType: req.body.propertyType,
      imageUrl: `/uploads/${req.file.filename}`, // Save the relative path to the image
    });
    await newListing.save();
    res.status(201).json(newListing);
  } catch (error) {
    res.status(500).json({ message: "Error adding listing", error });
  }
};

exports.getAllListings = async (req, res) => {
    try {
        const listings = await Listing.find();
        res.json(listings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getListingById = async (req, res) => {
  try {
      const listing = await Listing.findById(req.params.id);
      if (!listing) {
          return res.status(404).json({ message: 'Listing not found' });
      }
      res.json(listing);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};