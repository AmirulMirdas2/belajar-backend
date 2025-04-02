const express = require("express");
const app = express();
morgan = require("morgan");

app.use(morgan("dev"));

//app.use((req,res,next())=>{
//     console.log('middleware pertama');
//     next();
// }) berfungsi untuk membuat middleware dan jika posisinya paling bawah tidak perlu menggunakan next

// app.use((req,res,next) => {
//     console.log('middleware pertama');
//     next();
//     console.log('setelah middleware pertama');
// })

// app.use((req,res,next) => {
//     console.log('middleware kedua');
//     next();
// })

// app.use((req,res,next) => {
// req.timeRequest = Date.now();
//     console.log(req.method, req.url);
//     next();
// })

// menggunakan kondisi if untuk membuat middleware semua halaman
// app.use((req,res,next) => {
//     const  password  = req.query.password; // req.query berfungsi untuk mengambil query string dari url
//     if (password === 'amirulganteng') {
//         next();
//     }  res.send('MASUKAN PASSWORD YANG BENAR');
// })

//menggunakan route spesifik

const auth = (req, res, next) => {
  const password = req.query.password; // req.query berfungsi untuk mengambil query string dari url
  if (password === "amirulganteng") {
    next();
  }
  res.send("MASUKAN PASSWORD YANG BENAR").status(404);
};

app.get("/admin", auth, (req, res) => {
  res.send("halo admin");
});

app.get("/about", (req, res) => {
  res.send("ini halaman about");
});

app.get("/", (req, res) => {
  res.send("hello world!!!");
});

app.use((req, res) => {
  res.status(404).send("halaman tidak ditemukan");
});

app.listen(8080, () => {
  console.log("server berjalan di http://localhost:8080");
});
