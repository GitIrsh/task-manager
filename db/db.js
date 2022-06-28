const mongoose = require('mongoose');

module.exports = async() =>{
    try{
        const connectionParams ={
            useNewUrlParser : true,
            UseCreateIndex : true,
            useUnifiedTopology : true,
        }
        await mongoose.connect(process.env.DB,connectionParams);
        console.log('Connected to database');
    }
    catch(error){
        console.log("Could not connected",error);
    }
}