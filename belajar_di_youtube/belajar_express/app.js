const express = require('express');
const app = express();
const port = 3000;
const categoriesRouter = require('./routes/categories')

// middleware
app.use(express.json());

// routing
app.use('/api/v1/categories',categoriesRouter);
// listen web
app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`);
})