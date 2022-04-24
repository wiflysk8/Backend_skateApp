const express = require("express");

const router = express.Router();



const skateBrands = require('../models/skate');




router.get('/', async (req, res) => {
	try {
		const skateBrand = await skateBrands.find({}, { createdAt:0,  updatedAt:0, __v:0});
		return res.status(200).json(skateBrand)
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/brand/:brand', async (req, res) => {
	const {brand} = req.params;

	try {
		const brandByName = await skateBrands.find({ brand });
		return res.status(200).json(brandByName);
	} catch (err) {
		return res.status(500).json(err);
	}
});


router.get('/rider/:rider', async (req, res) => {
	const {rider} = req.params;

	try {
		const brandByRider = await skateBrands.find({ rider });
		return res.status(200).json(brandByRider);
	} catch (err) {
		return res.status(500).json(err);
	}
});

router.get('/material/:material', async (req, res) => {
	const {material} = req.params;

	try {
		const brandByMaterial = await skateBrands.find({ material });
		return res.status(200).json(brandByMaterial);
	} catch (err) {
		return res.status(500).json(err);
	}
});


router.get('/year/:year', async (req, res) => {
	const {year} = req.params;

	try {
		const brandByYear = await skateBrands.find({ year: {$gte:year} });
		return res.status(200).json(brandByYear);
	} catch (err) {
		return res.status(500).json(err);
	}
});


router.post('/', async(req, res, next) => { 
    try{
    const newSkate = new skateBrands({
        id: req.body.id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        
    });

    const createdSkate = await newSkate.save();
    return res.status(201).json(createdSkate);
    }catch (error) {
        next(error);
    }
});


router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        // No será necesaria asignar el resultado a una variable ya que vamos a eliminarlo
        await skateBrands.findByIdAndDelete(id);
        return res.status(200).json('Skate deleted!');
    } catch (error) {
        return next(error);
    }
});

module.exports = router;