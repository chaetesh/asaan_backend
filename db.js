const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/hackDB";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Mongod Succesfully")
    })
}

// This module will get exported
module.exports = connectToMongo;