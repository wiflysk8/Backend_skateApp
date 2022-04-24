const express = require("express");

const router = express.Router();

const Skater = require("../models/Skater");

router.get("/", async (req, res) => {
  try {
    const skater = await Skater.find();
    return res.status(200).json(skater);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const skater = await Skater.find({ id });
    return res.status(200).json(skater);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/name/:name", async (req, res) => {
  const { name } = req.params;

  try {
    const skaterByName = await Skater.find({ name });
    return res.status(200).json(skaterByName);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/sponsor/:sponsor", async (req, res) => {
  const { sponsor } = req.params;

  try {
    const skaterBySponsor = await Skater.find({ sponsor });
    return res.status(200).json(skaterBySponsor);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/hometown/:hometown", async (req, res) => {
  const { hometown } = req.params;

  try {
    const skaterByHometown = await Skater.find({ hometown });
    return res.status(200).json(skaterByHometown);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/age/:age", async (req, res) => {
  const { age } = req.params;

  try {
    const skaterByAge = await Skater.find({ age: { $lte: age } });
    return res.status(200).json(skaterByAge);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newSkater = new Skater({
      name: req.body.name,
      age: req.body.age,
      image: req.body.image,
      hometown: req.body.hometown,
      id: req.body.id,
      category: req.body.category,
    });

    const createdSkater = await newSkater.save();
    return res.status(201).json(createdSkater);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
    await Skater.findByIdAndDelete(id);
    return res.status(200).json("Skater deleted!");
  } catch (error) {
    return next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params; //Recuperamos el id de la url
    const skaterModify = new Skater(req.body); //instanciamos un nuevo Spot con la información del body
    skaterModify._id = id; //añadimos la propiedad _id al personaje creado
    const skaterUpdated = await Skater.findByIdAndUpdate(id, skaterModify, { new: true });
    return res.status(200).json(skaterUpdated); //Este spot que devolvemos es el anterior a su modificación
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
