const path = require('path');
const express = require('express'); //  return a function reference. or create an instance of an Express application 
const dotenv = require('dotenv'); //dotenv allows us to create global variables like our ports and database
const colors = require('colors');// allows us to have colors in our console
const morgan = require('morgan');
const connectDB = require('./config/db');// we connecting our database


dotenv.config({ path: './config/config.env'});
//we calling the function
connectDB();

//connecting our routes to our express backend
const transactions = require('./routes/transactions');

//to initialize our express app
const app = express();
//it will allow us to use the body parser
app.use(express.json());

//morgan
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}



app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

//to access config port
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));



