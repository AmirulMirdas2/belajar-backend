const express = require("express");
const app = express();

// app.use((req, res) =>{
//     console.log('hello world!!');
//     res.send('<h1>amirul ganteng</h1>')
// })

app.get('/', (req,res) => {
    res.send('ini adalah halaman utama');
})

app.get("/cats", (req, res) => {
  res.send("ini adalah halaman cats");
});

app.get("/about", (req, res) => {
  res.send("ini adalah halaman about");
});

app.post("/cats", (req, res) => {
  res.send("ini adalah halaman post cats");
});

app.get('/book/:judul/:actor/:genre', (req, res) => {
    const {judul, actor} = req.params;
    res.send(`judul buku : ${judul} dan aktor : ${actor}`)
})


app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) res.send ('tidak ada kata yang dicari');
    res.send(`nilai yang dicari adalah ${q}`);
})


app.get("*", (req, res) => {
  res.send("halaman tidak ada");
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
