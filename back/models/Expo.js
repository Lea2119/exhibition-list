// Les modèles représentent la structure des données utilisées dans une application.
// Ils définissent les schémas des données stockées dans la base de données.
// Les modèles sont responsables de la validation des données et fournissent des méthodes pour effectuer des opérations CRUD sur les données.

const mongoose = require("mongoose");
const moment = require("moment");

const ExpoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
  },
  place: {
    type: String,
  },
  img: {
    type: String,
  },
  artist: {
    type: String,
  },
  description: {
    type: String,
  },
  starting_date: {
    type: Date,
  },
  ending_date: {
    type: Date,
  },
  price: {
    type: String,
  },
});

ExpoSchema.methods.toJSON = function () {
  const expoObject = this.toObject();
  expoObject.starting_date = moment(expoObject.starting_date).format(
    "YYYY-MM-DD"
  );
  expoObject.ending_date = moment(expoObject.ending_date).format("YYYY-MM-DD");
  return expoObject;
};

module.exports = Expo = mongoose.model("expo", ExpoSchema);
