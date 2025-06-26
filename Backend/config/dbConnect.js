const mongoose = require('mongoose')
require('dotenv').config() 


  const connectDB = async()=>{
    console.log(process.env.MONGO_URL)
    try {
        await mongoose.connect(process.env.MONGO_URL)  
        .then(() => console.log("MongoDB Connected"))  // Logs a success message if connected
        
    } catch (error) {
        console.log("errror in connecting ",error)
        
    }
  }

  module.exports = connectDB;