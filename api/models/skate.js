const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skateSchema = new Schema (
    {   
        id: {type: Number},
        name: {type: String, required : true},
        image: {type: String, required : true},
        category: {type: String, required : false},
    },
    {
        timestamps : true,
    }
);

const skateBrands = mongoose.model('skatebrands', skateSchema);
module.exports = skateBrands;