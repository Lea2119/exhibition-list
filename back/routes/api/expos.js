// Les routes définissent les points d'entrée de l'API pour différentes fonctionnalités de l'application.
// Elles déterminent quelles actions doivent être effectuées en fonction des requêtes reçues. (CRUD)

const express = require("express");
const router = express.Router();

// Load Expo model
const Expo = require("../../models/Expo");

// @route GET api/expos/test
// @description tests expos route
// @access Public
router.get("/test", (req, res) => res.send("expo route testing!"));

// @route GET api/expos
// @description Get all expos
// @access Public
router.get("/", (req, res) => {
  Expo.find()
    .then((expo) => res.json(expo))
    .catch((err) => res.status(404).json({ noexposfound: "No Expo found" }));
});

// @route GET api/exposs/:id
// @description Get single expo by id
// @access Public
router.get("/:id", (req, res) => {
  Expo.findById(req.params.id)
    .then((expo) => res.json(expo))
    .catch((err) => res.status(404).json({ noexposfound: "No Expo found" }));
});

// @route GET api/expos
// @description add/save expo
// @access Public
router.post("/", (req, res) => {
  Expo.create(req.body)
    .then((expo) => res.json({ msg: "Expo added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this expo" }));
});

// @route GET api/exposs/:id
// @description Update expo
// @access Public
router.put("/:id", (req, res) => {
  Expo.findByIdAndUpdate(req.params.id, req.body)
    .then((expo) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update the Database" })
    );
});

// @route GET api/expos/:id
// @description Delete expo by id
// @access Public
router.delete("/:id", (req, res) => {
  Expo.findByIdAndRemove(req.params.id, req.body)
    .then((expo) => res.json({ mgs: "Expo entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such an expo" }));
});

module.exports = router;
