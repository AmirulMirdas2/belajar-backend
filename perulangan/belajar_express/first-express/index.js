const express = require('express')
const app = express();

// app.use((req, res) => {
//     res.send("hello world");
// })


app.get('/about', (req,res) => {
    res.send('ini adalah halaman abot')
})









app.listen(8080, () => {
    console.log('server running on port 8080')
})