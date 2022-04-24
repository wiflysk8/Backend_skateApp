const mongoose = require('mongoose');
const Spot = require('../models/Spot');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, "../../.env") });

const spots = [
  {
    name: "Macba",
    country: "Spain" , 
    city:"Barcelona" ,
  },

  {
    name: "Pier 7",
    country: "EEUU" , 
    city:"San Francisco" ,
  },


  {
    name: "Stalin Plaza",
    country: "Cech Republic" , 
    city:"Prague" ,
  },


];


const spotDocuments = spots.map(spot => new Spot(spot));
mongoose.connect('mongodb+srv://luis:Upgradehub22@cluster0.nkd4r.mongodb.net/skatedb?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}) 
.catch((err) => console.log(`Error deleting data: ${err}`))
.then(async () => {
      await Spot.insertMany(spotDocuments);
  console.log('DatabaseCreated')
  })
.catch((err) => console.log(`Error creating data: ${err}`))
.finally(() => mongoose.disconnect());
