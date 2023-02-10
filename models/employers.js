const mongoose = require('mongoose');

//create scehma for an employer document
const employerSchema = new mongoose.Schema({
    name:{
        type:String,
        required
    },
    city:{
        type:String,
        required
    },
    contactEmail:{
        type:String
    },
    comments:{
        type:String
    },
    employees:{
        type:Number
    }
});

//making the model public
module.exports =mongoose.model('Employer',employerSchema);