const mongoose = require('mongoose')

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
    }
    catch(e){
        console.log(e)
    }
}

module.exports = connectDb