const express = require("express"); // penting
const path = require("path");
const app = express(); // penting 

app.set("view engine", "ejs"); // set berfungis untuk memanggil si view engine dan ejs
app.set("views", path.join(__dirname, "/views")); // set berfungsi untuk memanggil path app.set('views', path.join(__dirname, '/views')
app.use(express.static(path.join(__dirname, '/public'))) // penting jika ingin membuat assets

app.get("/", (req, res) => {
  res.render("home.ejs"); // render bertujuan untuk memanggil di folder lain
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 100) + 1;
  res.render("rand", { num });
});

app.get('/cats', (req, res) => {
  const cats = ['khalid kashmiri', 'khidir karawita', 'ustman bin abu shisha', 'muhammad sumbul']
  res.render('cats', { cats });
});

app.get('/t/:tag', (req,res) => {
  const { tag } = req.params;
  res.render('tag.ejs', { tag });
});

app.get('*', (req, res) => {
    res.send('path tidak ditemukan');
});


app.listen(8080, () => { // oenting
  console.log("Server is running on http://localhost:8080");
});
