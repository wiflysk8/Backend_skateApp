const mongoose = require('mongoose');
const brand = require('../models/skate');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, "../../.env") });


const urlDb = process.env.MONGO_DB;



const brands = [
  {   
    id: 1,
    name: "Almost",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/1_89565_keheus.jpg",
    category: "shop"
  },
  {   
    id: 2,
    name: "Real",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/1_90135_w59a6v.jpg",
    category: "shop"
  },
  {   
    id: 3,
    name: "DeathWish",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/1_89896_aim5wk.jpg",
    category: "shop"
  },
  {   
    id: 4,
    name: "Plan B",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/1_89204_scb6fd.jpg",
    category: "shop"
  },
  {   
    id: 5,
    name: "Enjoi",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/1_89562_d1k1wc.jpg",
    category: "shop"
  },
  {   
    id: 6,
    name: "Baker",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/1_89715_sk64my.jpg",
    category: "shop"
  },
  {   
    id: 7,
    name: "Alltimers",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/1_90243_c7lecj.jpg",
    category: "shop"
  },
  {   
    id: 8,
    name: "Flip",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/5_89660_qrylol.jpg",
    category: "shop"
  },
  {   
    id: 9,
    name: "Quarter Snacks",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/11001_88743_aiyibg.jpg",
    category: "shop"
  },
  {   
    id: 10,
    name: "Plan B",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/1_89203_snyvyl.jpg",
    category: "shop"
  },
  {   
    id: 11,
    name: "April",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/1_90179_zvvzp2.jpg",
    category: "shop"
  },
  {   
    id: 12,
    name: "Dime",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648231347/decks/1_90244_ecploy.jpg",
    category: "shop"
  },
  
  ];

  const skateDocuments = brands.map(skateBrand => new brand(skateBrand));
  mongoose.connect('mongodb+srv://luis:Upgradehub22@cluster0.nkd4r.mongodb.net/skatedb?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) 
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
		await brand.insertMany(skateDocuments);
    console.log('DatabaseCreated')
	})
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
  