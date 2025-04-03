const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const categoriesRouter = require('./routes/categories')
const morgan = require('morgan');

dotenv.config();

// middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// routing
app.use('/api/v1/categories',categoriesRouter);

// listen web
const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})  