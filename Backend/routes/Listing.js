const express = require("express");
const router = express.Router();
const ListingController = require("../controllers/ListingController");
const multer = require("multer");
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../../src/pages/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  },
});

const upload = multer({ storage: storage });

router.post("/add", upload.single("image"), ListingController.addListing);
router.get('/view', ListingController.getAllListings);

module.exports = router;
