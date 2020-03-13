//this file is to connect to our database

const mongoose = require('mongoose');

// async  ensures that the funciton return a promise and wraps non-promise in it.
const connectDB = async () => {
    try {//use await so were not gonna use the .then
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, // 
            useCreateIndex: true,   //  so our app will not give us errors!!!
            useUnifiedTopology: true //
        }); 
                //remember you need the color dependenceis to make the colors works
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (err) {

        //if we dont connect properley
        console.log(`Error: ${err.message}`.red);
        //we exit with failure and the application shoutdown
        process.exit(1);
        
    }
}

module.exports = connectDB;