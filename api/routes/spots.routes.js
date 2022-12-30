const express = require("express");

const router = express.Router();



const {isAuth} = require("../middlewares/auth.middleware");
const { upload, uploadToCloudinary } = require("../middlewares/file.middleware");



const Spot = require('../models/Spot');

router.get('/', async (req, res) => {
	try {
		const spot = await Spot.find({}, { _id: 0,  createdAt:0,  updatedAt:0, __v:0})
        .populate('skaters', { _id: 0,  createdAt:0,  updatedAt:0, __v:0});
		return res.status(200).json(spot)
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/name/:name', async (req, res) => {
	const {name} = req.params;

	try {
		const spotByName = await Spot.find({ name });
		return res.status(200).json(spotByName);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/country/:country', async (req, res) => {
	const {country} = req.params;

	try {
		const spotByCountry = await Spot.find({ country });
		return res.status(200).json(spotByCountry);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/city/:city', async (req, res) => {
	const {city} = req.params;

	try {
		const spotByCity = await Spot.find({ city });
		return res.status(200).json(spotByCity);
	} catch (err) {
		return res.status(500).json(err);
	}
});


router.post('/', [upload.single('image'), uploadToCloudinary], async(req, res, next) => { 
    try{
    req.body.image = req.file_url;
    const newSpot = new Spot(req.body);

    const createdSpot = await newSpot.save();
    return res.status(201).json(createdSpot);
    }catch (error) {
        next(error);
    }
});

//post de relaciones

router.post('/create', async (req, res, next) => {
    try {
        const newSpot = new Spot({
			name: req.body.name,
			country: req.body.country,
			city: req.body.city, 
			skaters: [] 
        });
        const createdSpot = await newSpot.save();
        return res.status(201).json(createdSpot);
    } catch (error) {
        next(error);
    }
});

//Hacemos un put para relacionar los spots con los skaters


router.put('/add-skater', async (req, res, next) => {
    try {
        const { spotId } = req.body;
        const { skaterId } = req.body;
        const updatedSpot = await Spot.findByIdAndUpdate(
            spotId,
            { $push: { skaters: skaterId } },
            { new: true }
        );
        return res.status(200).json(updatedSpot);
    } catch (error) {
        return next(error);
    }
});



router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await Spot.findByIdAndDelete(id);
        return res.status(200).json('Spot deleted!');
    } catch (error) {
        return next(error);
    }
});


router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params //Recuperamos el id de la url
        const spotModify = new Spot(req.body) //instanciamos un nuevo Spot con la información del body
        spotModify._id = id //añadimos la propiedad _id al personaje creado
        const spotUpdated = await Spot.findByIdAndUpdate(id , spotModify, { new: true })
        return res.status(200).json(spotUpdated)//Este spot que devolvemos es el anterior a su modificación
    } catch (error) {
        return next(error)
    }
});


module.exports = router;
