const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skaterSchema = new Schema (
    {
        id: {type: String, required : false},
        name: {type: String, required : false},
        image: {type: String, required : true},
        age: {type: Number, required : false}, 
        hometown: {type: String, required : false},
        category: {type: String, required : false},
    },
    {
        timestamps : true,
    }
);

const Skater = mongoose.model('skater', skaterSchema);
module.exports = Skater;