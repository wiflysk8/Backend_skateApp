const mongoose = require('mongoose');
const Skater = require('../models/Skater');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, "../../.env") });


const skaters = [
  {
    id: 1,
    name: "Nyjah Huston",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648229542/nyjah_akqjgc.jpg",
    age: 25, 
    hometown:"Los Angeles" ,
    category: "skaters"
  },

  {
    id:2,
    name: "Yuto Horigome",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648229542/yuto_fyirke.jpg",
    age: 19,
    hometown:"Tokyo" ,
    category: "skaters"
  },

  {
    id: 3,
    name: "Alex Mildner",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648229542/milner_y5aypr.jpg",
    age: 20,
    hometown: "Pasadena",
    category: "skaters"
  },

  {
    id: 4,
    name: "David González",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648229542/david_r7wuib.jpg",
    age: 26,
    hometown: "Medellín",
    category: "skaters"
  },
  {
    id: 5,
    name: "Luan Oliveira",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648229542/luan_upajvj.jpg",
    age: 30,
    hometown: "Porto Alegre",
    category: "skaters"
  },
  {
    id: 6,
    name: "Shane o'neill",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648229542/dzenzo_otqiqm.jpg",
    age: 32,
    hometown: "Melbourne",
    category: "skaters"
  },
  {
    id: 7,
    name: "Ryan Dzenzo",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648230365/ryand_rcwy5y.jpg",
    age: 36,
    hometown: "Vancouver",
    category: "skaters"
  },
  {
    id: 8,
    name: "Jamie Foy",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648229542/foy_y0vudo.jpg",
    age: 27,
    hometown: "Tampa",
    category: "skaters"
  },
  {
    id: 9,
    name: "Paul Rodriguez",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648229542/prod_wowftw.jpg",
    age: 35,
    hometown: "Los Angeles",
    category: "skaters"
  },
  {
    id: 10,
    name: "Ishod Wair",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648229542/ishod_cs0zxo.jpg",
    age: 28,
    hometown: "New Orleans",
    category: "skaters"
  },
  {
    id: 11,
    name: "Carlos Ribeiro",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648230676/3240_dt6fhh.jpg",
    age: 33,
    hometown: "Curitiba",
    category: "skaters"
  },
  {
    id: 12,
    name: "Felipe Gustavo",
    image: "https://res.cloudinary.com/deza4wcxi/image/upload/v1648230676/2455_z2hwqj.jpg",
    age: 29,
    hometown: "Sao Paulo",
    category: "skaters"
  },

];


const skaterDocuments = skaters.map(skater => new Skater(skater));
mongoose.connect('mongodb+srv://luis:Upgradehub22@cluster0.nkd4r.mongodb.net/skatedb?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) 
.catch((err) => console.log(`Error deleting data: ${err}`))
.then(async () => {
      await Skater.insertMany(skaterDocuments);
  console.log('DatabaseCreated')
  })
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect());
